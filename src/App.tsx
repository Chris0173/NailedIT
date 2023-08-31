import "./App.css";
import NavBar from "./components/NavBar";
import HomeScreenCurrentProjectsSection from "./components/HomeScreenCurrentProjectsSection";
import HomeScreenCompletedProjectsSection from "./components/HomeScreenCompletedProjectsSection";
import { Divider, Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="MainBody">
        <div className="CurrentProjects">
          <Text className="HomeScreenCardSectionLabels">Current Projects:</Text>
          <HomeScreenCurrentProjectsSection />
        </div>
        <br />
        <Divider width="80%" marginLeft={20} />
        <br />
        <div className="CompletedProjects">
          <Text className="HomeScreenCardSectionLabels">
            Completed Projects:
          </Text>
          <HomeScreenCompletedProjectsSection />
        </div>
      </div>
    </>
  );
}

export default App;
