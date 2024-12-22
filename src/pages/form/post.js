import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// GraphQL query to fetch the post by its slug
const GET_POST_BY_TITLE = `
  query GetPostByTitle($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
          parent {
            node {
              name
            }
          }
        }
      }
      author {
        node {
          name
        }
      }
      seo {
        metaDesc
        title
        fullHead
        canonical
      }
    }
  }
`;

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query; // Get the 'slug' from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return; // Only fetch data if slug is available

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
          query: GET_POST_BY_TITLE,
          variables: { slug },
        });

        setPost(response.data.data.postBy);
      } catch (err) {
        setError('Failed to fetch post.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No post found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Head>
        <title>{post.seo?.title || post.title}</title>
        <meta name="description" content={post.seo?.metaDesc || ''} />
        <link rel="canonical" href={post.seo?.canonical || window.location.href} />
      </Head>

      <h1>{post.title}</h1>
      <p>
        By {post.author?.node?.name} on {new Date(post.date).toLocaleDateString()}
      </p>

      {post.featuredImage?.node?.sourceUrl && (
        <div style={{ marginBottom: '20px' }}>
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            style={{ maxWidth: '100%', borderRadius: '8px' }}
          />
        </div>
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
