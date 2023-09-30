import { useState, ChangeEvent } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

const AddInventory = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleAddItem = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/inventory", {
        title,
        quantity,
      });

      if (response.status === 200) {
        console.log("Item added successfully");
      } else {
        console.error("Failed to add item:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="addInventory">
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <br />
      <Button onClick={handleAddItem}>Add Item</Button>
    </div>
  );
};

export default AddInventory;
