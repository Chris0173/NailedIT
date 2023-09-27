import {
  Text,
  Image,
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import "./LoginRegisterModal.css";
import logo from "../../assets/logo.png";

interface LoginRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginRegisterModal: React.FC<LoginRegisterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = () => {
    const loginData = {
      email: loginEmail,
      password: loginPassword,
    };

    axios
      .post("http://localhost:3001/api/auth/login", loginData)
      .then((response) => {
        console.log("Login successful:", response.data);
        // Clear Input
        setLoginEmail("");
        setLoginPassword("");
        // Close Modal
        onClose();
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const handleRegister = () => {
    const registerData = {
      first_name: registerFirstName,
      last_name: registerLastName,
      email: registerEmail,
      password: registerPassword,
    };

    axios
      .post("http://localhost:3001/api/auth/register", registerData)
      .then((response) => {
        console.log("Registration successful:", response.data);
        setRegisterFirstName("");
        setRegisterLastName("");
        setRegisterEmail("");
        setRegisterPassword("");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="loginRegisterModalHeader">
          <HStack justifyContent="space-between">
            <Text>Login / Register</Text>
            <Image src={logo} width="100px" />
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="loginRegisterModalBody">
          <Box display="flex">
            {/* Login Section */}
            <Box flex={1} mr={2}>
              <h2 className="loginModalTitle">
                Have an account? <br />
                Login Here!
              </h2>
              <Input
                className="loginModalInput"
                type="text"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <Input
                className="loginModalInput"
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <Button
                colorScheme="orange"
                onClick={handleLogin}
                className="loginModalButton"
              >
                Login
              </Button>
            </Box>

            {/* Register Section */}
            <Box flex={1} ml={2}>
              <h2 className="registerModalTitle">
                Not a user? <br /> Register Here!
              </h2>
              <Input
                className="registerModalInput"
                type="text"
                placeholder="First Name"
                value={registerFirstName}
                onChange={(e) => setRegisterFirstName(e.target.value)}
              />
              <Input
                className="registerModalInput"
                type="text"
                placeholder="Last Name"
                value={registerLastName}
                onChange={(e) => setRegisterLastName(e.target.value)}
              />
              <Input
                className="registerModalInput"
                type="text"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <Input
                className="registerModalInput"
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />

              <Button
                colorScheme="orange"
                onClick={handleRegister}
                className="registerModalButton"
              >
                Register
              </Button>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginRegisterModal;
