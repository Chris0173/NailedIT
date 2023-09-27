import { Image, Text, HStack, Avatar } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <HStack justifyContent="space-between">
        <Image src={logo} width="100px" marginLeft="1%" />
        <Text fontSize={"xx-large"}>NailedIT</Text>
        <Avatar name="Example User" src="" marginRight="10px" />
      </HStack>
    </nav>
  );
};

export default NavBar;
