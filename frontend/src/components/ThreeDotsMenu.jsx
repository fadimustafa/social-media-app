import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const ThreeDotsMenu = () => {
  const toast = useToast();
  const handelPostUrlCopy = () => {
    const copyedLink = window.location.href;
    navigator.clipboard.writeText(copyedLink);
    toast({ description: "Linke copyed" });
  };
  return (
    <>
      <Menu isLazy>
        <MenuButton>
          <BsThreeDots size={20} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handelPostUrlCopy}>copy post link</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default ThreeDotsMenu;
