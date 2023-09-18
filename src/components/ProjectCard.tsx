import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import "../CSS/CurrentProjects.css";
import { DeleteIcon } from "@chakra-ui/icons";

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
  const confirmDeletion = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      handleDelete(project.id);
    }
  };

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
      <CardFooter justifyContent={"space-between"}>
        <Button>View here</Button>
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={confirmDeletion}
        />
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
