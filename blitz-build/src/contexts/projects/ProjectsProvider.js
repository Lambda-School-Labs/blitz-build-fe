import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import ProjectContext from "./ProjectContext";

export default function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/projects")
      .then(res => {
        console.log("get projects", res.data);
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addProject = newProject => {
    console.log("new project", { ...newProject });
    
    axiosWithAuth()
      .post(`/projects`, newProject)
      .then(res => {
        console.log("from addProject in projectsProvider", res);
        newProject.id = res.data[0];
        setProjects([...projects, newProject]);
      })
      .catch(err => console.log(err));
  };
  const deleteProject = deleteProject => {
    axiosWithAuth()
      .delete(`/projects/${deleteProject.id}`)
      .then(res => {
        console.log(`project with project id:${deleteProject.id} was removed`);
      })
      .catch(err => console.log(err));
    const newProjectsList = projects.filter(project => {
      return project.id !== deleteProject.id;
    });
    setProjects(newProjectsList);
  };
  const editProject = (editedProject, editedProjectId) => {
    console.log("edited project", editedProject, "id:", editedProjectId);

    axiosWithAuth()
      .put(`/projects/${editedProjectId}`, editedProject)
      .then(res => {
        console.log("from editProject in projectsProvider", res);
      })
      .catch(err => console.log(err));
    const newProjectsList = projects.map(project => {
      if (project.id === editedProjectId) {
        return editedProject;
      } else {
        return project;
      }
    });
    setProjects(newProjectsList);
  };
  return (
    <ProjectContext.Provider
      value={{ projects, addProject, deleteProject, editProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
