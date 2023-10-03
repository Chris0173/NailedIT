import CompletedProjects from "../components/Projects/CompletedProjects";
import CurrentProjects from "../components/Projects/CurrentProjects";
import "../CSS/Pages.css";

const ProjectsPage = () => {
  return (
    <div className="page">
      <CurrentProjects />
      <CompletedProjects />
    </div>
  );
};

export default ProjectsPage;
