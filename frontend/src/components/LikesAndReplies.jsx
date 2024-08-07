import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const LikesAndReplies = ({ liked }) => {
  return (
    <>
      <Flex gap={2} alignItems={"center"} my={1}>
        <Text color={"gray.light"}>{232 + (liked ? 1 : 0)} likes</Text>
        <Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
        <Text color={"gray.light"}>323 replies</Text>
      </Flex>
    </>
  );
};

export default LikesAndReplies;
