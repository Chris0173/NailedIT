import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./LoginForm.css";
import Logo from "../assets/logo.png";

const LoginForm = () => {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box className="login-form" p={8}>
        <Flex className="form-section" direction="row">
          {/* Login Section */}
          <Box flex={1} pr={2}>
            <Image src={Logo} height="110px" className="login-image" />
            <Heading className="login-header" size="md" textAlign="left" mb={2}>
              Login
            </Heading>
            <Stack spacing={3}>
              <input
                className="input-field"
                type="email"
                placeholder="Email:"
              />
              <input
                className="input-field"
                type="password"
                placeholder="Password:"
              />
            </Stack>
            <Text>
              <a href="#">Forgot Password?</a>
            </Text>
            <Button className="login-button" mt={4} colorScheme="blue">
              Login
            </Button>
          </Box>

          <Divider orientation="vertical" mx={3} />

          {/* Register Section */}
          <Box flex={1} pl={{ base: 0, md: 4 }} pr={{ base: 0, md: 4 }}>
            <Heading
              className="Register-Header"
              size="md"
              textAlign="center"
              mb={2}
            >
              Not a user? Register here!
            </Heading>
            <Flex direction={{ base: "column", md: "row" }}>
              <Box flex={1} mb={{ base: 4, md: 0 }} pr={{ base: 0, md: 2 }}>
                <Stack spacing={3}>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="First Name:"
                  />
                  <input
                    className="input-field"
                    type="email"
                    placeholder="Email:"
                  />
                  <input
                    className="input-field"
                    type="password"
                    placeholder="Password:"
                  />
                </Stack>
              </Box>
              <Box flex={1} pl={{ base: 0, md: 2 }}>
                <Stack spacing={3}>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Surname:"
                  />
                  <input
                    className="input-field"
                    type="email"
                    placeholder="Email verification:"
                  />
                  <input
                    className="input-field"
                    type="password"
                    placeholder="Password verification:"
                  />
                </Stack>
              </Box>
            </Flex>
            <Button className="register-button" mt={4} colorScheme="green">
              Register
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LoginForm;
