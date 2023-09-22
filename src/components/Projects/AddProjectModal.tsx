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
import { useState } from "react";

export interface ProjectFormData {
  title: string;
  description: string;
  address: string;
  client_name: string;
  client_contact_number: number;
  additional_info: string;
}

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ProjectFormData) => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [projectFormData, setProjectFormData] = useState<ProjectFormData>({
    title: "",
    description: "",
    address: "",
    client_name: "",
    client_contact_number: 0,
    additional_info: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = () => {
    onSubmit(projectFormData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Project:</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            type="text"
            name="title"
            placeholder="Project Name"
            value={projectFormData.title}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="description"
            placeholder="Project Description"
            value={projectFormData.description}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Project Address"
            value={projectFormData.address}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="client_name"
            placeholder="Client Name"
            value={projectFormData.client_name}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="client_contact_number"
            placeholder="Client Contact Number"
            value={projectFormData.client_contact_number}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="additional_info"
            placeholder="Additional Info"
            value={projectFormData.additional_info}
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleFormSubmit}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddProjectModal;
