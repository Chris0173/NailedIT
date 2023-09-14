import { useEffect, useState } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import "../CSS/CurrentProjects.css";
import { AddIcon } from "@chakra-ui/icons";
import ProjectCard from "./ProjectCard";
import AddProjectForm, { FormData } from "./AddProjectForm";
import { Project } from "./ProjectCard";

const CurrentProjects = () => {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleOnclick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (formData: FormData) => {
    setProjects([...projects, formData]);
    setShowForm(false);
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
        <h1 className="currentProjectTitle">Current Projects:</h1>
        <div className="CurrentProjectGrid">
          <SimpleGrid
            spacing={12}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
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
          {showForm && <AddProjectForm onSubmit={handleSubmit} />}
        </div>
      </div>
    </>
  );
};

export default CurrentProjects;
