import HomeScreenCurrentProjectsSection from "../components/CurrentProjects";
import { Divider, Text } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <>
      <div className="CurrentProjects">
        <Text className="HomeScreenCardSectionLabels">Current Projects:</Text>
        <HomeScreenCurrentProjectsSection />
      </div>
      <br />
      <Divider width="80%" marginLeft={20} />
      <br />
      <div className="topPriorities"></div>
    </>
  );
};

export default HomeScreen;
