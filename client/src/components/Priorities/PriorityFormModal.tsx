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
  priority_id: number;
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
    priority_id: 0,
    priority_name: "",
    description: "",
    priority_level: "",
    created_at: "",
    required_by: "",
  });

  // Handle form input changes
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      priority_id: 0,
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
            {/* Input for priority name */}
            <Input
              className="priorityModalInput"
              type="text"
              name="priority_name"
              placeholder="Title"
              value={formData.priority_name}
              onChange={handleChange}
              required
            />
            {/* Input for priority description */}
            <Input
              className="priorityModalInput"
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            {/* Input for priority level */}
            <Input
              className="priorityModalInput"
              type="number"
              name="priority_level"
              placeholder="Priority Level (1, 2, or 3)"
              value={formData.priority_level}
              onChange={handleChange}
              required
            />
            {/* Input for required by */}
            <Input
              className="priorityModalInput"
              type="text"
              name="required_by"
              placeholder="Required by?"
              value={formData.required_by}
              onChange={handleChange}
            />
            {/* Submit button */}
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
