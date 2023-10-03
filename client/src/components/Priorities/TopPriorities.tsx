import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import "./TopPriorities.css";
import { AddIcon } from "@chakra-ui/icons";
import PriorityFormModal, { priorityFormData } from "./PriorityFormModal";
import PriorityCard from "./PriorityCard";

const TopPriorities = () => {
  // State to manage priorities and modal visibilit
  const [priorities, setPriorities] = useState<priorityFormData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch priorities when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/api/priorities")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch priorities");
        }
        return response.json();
      })
      .then((data) => {
        setPriorities(data);
      })
      .catch((error) => {
        console.log("Error fetching priorities:", error);
      });
  }, []);

  // Handle adding a priority
  const handleAddPriority = () => {
    setIsModalOpen(true);
  };

  // Handle submitting a priority
  const handleSubmit = (priorityData: priorityFormData) => {
    const formattedData = {
      ...priorityData,
      created_at: new Date().toISOString(),
    };

    fetch("http://localhost:3001/api/priorities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit priority");
        }
        return response.json();
      })
      .then((data) => {
        setPriorities([...priorities, data]);
        console.log("Priority submitted successfully", data);
      })
      .catch((error) => {
        console.log("Error submitting priority:", error);
      })
      .finally(() => {
        setIsModalOpen(false);
      });
  };

  // Handle deleting a priority
  const handleDeletePriority = (id: number) => {
    fetch(`http://localhost:3001/api/priorities/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete priority");
        }
        return response.json();
      })
      .then(() => {
        setPriorities(priorities.filter((priority) => priority.priority_id !== id));
        console.log("Priority deleted successfully");
      })
      .catch((error) => {
        console.log("Error deleting priority:", error);
      });
  };

  return (
    <div className="topPriorities">
      <div className="cardContainer">
        <Card align="center">
          <CardHeader>
            <Heading size="md">Top Priorities:</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {/* Add Priority button */}
              <Button
                className="addTopPriorityButton"
                rightIcon={<AddIcon />}
                colorScheme="yellow"
                variant="solid"
                onClick={handleAddPriority}
              >
                Add Priority
              </Button>
              {/* PriorityFormModal */}
              <PriorityFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
              />
              {/* Displaying each priority */}
              {priorities.map((priority, index) => (
                <PriorityCard
                  key={index}
                  priorityData={priority}
                  onDelete={handleDeletePriority}
                />
              ))}
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TopPriorities;
