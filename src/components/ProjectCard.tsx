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
import "../CSS/CurrentProjects.css";

export interface Project {
  title: string;
  description: string;
  address: string;
  id: number;
}

interface ProjectCardProps {
  project: Project;
  handleDelete: (projectId: number) => void;
}

function ProjectCard({ project, handleDelete }: ProjectCardProps) {
  return (
    <Card className="card">
      <CardHeader className="projectHeading">
        <Heading size={"md"}>{project.title}</Heading>
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
        <Button onClick={() => handleDelete(project.id)} colorScheme="red">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
