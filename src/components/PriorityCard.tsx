import React from "react";
import { Box, Heading, Text, Badge } from "@chakra-ui/react";
import { priorityFormData } from "./PriorityForm";

interface PriorityCardProps {
  priorityData: priorityFormData;
}

const PriorityCard: React.FC<PriorityCardProps> = ({ priorityData }) => {
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
    </Box>
  );
};

export default PriorityCard;
