import { Image, Text, HStack, Avatar, Button } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { useState } from "react";
import LoginRegisterModal from "../login/LoginRegisterModal";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("isLoggedIn")
  );

  const handleLoginToggle = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const [isModalOpen, setIsModalOpen] = useState(!isLoggedIn);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <HStack justifyContent="space-between">
        <Image src={logo} width="100px" marginLeft="1%" />
        <Text fontSize={"xx-large"}>NailedIT</Text>
        {isLoggedIn ? (
          <Avatar name="Test Dummy" src="" marginRight="10px" />
        ) : (
          <div className="login" style={{ padding: "20px" }}>
            <Button colorScheme="orange" onClick={handleModalOpen}>
              Open Login/Register Modal
            </Button>
            <LoginRegisterModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onLoginSuccess={handleLoginToggle}
            />
          </div>
        )}
      </HStack>
    </nav>
  );
};

export default NavBar;
