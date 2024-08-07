import { Avatar, AvatarGroup, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import { useContext, useState } from "react";
import ThreeDotsMenu from "./ThreeDotsMenu";
import LikesAndReplies from "./LikesAndReplies";
import AuthContext from "../context/AuthtictionContext";

const PostComp = ({ postImg, postTitle, likes, replies }) => {
  const [liked, setLike] = useState(false);
  const { userAuth } = useContext(AuthContext);
  return (
    <Link to="/mark/post/1">
      <Flex gap={1} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size="md" name="mark" src="\public\pic1.jpg" />
          <Box w={0.5} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <AvatarGroup size="sm" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"md"} mr={1} fontWeight={"bold"}>
                {userAuth.profilename}
              </Text>
              <Image w={4} h={4} src="\public\vrified-icon.png" />
            </Flex>
            <Flex
              gap={2}
              alignItems={"center"}
              onClick={(e) => e.preventDefault()}
            >
              <Text fontSize={"md"} color={"gray.light"}>
                2d
              </Text>
              <ThreeDotsMenu />
            </Flex>
          </Flex>
          <Text fontSize={"md"}>{postTitle}</Text>

          {postImg && (
            <Box
              borderRadius={5}
              border={"1px solid"}
              borderColor={"gray.light"}
              overflow={"hidden"}
            >
              <Image src={postImg} w={"full"} />
            </Box>
          )}
          <Flex gap={3} py={1}>
            <ActionButtons liked={liked} setLike={setLike} />
          </Flex>
          <Flex ml={1.5}>
            <LikesAndReplies />
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default PostComp;
