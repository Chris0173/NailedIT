import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  SimpleGrid,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

const CurrentProjectsHomeScreen = () => {
  return (
    <>
      <SimpleGrid
        marginTop={20}
        marginLeft={20}
        spacing={12}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader className="CurrentProjectHeading">
            <Heading size="md"> 15 Example Road</Heading>
            <br />
            <Divider />
          </CardHeader>
          <CardBody>
            <Text>
              65m fencing job <br /> Lead: Michael Scott
            </Text>
            <br />
            <Text>15 Example Road Pretend City, 05158</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="CurrentProjectHeading">
            <Heading size="md"> 57A Sample Street</Heading>
            <br />
            <Divider />
          </CardHeader>
          <CardBody>
            <Text>80m Retaining wall w/ general maintainence</Text>
            <br />
            <Text>57A Sample Street Springfield, 15435</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="CurrentProjectHeading">
            <Heading size="md"> 36 Winter cresent</Heading>
            <br />
            <Divider />
          </CardHeader>
          <CardBody>
            <Text>
              Estate Rebuild <br /> Lead: John Smith
            </Text>
            <br />
            <Text>
              36 Winter cresent <br /> Castle Rock, 54218
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default CurrentProjectsHomeScreen;
