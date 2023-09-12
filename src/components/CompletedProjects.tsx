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
import "../CSS/CompletedProjects.css";
import { AddIcon } from "@chakra-ui/icons";

const CompletedProjects = () => {
  return (
    <>
      <div className="CompletedProjectGridContainer">
        <h1 className="completedProjectTitle">Completed Projects:</h1>
        <div className="CompletedProjectGrid">
          <SimpleGrid
            spacing={12}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card className="CompletedCard">
              <CardHeader className="CompletedProjectHeading">
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
            <Card className="CompletedCard">
              <CardHeader className="CompletedProjectHeading">
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
            <Card className="CompletedCard">
              <CardHeader className="CompletedProjectHeading">
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
          <Button
            className="viewAllCompletedButton"
            rightIcon={<AddIcon />}
            colorScheme="orange"
            variant="solid"
          >
            View All
          </Button>
        </div>
      </div>
    </>
  );
};

export default CompletedProjects;
