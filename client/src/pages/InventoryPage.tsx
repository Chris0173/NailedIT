import { useEffect, useState } from "react";
import axios from "axios";
import AddInventoryModal from "../components/inventory/AddInventoryModal";
import "../CSS/Pages.css";
import { Button } from "@chakra-ui/react";
import "../components/inventory/Inventory.css";

interface InventoryItem {
  id: number;
  title: string;
  quantity: number;
}

const InventoryPage = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [isAddInventoryModalOpen, setIsAddInventoryModalOpen] = useState(false);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/inventory");

      if (!Array.isArray(response.data)) {
        throw new Error("Received data is not an array");
      }

      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", (error as Error).message);
    }
  };

  const handleAddInventoryModalOpen = () => {
    setIsAddInventoryModalOpen(true);
  };

  const handleAddInventoryModalClose = () => {
    setIsAddInventoryModalOpen(false);
  };

  return (
    <div className="page">
      <div className="inventoryPageContainer">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button onClick={handleAddInventoryModalOpen} colorScheme="yellow">Add Inventory</Button>
        <AddInventoryModal isOpen={isAddInventoryModalOpen} onClose={handleAddInventoryModalClose}/>
      </div>
    </div>
  );
};

export default InventoryPage;
