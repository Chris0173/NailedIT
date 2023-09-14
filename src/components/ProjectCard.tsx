import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

export interface Project {
  title: string;
  description: string;
  address: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="card">
      <CardHeader className="CurrentProjectHeading">
        <Heading>{project.title}</Heading>
        <br />
        <Divider />
      </CardHeader>
      <CardBody>
        <Text>{project.description}</Text>
        <br />
        <Text>{project.address}</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
