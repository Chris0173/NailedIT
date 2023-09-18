import React from "react";
import { Box, Heading, Text, Badge, IconButton } from "@chakra-ui/react";
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
  const handleDelete = () => {
    onDelete(priorityData.id);
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
    </Box>
  );
};

export default PriorityCard;
