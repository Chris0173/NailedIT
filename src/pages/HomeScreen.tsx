import HomeScreenCurrentProjectsSection from "../components/CurrentProjects";
import { Divider, Text } from "@chakra-ui/react";
import PageNavigation from "../components/PageNavigation";
import TopPriorities from "../components/TopPriorities";
import NavBar from "../components/NavBar";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <PageNavigation />
      <div className="CurrentProjects">
        <Text className="HomeScreenCardSectionLabels">Current Projects:</Text>
        <HomeScreenCurrentProjectsSection />
      </div>
      <br />
      <Divider width="80%" marginLeft={20} />
      <br />
      <div className="topPriorities">
        <TopPriorities />
      </div>
    </>
  );
};

export default HomeScreen;
