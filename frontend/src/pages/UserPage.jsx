import UserHeader from "../components/UserHeader";
import PostComp from "../components/PostComp";

function UserPage() {
  return (
    <>
      <UserHeader />
      <PostComp
        likes={224}
        replies={23}
        postImg="\public\pic1.jpg"
        postTitle="hello "
      />

      <PostComp likes={11} replies={53} postTitle="hello " />

      <PostComp
        likes={524}
        replies={3}
        postImg="\public\pic1.jpg"
        postTitle="hello "
      />

      <PostComp
        likes={2}
        replies={21}
        postImg="\public\pic1.jpg"
        postTitle="hello "
      />
    </>
  );
}

export default UserPage;
