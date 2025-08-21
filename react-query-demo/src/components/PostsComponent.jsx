import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch, // Add refetch to manually trigger data reload
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5,          // Cache for 5 minutes
    staleTime: 1000 * 60 * 2,          // Data fresh for 2 minutes
    refetchOnWindowFocus: false,       // Don't refetch on window focus
    keepPreviousData: true,            // Keep previous data while fetching
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
        onClick={() => refetch()}
      >
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
