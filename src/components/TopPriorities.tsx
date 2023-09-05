import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const TopPriorities = () => {
  return (
    <div className="cardContainer">
      <Card align="center">
        <CardHeader>
          <Heading size="md">Top Priorities</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Quote
              </Heading>
              <Text pt="2" fontSize="sm">
                Quote needed for a deck extension - 42B catarana Road,
                Craigsdale.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Material Order
              </Heading>
              <Text pt="2" fontSize="sm">
                More 2.5m jib board needed for 65 alexandrea
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Hiring staff interview
              </Heading>
              <Text pt="2" fontSize="sm">
                Meeting with stephen fury for team lead position.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default TopPriorities;
