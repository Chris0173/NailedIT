import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react";
import "./AddPriorityForm.css";

interface PriorityFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: priorityFormData) => void;
}

export interface priorityFormData {
  id: number;
  priority_name: string;
  description: string;
  priority_level: number | string;
  created_at: string;
  required_by: string;
}

const PriorityFormModal: React.FC<PriorityFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<priorityFormData>({
    id: 0,
    priority_name: "",
    description: "",
    priority_level: "",
    created_at: "",
    required_by: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      id: 0,
      priority_name: "",
      description: "",
      priority_level: "",
      created_at: "",
      required_by: "",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent className="priorityModalContent">
        <ModalHeader className="priorityModalHeader">Add Priority</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="modalBody">
          <form onSubmit={handleSubmit}>
            <Input
              className="priorityModalInput"
              type="text"
              name="priority_name"
              placeholder="Title"
              value={formData.priority_name}
              onChange={handleChange}
              required
            />
            <Input
              className="priorityModalInput"
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <Input
              className="priorityModalInput"
              type="number"
              name="priority_level"
              placeholder="Priority Level (1, 2, or 3)"
              value={formData.priority_level}
              onChange={handleChange}
              required
            />
            <Input
              className="priorityModalInput"
              type="text"
              name="required_by"
              placeholder="Required by?"
              value={formData.required_by}
              onChange={handleChange}
            />
            <Button
              className="addPriorityButton"
              type="submit"
              colorScheme="orange"
              mt={4}
            >
              Add Priority
            </Button>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PriorityFormModal;
