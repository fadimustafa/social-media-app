import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthtictionContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios.js";
import { color } from "framer-motion";

const LoginPage = () => {
  const { setUserAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const LOGIN_URL = "users/login";
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        { username, password },
        {
          Headers: { "content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const userData = response?.data;
      setUserAuth(userData);
      setUsername("");
      setPassword("");
      navigate(`/${username}`);
      setSuccess(true);
    } catch (err) {
      setErrMsg(err.response.data);
      console.log(err);
    }
  };
  return (
    <>
      {success ? (
        <Text>you are Logged in</Text>
      ) : (
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
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FormErrorMessage>User name is required.</FormErrorMessage>

              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormErrorMessage>Password is required.</FormErrorMessage>
              <Text>{errMsg && errMsg}</Text>
              <Button my={2} onClick={handleLogin}>
                Submit
              </Button>
              <br />
              <Link to={"/signup"}>Signup her</Link>
            </FormControl>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default LoginPage;
