import { useEffect, useState } from "react";
import axios from "axios";
import AddInventoryModal from "../components/inventory/AddInventoryModal";
import "../components/inventory/Inventory.css";
import { Button, Input, HStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface InventoryItem {
  id: number;
  title: string;
  quantity: number;
  adjustQuantity: (amount: number) => void;
}

const InventoryPage = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [filteredInventory, setFilteredInventory] = useState<InventoryItem[]>([]);
  const [isAddInventoryModalOpen, setIsAddInventoryModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/inventory");

      if (!Array.isArray(response.data)) {
        throw new Error("Received data is not an array");
      }

      const inventoryWithAdjustments = response.data.map((item: InventoryItem) => ({
        ...item,
        adjustQuantity: (amount: number) => handleAdjustQuantity(item.id, amount),
      }));
      setInventory(inventoryWithAdjustments);
      setFilteredInventory(inventoryWithAdjustments);
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

  const handleDeleteItem = (id: number) => {
    axios.delete(`http://localhost:3001/api/inventory/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setInventory((prevInventory) => prevInventory.filter((item) => item.id !== id));
        } else {
          console.error('Failed to delete item:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const handleAdjustQuantity = (id: number, amount: number) => {
    axios
      .put(`http://localhost:3001/api/inventory/${id}/adjust`, { adjustment: amount })
      .then((response) => {
        if (response.status === 200) {
          console.log('Item quantity adjusted successfully');
        } else {
          console.error('Failed to adjust quantity:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error adjusting quantity:', error);
      });
  };
  

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredItems = inventory.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredInventory(filteredItems);
  };

  return (
    <div className="page">
      <div className="inventoryPageContainer">
        <HStack justifyContent='space-between'>
          <div className="search-container">
            <Input
              type="text"
              placeholder="Search by item name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-container"
            />
          </div>
          <Button onClick={handleAddInventoryModalOpen} colorScheme="yellow" className="add-inventory-button">
            Add Inventory Item
          </Button>
          <AddInventoryModal isOpen={isAddInventoryModalOpen} onClose={handleAddInventoryModalClose} />
        </HStack>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td className="adjustColumn">
                  {item.quantity}
                  </td>
                  <td>
                    <Button onClick={() => item.adjustQuantity(-1)} colorScheme="red" size='xs'>-</Button>
                    <Button onClick={() => item.adjustQuantity(1)} colorScheme="green" size='xs'>+</Button>
                    <Button onClick={() => handleDeleteItem(item.id)} variant="ghost">
                    <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
