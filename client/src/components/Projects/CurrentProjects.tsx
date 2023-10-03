import { useEffect, useState } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import "./Projects.css";
import { AddIcon } from "@chakra-ui/icons";
import ProjectCard from "./ProjectCard";
import AddProjectModal from "./AddProjectModal";
import { Project } from "./ProjectCard";
import { ProjectFormData } from "./AddProjectModal";

const CurrentProjects = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]); // State to hold the current projects

  // Toggle modal visibility
  const handleOnclick = () => {
    setShowModal(!showModal);
  };

  // Handle project submission
  const handleSubmit = (formData: ProjectFormData) => {
    // Make a POST request to create a new project
    fetch(`http://localhost:3001/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create project");
        }
        return response.json();
      })
      .then((newProject) => {
        console.log("New project created:", newProject);
        setCurrentProjects([...currentProjects, newProject]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  // Handle project deletion
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
        const updatedProjects = currentProjects.filter(
          (project) => project.project_id !== projectId
        );
        setCurrentProjects(updatedProjects);
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };

  // Fetch current projects when the component mounts
  useEffect(() => {
    fetch(`http://localhost:3001/api/projects/current`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching current projects:", error);
      });
  }, []);

  return (
    <>
      <div className="CurrentProjectGridContainer">
        <div className="CurrentProjects">
          <h1 className="currentProjectTitle">Current Projects:</h1>
          <div className="CurrentProjectGrid">
            <SimpleGrid
              spacing={12}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  handleDelete={handleDelete}
                />
              ))}
            </SimpleGrid>
            <Button
              className="addProjectButton"
              rightIcon={<AddIcon />}
              colorScheme="yellow"
              variant="solid"
              onClick={handleOnclick}
            >
              Add Project
            </Button>
            <AddProjectModal
              isOpen={showModal}
              onClose={handleOnclick}
              onSubmit={(formData) => handleSubmit(formData)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentProjects;
