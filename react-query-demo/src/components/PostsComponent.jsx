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
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5,          // Cache data for 5 minutes
    staleTime: 1000 * 60 * 2,          // Data considered fresh for 2 minutes
    refetchOnWindowFocus: false,       // Do not refetch when window refocuses
    keepPreviousData: true,            // Keep old data while fetching new
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
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
