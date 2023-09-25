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
  Checkbox,
} from "@chakra-ui/react";
import "./Projects.css";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  address: string;
  client_name: string;
  client_contact_number: Number;
  additional_info: string;
  is_completed: boolean;
}

interface ProjectCardProps {
  project: Project;
  handleDelete: (projectId: number) => void;
}

function ProjectCard({ project, handleDelete }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const confirmDeletion = () => {
    handleDelete(project.id);
  };

  const handleViewHere = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMarkCompleted = () => {
    fetch(`http://localhost:3001/api/projects/${project.id}/markCompleted`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_completed: true }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to mark project as completed");
        }
      })
      .catch((error) => {
        console.error("Error marking project as completed:", error);
      });
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
            <Text className="projectTextHeaders">Project Details</Text>
            <Text>Project Description:</Text>
            <p className="detailsText">{project.description}</p>
            <br />
            <Text>Project Address:</Text>
            <p className="detailsText">{project.address}</p>
            <br />
            <Text>Additional Information:</Text>
            <p className="detailsText">{project.additional_info}</p>
            <br />
            <Divider />
            <br />
            <Text className="projectTextHeaders">Client Details</Text>
            <Text>Client Name: {project.client_name}</Text>
            <Text>Client Contact: {`${project.client_contact_number}`}</Text>
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Checkbox
              size="lg"
              isChecked={project.is_completed}
              onChange={handleMarkCompleted}
            >
              Mark as Completed
            </Checkbox>
            <Button onClick={handleCloseModal} colorScheme="orange">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}

export default ProjectCard;
