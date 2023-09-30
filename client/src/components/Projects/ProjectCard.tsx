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
import DeletionConfirmationModal from "../app/DeletionConfirmationModal";

export interface Project {
  // Project properties
  project_id: number;
  title: string;
  description: string;
  address: string;
  client_name: string;
  client_contact_number: Number;
  additional_info: string;
  is_completed: boolean;
  user_id: number;
}

interface ProjectCardProps {
  // Props for ProjectCard component
  project: Project;
  handleDelete: (projectId: number) => void;
}

function ProjectCard({ project, handleDelete }: ProjectCardProps) {
  // State for managing modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);

  // Function to confirm project deletion
  const confirmDeletion = () => {
    setIsDeletionModalOpen(true);
  };

  // Function to handle confirmed project deletion
  const handleDeleteConfirmed = () => {
    handleDelete(project.project_id);
    setIsDeletionModalOpen(false);
  };

  // Function to close deletion confirmation modal
  const handleCloseDeletionModal = () => {
    setIsDeletionModalOpen(false);
  };

  // Function to view project details in a modal
  const handleViewHere = () => {
    setIsModalOpen(true);
  };

  // Function to close project details modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to mark project as completed
  const handleMarkCompleted = () => {
    fetch(
      `http://localhost:3001/api/projects/${project.project_id}/markCompleted`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_completed: true }),
      }
    )
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
      {/* Project Card Header */}
      <CardHeader className="projectHeading">
        <Heading size={"md"}>{project.title}</Heading>
        <br />
        <Divider />
      </CardHeader>

      {/* Project Card Body */}
      <CardBody>
        <Text>{project.description}</Text>
        <br />
        <Text>{project.address}</Text>
      </CardBody>

      {/* Project Card Footer */}
      <CardFooter justifyContent={"space-between"}>
        <Button onClick={handleViewHere}>View here</Button>
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={confirmDeletion}
        />

        {/* Deletion Confirmation Modal */}
        <DeletionConfirmationModal
          isOpen={isDeletionModalOpen}
          onClose={handleCloseDeletionModal}
          onConfirm={handleDeleteConfirmed}
        />
      </CardFooter>

      {/* Project Details Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${project.address} Project Card`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Project Details */}
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

            {/* Client Details */}
            <Text className="projectTextHeaders">Client Details</Text>
            <Text>Client Name: {project.client_name}</Text>
            <Text>Client Contact: {`${project.client_contact_number}`}</Text>
          </ModalBody>

          {/* Project Details Modal Footer */}
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
