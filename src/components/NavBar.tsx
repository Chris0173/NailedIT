import { Image, Text, Button, HStack } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import "./LoginForm";
import "../CSS/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <HStack justifyContent="space-between">
        <Image src={logo} width="100px" marginLeft="1%" />
        <Text fontSize={"xx-large"}>NailedIT</Text>
        <Button marginRight={2}>Login</Button>
      </HStack>
    </nav>
  );
};

export default NavBar;
