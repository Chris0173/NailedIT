import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProjectsPage from "./pages/ProjectsPage";
import DocumentsPage from "./pages/DocumentsPage";
import InventoryPage from "./pages/InventoryPage";
import NavBar from "./components/app/NavBar";
import PageNavigation from "./components/app/PageNavigation";
import LoginRegisterModal from "./components/login/LoginRegisterModal";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Router>
        <div className="app">
          <NavBar />
          <PageNavigation />
        </div>
        <div className="login" style={{ padding: "20px" }}>
          <Button colorScheme="orange" onClick={handleModalOpen}>
            Open Login/Register Modal
          </Button>
          <LoginRegisterModal isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
        <div className="Routes">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
