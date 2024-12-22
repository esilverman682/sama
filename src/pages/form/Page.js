import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';


// GraphQL query as a string
const GET_POST_BY_TITLE = `
  query GetPageBySlug($slug: String!) {
    pageBy(uri: $slug) {
      title
      content
      date
      blocks
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
        }
      }
      seo {
        metaDesc
        canonical
      }
    }
  }
`;

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query; // Get the 'slug' from the URL

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      // Fetch data with axios
      axios
        .post(
            process.env.NEXT_PUBLIC_STAGING_URL, // Replace with  actual GraphQL endpoint
          {
            query: GET_POST_BY_TITLE,
            variables: { slug },
          }
        )
        .then((response) => {
          setData(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching post:", err);
          setError(err);
          setLoading(True);
        });
    }
  }, [slug]);

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Error handling
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Destructure pageBy safely
  const pageBy = data?.pageBy;

  // Check if pageBy exists
  if (!pageBy) {
    return <p>No data found for this page.</p>;
  }

  // Log the blocks data to inspect its structure
  console.log("Blocks data:", pageBy.blocks);

  // Check if blocks is an array
  let blocks = Array.isArray(pageBy.blocks) ? pageBy.blocks : [];

  return (
    <div style={{ padding: '20px' }}>
      <Head>
        <title>{pageBy.title}</title>
        <meta name="description" content={pageBy.seo?.metaDesc || ''} />
        <link rel="canonical" href={pageBy.seo?.canonical || window.location.href} />
      </Head>

      <h1>{pageBy.title}</h1>
      <p>
        By {pageBy.author?.node?.name || 'Unknown'} on {new Date(pageBy.date).toLocaleDateString()}
      </p>

      {pageBy.featuredImage?.node?.sourceUrl && (
        <div style={{ marginBottom: '20px' }}>
          <Image
            src={pageBy.featuredImage.node.sourceUrl}
            alt={pageBy.title}
            style={{ maxWidth: '100%', borderRadius: '8px' }}
          />
        </div>
      )}

      {/* Render blocks */}
      <div>
        {blocks.length > 0 ? (
          blocks.map((block, index) => {
            switch (block.name) {
              case 'core/paragraph':
                return (
                  <p key={index} dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
                );
              case 'core/image':
                return (
                  <Image
                    key={index}
                    src={block.attrs.src}
                    alt={block.attrs.alt || ''}
                    style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '20px' }}
                  />
                );
              case 'core/heading':
                return React.createElement(
                  `h${block.attrs.level || 2}`,
                  { key: index },
                  block.innerHTML
                );
              case 'core/list':
                return (
                  <ul key={index}>
                    {block.attrs.items.map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                );
              // Add more block types as needed
              default:
                console.warn(`Unknown block type: ${block.name}`);
                return null;
            }
          })
        ) : (
          <p>No content available.</p>
        )}
      </div>

      {/* Render the main content if needed */}
      <div dangerouslySetInnerHTML={{ __html: pageBy.content }} />
    </div>
  );
}
