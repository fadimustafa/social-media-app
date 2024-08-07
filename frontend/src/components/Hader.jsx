import { Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

function Hader() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"end"} mt={6} mb={12}>
      <Image
        cursor={"pointer"}
        w={7}
        alt="dark=mode"
        src={colorMode === "dark" ? "dark-theme.svg" : "/light-theme.svg"}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}

export default Hader;
