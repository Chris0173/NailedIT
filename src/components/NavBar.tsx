import { Image, Text, Button, HStack } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import "./LoginForm";

const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={55} marginLeft={2} />
        <Text fontSize={"xx-large"}>NailedIT</Text>
        <Button>Login</Button>
      </HStack>
    </nav>
  );
};

export default NavBar;
