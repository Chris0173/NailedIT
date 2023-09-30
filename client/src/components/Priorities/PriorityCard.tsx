import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Badge,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { priorityFormData } from "./PriorityFormModal";
import { DeleteIcon } from "@chakra-ui/icons";
import DeletionConfirmationModal from "../app/DeletionConfirmationModal";

interface PriorityCardProps {
  priorityData: priorityFormData;
  onDelete: (id: number) => void;
}

const PriorityCard: React.FC<PriorityCardProps> = ({
  priorityData,
  onDelete,
}) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // Handle delete button click
  const handleDelete = () => {
    setIsConfirmationModalOpen(true);
  };

  // Handle confirmation to delete
  const handleConfirmDelete = () => {
    onDelete(priorityData.id);
    setIsConfirmationModalOpen(false);
  };

  // Handle closing confirmation modal
  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  // Determine priority level color based on level
  const getPriorityLevelColor = (priorityLevel: number | string): string => {
    const level =
      typeof priorityLevel === "string"
        ? parseInt(priorityLevel, 10)
        : priorityLevel;
    switch (level) {
      case 1:
        return "red";
      case 2:
        return "yellow";
      case 3:
        return "green";
      default:
        return "gray";
    }
  };

  const priorityLevelColor = getPriorityLevelColor(priorityData.priority_level);

  // created_at format to a more readable date and time
  const formattedCreatedAt = new Date(priorityData.created_at).toLocaleString();

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" m="2">
      <HStack justifyContent="space-between">
        <Heading size="md">{priorityData.priority_name}</Heading>
        <Badge colorScheme={priorityLevelColor} mt="2">
          Level: {priorityData.priority_level}
        </Badge>
      </HStack>
      <Text mt="2">{priorityData.description}</Text>
      <Text mt="2">{priorityData.required_by}</Text>
      <br />
      <HStack justifyContent="space-between">
        <Text fontSize="sm" mt="2">
          Created At: {formattedCreatedAt}
        </Text>
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={handleDelete}
        />
      </HStack>
      <DeletionConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={handleCloseConfirmationModal}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default PriorityCard;
