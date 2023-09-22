import { useEffect, useState } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import "./Projects.css";
import { AddIcon } from "@chakra-ui/icons";
import ProjectCard from "./ProjectCard";
import AddProjectModal from "./AddProjectModal";
import { Project } from "./ProjectCard";
import { ProjectFormData } from "./AddProjectModal";

const CurrentProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleOnclick = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (formData: ProjectFormData) => {
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
        setProjects([...projects, newProject]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  const handleDelete = (projectId: number) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
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
          const updatedProjects = projects.filter(
            (project) => project.id !== projectId
          );
          setProjects(updatedProjects);
        })
        .catch((error) => {
          console.error("Error deleting project:", error);
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
              {projects.map((project, index) => (
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
              colorScheme="orange"
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
