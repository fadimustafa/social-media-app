import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import AuthContext from "../context/AuthtictionContext";
function UserHeader() {
  const { userAuth } = useContext(AuthContext);

  const toast = useToast();
  const copyProfileLink = () => {
    const copyedLink = window.location.href;
    navigator.clipboard.writeText(copyedLink);
    toast({ description: "Linke copyed" });
  };

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {userAuth.profilename}
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text
              fontSize={"small"}
              bg={"gray.dark"}
              color={"gray.light"}
              borderRadius={5}
              padding={1}
            >
              @{userAuth.username}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="fadi mustafa"
            src="frontend\public\pic1.jpg"
            size={{ base: "md", md: "xl" }}
          ></Avatar>
        </Box>
      </Flex>

      <Text>her write you bio.</Text>

      <Flex justifyContent={"space-between"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Text color={"gray.light"}>3.2k followrs</Text>
          <Box w="1" h="1" borderRadius={"full"} bg={"gray.light"}></Box>
          <Text color={"gray.light"}>Instagram.com</Text>
        </Flex>
        <Flex>
          <Link to={`/edit/${userAuth.username}`}>
            <Button>Edit profile</Button>
          </Link>
          <Box className="icone-hover">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icone-hover">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.light"}>
                  <MenuItem bg={"gray.light"} onClick={copyProfileLink}>
                    {" "}
                    copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex
          flex={1}
          justifyContent={"center"}
          borderBottom={"1px solid white"}
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Posts</Text>
        </Flex>
        <Flex
          flex={1}
          justifyContent={"center"}
          borderBottom={"1px solid gray"}
          cursor={"pointer"}
          color={"gray.light"}
        >
          <Text fontWeight={"bold"}>Replays</Text>
        </Flex>
      </Flex>
    </VStack>
  );
}

export default UserHeader;
