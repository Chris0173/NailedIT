import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProjectsPage from "./pages/ProjectsPage";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import PageNavigation from "./components/PageNavigation";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <PageNavigation />
        <div className="Routes">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
