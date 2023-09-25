import { SimpleGrid } from "@chakra-ui/react";
import "./CompletedProjects.css";
import ProjectCard, { Project } from "./ProjectCard";
import { useEffect, useState } from "react";

const CompletedProjects = () => {
  const [completedProjects, setCompletedProjects] = useState<Project[]>([]);

  const handleDelete = (projectId: number) => {
    fetch(`http://localhost:3001/api/projects/${projectId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete project");
        }
        return response.json();
      })
      .then(() => {
        const updatedProjects = completedProjects.filter(
          (project) => project.id !== projectId
        );
        setCompletedProjects(updatedProjects);
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/projects/completed`)
      .then((response) => response.json())
      .then((data) => {
        setCompletedProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching completed projects:", error);
      });
  }, []);

  return (
    <>
      <div className="CompletedProjectGridContainer">
        <div className="completedProjects">
          <h1 className="completedProjectTitle">Completed Projects:</h1>
          <div className="CompletedProjectGrid">
            <SimpleGrid
              spacing={12}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {completedProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  handleDelete={handleDelete}
                />
              ))}
            </SimpleGrid>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedProjects;
