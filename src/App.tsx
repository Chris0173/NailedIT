import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProjectsPage from "./pages/ProjectsPage";
import DocumentsPage from "./pages/DocumentsPage";
import InventoryPage from "./pages/InventoryPage";
import CalendarPage from "./pages/CalendarPage";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import PageNavigation from "./components/PageNavigation";

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
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
