import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const SingupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilename, setProfilename] = useState("");
  const [err, setErr] = useState("");

  const handellogup = async (e) => {
    e.preventDefault();
    try {
      const respons = await axios.post(
        "http://localhost:8800/api/users/signup",
        { username, email, password, profilename }
      );
      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
      setErr(err);
    }
  };
  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Flex
          w={400}
          h="auto"
          background={"gray.light"}
          border={"2px sold black"}
          borderRadius={5}
          p={5}
        >
          <FormControl>
            <Text my={3} fontSize={"large"} fontWeight={"bold"}>
              Wellcom to Threads 👋
            </Text>
            <FormLabel>User name</FormLabel>
            <Input type="text" onChange={(e) => setUsername(e.target.value)} />
            <FormErrorMessage>User name is required.</FormErrorMessage>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            <FormErrorMessage>Email is required.</FormErrorMessage>

            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormErrorMessage>Password is required.</FormErrorMessage>

            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              onChange={(e) => setProfilename(e.target.value)}
            />
            {err && <Text color={"red"}>{err.response.data}</Text>}
            <Button marginTop={5} onClick={handellogup}>
              Submit
            </Button>
            <Text>
              {" "}
              <Link to={"/login"}>Signup her</Link>
            </Text>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};

export default SingupPage;
