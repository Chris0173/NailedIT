import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

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
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login / Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex">
            {/* Login Section */}
            <Box flex={1} mr={2}>
              <h2>Login</h2>
              <Input
                type="text"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <Button colorScheme="orange" onClick={handleLogin}>
                Login
              </Button>
            </Box>

            {/* Register Section */}
            <Box flex={1} ml={2}>
              <h2>Register</h2>
              <Input
                type="text"
                placeholder="First Name"
                value={registerFirstName}
                onChange={(e) => setRegisterFirstName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={registerLastName}
                onChange={(e) => setRegisterLastName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />

              <Button colorScheme="orange" onClick={handleRegister}>
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
