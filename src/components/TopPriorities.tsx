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
import "../CSS/TopPriorities.css";
import { AddIcon } from "@chakra-ui/icons";
import PriorityForm, { priorityFormData } from "./PriorityForm";
import PriorityCard from "./PriorityCard";

const TopPriorities = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [priorities, setPriorities] = useState<priorityFormData[]>([]);

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

  const handleAddPriority = () => {
    setIsFormVisible(true);
  };

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
        setIsFormVisible(false);
      });
  };

  return (
    <div className="cardContainer">
      <Card align="center">
        <CardHeader>
          <Heading size="md">Top Priorities:</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Button
              className="addTopPriorityButton"
              rightIcon={<AddIcon />}
              colorScheme="orange"
              variant="solid"
              onClick={handleAddPriority}
            >
              Add Priority
            </Button>
            {isFormVisible && <PriorityForm onSubmit={handleSubmit} />}
            {priorities.map((priority, index) => (
              <PriorityCard key={index} priorityData={priority} />
            ))}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default TopPriorities;
