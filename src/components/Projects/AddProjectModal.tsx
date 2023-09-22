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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./ProjectModal.css";

export interface ProjectFormData {
  title: string;
  description: string;
  address: string;
  client_name: string;
  client_contact_number: number | string;
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
  const initalProjectFormData: ProjectFormData = {
    title: "",
    description: "",
    address: "",
    client_name: "",
    client_contact_number: "",
    additional_info: "",
  };

  const [projectFormData, setProjectFormData] = useState<ProjectFormData>(
    initalProjectFormData
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = () => {
    onSubmit(projectFormData);
    setProjectFormData(initalProjectFormData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="modalContent">
        <ModalHeader className="modalHeader">Add Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="modalBody">
          <Text className="projectTextHeaders">Project Information</Text>
          <Input
            className="projectModalInput"
            type="text"
            name="title"
            placeholder="Project Name"
            value={projectFormData.title}
            onChange={handleInputChange}
          />
          <Input
            className="projectModalInput"
            type="text"
            name="description"
            placeholder="Project Description"
            value={projectFormData.description}
            onChange={handleInputChange}
          />
          <Input
            className="projectModalInput"
            type="text"
            name="address"
            placeholder="Project Address"
            value={projectFormData.address}
            onChange={handleInputChange}
          />
          <Text className="projectTextHeaders">Client Information</Text>
          <Input
            className="projectModalInput"
            type="text"
            name="client_name"
            placeholder="Client Name"
            value={projectFormData.client_name}
            onChange={handleInputChange}
          />
          <Input
            className="projectModalInput"
            type="number"
            name="client_contact_number"
            placeholder="Client Contact Number"
            value={projectFormData.client_contact_number}
            onChange={handleInputChange}
          />
          <Text className="projectTextHeaders">Other</Text>
          <Input
            className="projectModalInput"
            type="text"
            name="additional_info"
            placeholder="Additional Info"
            value={projectFormData.additional_info}
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button onClick={handleFormSubmit}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddProjectModal;
