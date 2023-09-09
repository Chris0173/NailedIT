import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box
        className="login-form"
        p={8}
        maxW="md"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading size="lg" textAlign="center">
          Login or Register
        </Heading>
        <Divider my={4} />

        <Flex className="form-section" direction="row">
          {/* Login Section */}
          <Box flex={1} pr={2}>
            <Heading size="md" textAlign="left" mb={2}>
              Login
            </Heading>
            <Stack spacing={3}>
              <input className="input-field" type="email" placeholder="Email" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
              />
            </Stack>
            <Text>
              <a href="#">Forgot Password?</a>
            </Text>
            <Button className="login-button" mt={4} colorScheme="blue">
              Login
            </Button>
          </Box>

          {/* Register Section */}
          <Box flex={1} pl={2}>
            <Heading size="md" textAlign="left" mb={2}>
              Register
            </Heading>
            <Stack spacing={3}>
              <input className="input-field" type="email" placeholder="Email" />
              <input
                className="input-field"
                type="text"
                placeholder="First Name"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Surname"
              />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
              />
              <input
                className="input-field"
                type="email"
                placeholder="Email verification"
              />
              <input
                className="input-field"
                type="password"
                placeholder="Password verification"
              />
            </Stack>
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
