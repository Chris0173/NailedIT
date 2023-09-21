import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProjectsPage from "./pages/ProjectsPage";
import DocumentsPage from "./pages/DocumentsPage";
import InventoryPage from "./pages/InventoryPage";
import NavBar from "./components/app/NavBar";
import PageNavigation from "./components/app/PageNavigation";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <NavBar />
          <PageNavigation />
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
