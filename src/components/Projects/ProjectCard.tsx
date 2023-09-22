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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import "./CurrentProjects.css";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  address: string;
  client_name: string;
  client_contact_number: Number;
  addition_info: string;
}

interface ProjectCardProps {
  project: Project;
  handleDelete: (projectId: number) => void;
}

function ProjectCard({ project, handleDelete }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const confirmDeletion = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      handleDelete(project.id);
    }
  };

  const handleViewHere = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        <Button onClick={handleViewHere}>View here</Button>
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={confirmDeletion}
        />
      </CardFooter>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${project.address} Project Card`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text className="detailsHeader">Project Details</Text>
            <Text>Project Description:</Text>
            <p className="detailsText">{project.description}</p>
            <br />
            <Text>Project Address:</Text>
            <p className="detailsText">{project.address}</p>
            <br />
            <Divider />
            <br />
            <Text className="detailsHeader">Client Details</Text>
            <Text>Client Name: {project.client_name}</Text>
            <Text>Client Contact: {`${project.client_contact_number}`}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}

export default ProjectCard;
