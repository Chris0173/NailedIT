import CompletedProjects from "../components/CompletedProjects";
import CurrentProjects from "../components/CurrentProjects";
import NavBar from "../components/NavBar";

const ProjectsPage = () => {
  return (
    <>
      <NavBar />
      <CurrentProjects />
      <CompletedProjects />
    </>
  );
};

export default ProjectsPage;
