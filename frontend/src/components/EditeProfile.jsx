import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import axios from "../axios";
import AuthContext from "../context/AuthtictionContext";
const EditeProfile = () => {
  const { userAuth } = useContext(AuthContext);
  const userID = userAuth.id;

  //regstary
  const { username, setUsername } = useState("");
  const [email, setEmail] = useState("");
  const [CurrentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  //profile info
  const [profilename, setProfilename] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [bio, setBio] = useState("");

  const [err, setErr] = useState("");

  const handelUpdate = async () => {
    try {
      const response = await axios.post("users/edit/:id", {
        profilename,
        profilePic,
        bio,
        userID,
      });
      console.log(response);
      if (response?.status === 200) {
        setUserAuth({ profilename, profilePic, bio });
        console.log(userAuth);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <FormControl mb={10}>
        <Box outline={"1px"} w={"full"}>
          <Text color={"gray.light"}>Edit Profile</Text>
        </Box>
        <Box my={4} w={"50%"}>
          <FormLabel marginBottom={0.5}>Profile Name</FormLabel>
          <Input
            type="text"
            variant="flushed"
            size="sm"
            onChange={(e) => setProfilename(e.target.value)}
          />
        </Box>
        <Box my={4} w={"50%"}>
          <FormLabel marginBottom={0.5}>Bio</FormLabel>
          <Input
            type="text"
            variant="flushed"
            size="sm"
            onChange={(e) => setBio(e.target.value)}
          />
        </Box>

        <Box>
          <Flex
            justifyContent={"space-between"}
            w={"full"}
            alignItems={"center"}
          >
            <Box>
              <FormLabel marginBottom={0.5}>Profile Picture</FormLabel>
              <Input
                type="file"
                onChange={(e) =>
                  setProfilePic(URL.createObjectURL(e.target.files[0]))
                }
              />
            </Box>

            <Avatar src={profilePic} size={"lg"} />
          </Flex>
        </Box>
        <Text my={4} color={"gray.light"}>
          Edit sign in info
        </Text>
        <Box mb={4} w={"50%"}>
          <FormLabel marginBottom={0.5}>User name</FormLabel>
          <Input
            type="text"
            variant="flushed"
            size="sm"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box mb={4} w={"50%"}>
          <FormLabel marginBottom={0.5}>Current password</FormLabel>
          <Input
            type="password"
            variant="flushed"
            size="sm"
            onChange={(e) => setCurrentPass(e.target.value)}
          />
        </Box>
        <Box mb={4} w={"50%"}>
          <FormLabel marginBottom={0.5}>new password</FormLabel>
          <Input
            type="password"
            variant="flushed"
            size="sm"
            onChange={(e) => setNewPass(e.target.value)}
          />
        </Box>
        <Flex gap={2} justifyContent={"end"} w={"full"}>
          <Button onClick={handelUpdate}>Clear</Button>
          <Button onClick={handelUpdate}>Save</Button>
        </Flex>
      </FormControl>
    </>
  );
};

export default EditeProfile;
