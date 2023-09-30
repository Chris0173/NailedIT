import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface DeletionConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeletionConfirmationModal: React.FC<DeletionConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Deletion</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this?</ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button onClick={onClose} colorScheme="blue">
            Cancel
          </Button>
          <Button onClick={onConfirm} colorScheme="red">
            Confirm Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeletionConfirmationModal;
