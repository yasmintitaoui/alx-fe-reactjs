import { useParams } from "react-router-dom";

export default function UserPost() {
  const { postId } = useParams(); // Dynamic route param
  return <p>Viewing post ID: {postId}</p>;
}
