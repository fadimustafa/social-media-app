import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import ThreeDotsMenu from "./ThreeDotsMenu";
import LikesAndReplies from "./LikesAndReplies";
import ActionButtons from "./ActionButtons";
import { useState } from "react";

const Comments = ({ comment, username, likes, userAvatar, createdAt }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Flex w={"full"} alignItems={"center"}>
          <Avatar size={"xs"} src={userAvatar} name="fadi mustaf" />
          <Text ml={3} mr={1} fontSize={"md"} fontWeight={"bold"}>
            {username}
          </Text>
        </Flex>
        <Flex gap={1} alignItems={"center"} onClick={(e) => e.preventDefault()}>
          <Text fontSize={"sm"} color={"gray.light"}>
            {createdAt}
          </Text>
          <ThreeDotsMenu />
        </Flex>
      </Flex>
      <Text my={1} fontSize={"sm"}>
        {comment}
      </Text>
      <ActionButtons liked={liked} setLike={setLiked} setSize="15" />
      <Text fontSize={"xs"} color={"gray.light"}>
        {likes + (liked ? 1 : 0)} likes
      </Text>
      <Divider my={1} />
    </>
  );
};

export default Comments;
