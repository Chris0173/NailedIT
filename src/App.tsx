import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./pages/HomeScreen";
import TopPriorities from "./components/TopPriorities";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Router>
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="home">
          <HomeScreen />
          <TopPriorities />
        </div>
        <div className="MainBody"></div>
        <div className="Routes">
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="projects" Component={ProjectsPage} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
