import CompletedProjects from "../components/CompletedProjects";
import CurrentProjects from "../components/CurrentProjects";
import PageNavigation from "../components/PageNavigation";
import NavBar from "../components/NavBar";

const ProjectsPage = () => {
  return (
    <>
      <NavBar />
      <PageNavigation />
      <CurrentProjects />
      <CompletedProjects />
    </>
  );
};

export default ProjectsPage;
