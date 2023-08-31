import NavBar from "./components/NavBar";
import CurrentProjectsHomeScreen from "./components/CurrentProjectsHomeScreen";
import { Divider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="MainBody">
        <div className="CurrentProjects">
          <CurrentProjectsHomeScreen />
        </div>
        <br />
        <Divider width="80%" marginLeft={20} />
      </div>
    </>
  );
}

export default App;
