import { useEffect, useState } from "react";
import axios from "axios";
import AddInventory from "../components/inventory/AddInventory";
import "../CSS/Pages.css";

interface InventoryItem {
  id: number;
  title: string;
  quantity: number;
}

const InventoryPage = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

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

  return (
    <div className="page">
      <div className="inventoryPageContainer">
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
        <AddInventory />
      </div>
    </div>
  );
};

export default InventoryPage;
