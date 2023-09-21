import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Badge,
  IconButton,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { priorityFormData } from "./PriorityForm";
import { DeleteIcon } from "@chakra-ui/icons";

interface PriorityCardProps {
  priorityData: priorityFormData;
  onDelete: (id: number) => void;
}

const PriorityCard: React.FC<PriorityCardProps> = ({
  priorityData,
  onDelete,
}) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleDelete = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(priorityData.id);
    setIsConfirmationModalOpen(false);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" m="2">
      <Heading size="md">{priorityData.priority_name}</Heading>
      <Text mt="2">{priorityData.description}</Text>
      <Badge colorScheme="blue" mt="2">
        Level: {priorityData.priority_level}
      </Badge>
      <Text fontSize="sm" mt="2">
        Created At: {priorityData.created_at}
      </Text>
      <IconButton
        aria-label="Delete"
        icon={<DeleteIcon />}
        onClick={handleDelete}
      />

      <Modal
        isOpen={isConfirmationModalOpen}
        onClose={handleCloseConfirmationModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalBody>Are you sure you want to delete this priority?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleConfirmDelete}>
              Yes, Delete
            </Button>
            <Button variant="ghost" onClick={handleCloseConfirmationModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PriorityCard;
