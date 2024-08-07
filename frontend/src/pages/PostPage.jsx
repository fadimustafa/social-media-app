import TimeLinePosts from "../components/TimeLinePosts";
import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
const PostPage = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const respons = await axios.get("/posts");
      return respons.data;
    },
  });

  return (
    <>
      {isError
        ? "somthing went wrong"
        : isLoading
        ? "loading.."
        : data.map((post) => <TimeLinePosts post={post} key={post.id} />)}
    </>
  );
};

export default PostPage;
