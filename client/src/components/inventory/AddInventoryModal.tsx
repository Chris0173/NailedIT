import { useState, ChangeEvent } from "react";
import axios from "axios";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export interface AddInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddInventoryModal: React.FC<AddInventoryModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleAddItem = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post("http://localhost:3001/api/inventory", {
        title,
        quantity,
      });

      if (response.status === 200) {
        console.log("Item added successfully");
        onClose(); // Close the modal on successful item addition
      } else {
        console.error("Failed to add item:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleAddItem}>
            <Input
              placeholder="Item Title"
              value={title}
              onChange={handleTitleChange}
              mb={4}
            />
            <Input
              placeholder="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              mb={4}
            />
            <Button type="submit" colorScheme="yellow" mt={4}>
              Submit
            </Button>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddInventoryModal;
