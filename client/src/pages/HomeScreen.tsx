import CurrentProjects from "../components/Projects/CurrentProjects";
import TopPriorities from "../components/Priorities/TopPriorities";
import "../CSS/Pages.css";

const HomeScreen = () => {
  return (
    <div className="page">
      <TopPriorities />
      <CurrentProjects />
    </div>
  );
};

export default HomeScreen;
