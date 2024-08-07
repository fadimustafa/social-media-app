import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import ThreeDotsMenu from "./ThreeDotsMenu";
import ActionButtons from "./ActionButtons";
import LikesAndReplies from "./LikesAndReplies";
import Comments from "./Comments";

function TimeLinePosts({ post }) {
  const [liked, setLike] = useState(false);
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Flex w={"full"} alignItems={"center"}>
          <Avatar size={"md"} src={post.profilePic} name="fadi mustaf" />
          <Text ml={3} mr={1} fontSize={"large"} fontWeight={"bold"}>
            {post.profilename}
          </Text>
          <Image w={4} h={4} src="\public\vrified-icon.png" />
        </Flex>
        <Flex gap={2} alignItems={"center"} onClick={(e) => e.preventDefault()}>
          <Text fontSize={"md"} color={"gray.light"}>
            {post.creatDate}
          </Text>
          <ThreeDotsMenu />
        </Flex>
      </Flex>
      <Text mx={3} my={3}>
        {post.desc}
      </Text>
      <Box w={"full"} overflow={"hidden"} borderRadius={5}>
        <Image src={post?.img} />
      </Box>
      <Flex my={2} gap={2}>
        <ActionButtons liked={liked} setLike={setLike} setSize="20" />
      </Flex>
      <LikesAndReplies liked={liked} />
      <Divider my={2} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}> Let's use the App to like</Text>
        </Flex>
        <Button>Get it</Button>
      </Flex>
      <Divider my={2} />
      <Comments
        comment="nice pic"
        username="Reema"
        createdAt="1d"
        likes={12}
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comments
        comment="i love you"
        username="Sara"
        createdAt="2h"
        likes={2}
        userAvatar="https://bit.ly/kent-c-dodds"
      />
      <Comments
        comment="my pussy is wet"
        username="Farah"
        createdAt="3h"
        likes={1}
        userAvatar="https://bit.ly/ryan-florence"
      />
    </>
  );
}

export default TimeLinePosts;
