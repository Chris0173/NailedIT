import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Router>
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
