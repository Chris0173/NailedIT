import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import "./AddPriorityForm.css";
import { Button } from "@chakra-ui/react";

interface PriorityFormProps {
  onSubmit: (formData: priorityFormData) => void;
}

export interface priorityFormData {
  id: number;
  priority_name: string;
  description: string;
  priority_level: number | string;
  created_at: string;
}

const PriorityForm: React.FC<PriorityFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<priorityFormData>({
    id: 0,
    priority_name: "",
    description: "",
    priority_level: "",
    created_at: "",
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
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <input
        className="addPriorityInput"
        type="text"
        name="priority_name"
        placeholder="Title"
        value={formData.priority_name}
        onChange={handleChange}
        required
      />
      <input
        className="addPriorityInput"
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        className="addPriorityInput"
        type="number"
        name="priority_level"
        placeholder="1- high priority 2- medium priority 3- low priority"
        value={formData.priority_level}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        className="addPriorityButton"
        rightIcon={<AddIcon />}
        colorScheme="teal"
      >
        Add Priority
      </Button>
    </form>
  );
};

export default PriorityForm;
