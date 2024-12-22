import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Define the GraphQL query as a string
const POSTS_QUERY = `
query GetPages($first: Int, $after: String) {
  pages(first: $first, after: $after) {
    nodes {
      title
      slug
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;

export default function Pagelist() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const router = useRouter();

  // Function to fetch posts
  const fetchPosts = async (cursor = null) => {
    setLoading(true);
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
        query: POSTS_QUERY,
        variables: {
          first: 10,
          after: cursor,
        },
      });

      const fetchedPosts = response.data.data.pages.nodes;
      const pageInfo = response.data.data.pages.pageInfo;

      // Update state with the new data
      setPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
      setHasNextPage(pageInfo.hasNextPage);
      setEndCursor(pageInfo.endCursor);
      setError(null);
    } catch (err) {
      setError("Failed to fetch posts.");
    } finally {
      setLoading(false);
      setLoadMore(false);
    }
  };

  useEffect(() => {
    // Fetch initial posts
    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    setLoadMore(true);
    fetchPosts(endCursor);
  };

  const handlePostClick = (slug) => {
    router.push(`/form/Page?slug=${slug}`); // Navigate to dynamic post page
  };

  return (
    <div className="p-4 m-2">
      <h1 className="text-4xl mb-4">Page Review Site</h1>

      {loading && posts.length === 0 && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {posts.map((post) => (
        <div key={post.slug} className="mb-4 pb-2 pl-2 pr-2 border-b border-gray-300">
          <h2
            className="text-2xl pb-2 cursor-pointer text-blue-500"
            onClick={() => handlePostClick(post.slug)}
          >
            {post.title}
          </h2>
        </div>
      ))}

      {hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            disabled={loadMore}
            className={`px-6 py-3 bg-blue-500 text-white rounded-md shadow-md transition-all duration-300 ease-in-out 
              ${loadMore ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
          >
            {loadMore ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="text-blue-300" cx="12" cy="12" r="10" fill="none" strokeWidth="4" />
                  <path className="text-blue-500" fill="currentColor" d="M12 2v10l4 4" />
                </svg>
                Loading...
              </span>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
