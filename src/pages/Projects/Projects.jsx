
import { useState, useEffect } from "react";

import { projects } from "./data/projectsData";

import ProjectGrid from "./components/ProjectGrid";
import ProjectDetail from "./components/ProjectDetail";

import "./projects.css";

function ProjectsPage({
  onNavigate,
  projectSlug,
}) {
  const [currentView, setCurrentView] =
    useState("main");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [activeTab, setActiveTab] =
    useState("architecture");


  /*
   * URL BASED PROJECT SELECTION
   */

  useEffect(() => {

    if (projectSlug) {

      const project = projects.find(
        (p) => p.slug === projectSlug
      );

      if (project) {

        setSelectedProject(project);

        setCurrentView("detail");

      }

    } else {

      setCurrentView("main");

      setSelectedProject(null);

    }

  }, [projectSlug]);


  /*
   * PROJECT CLICK
   */

  const handleProjectClick = (project) => {

    onNavigate(
      "projects",
      project.slug
    );

  };


  /*
   * BACK
   */

  const handleBackClick = () => {

    onNavigate("projects");

  };


  /*
   * ARCHITECTURE PROJECTS
   */

  const architectureProjects =
    projects.filter((project) => {

      const category =
        project.category.toLowerCase();

      return (
        category.includes("architecture") ||
        category.includes("facade")
      );

    });


  /*
   * INTERIOR PROJECTS
   */

  const interiorProjects =
    projects.filter((project) => {

      const category =
        project.category.toLowerCase();

      return (
        category.includes("interior") ||
        category.includes("urban")
      );

    });


  /*
   * CURRENT PROJECTS
   */

  const currentProjects =
    activeTab === "architecture"
      ? architectureProjects
      : interiorProjects;


  return (
    <>

      {currentView === "main" ? (

        <div className="container">

          <div className="max-width">

            {/* TITLE */}

            <h1 className="section-title">
              Our Projects
            </h1>


            {/* =========================
                TABS
            ========================= */}

            <div className="tabs-container">

              <div className="tabs-wrapper">

                <button
                  className={`tab-button ${
                    activeTab === "architecture"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveTab(
                      "architecture"
                    )
                  }
                >
                  Architecture
                </button>


                <button
                  className={`tab-button ${
                    activeTab === "interior"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveTab(
                      "interior"
                    )
                  }
                >
                  Interior
                </button>

              </div>


              {/* <div
                className={`tab-indicator ${
                  activeTab
                }`}
              /> */}

            </div>


            {/* =========================
                PROJECT GRID
            ========================= */}

            <ProjectGrid
              projects={currentProjects}
              onProjectClick={
                handleProjectClick
              }
            />

          </div>

        </div>

      ) : (

        <ProjectDetail
          selectedProject={
            selectedProject
          }
          onBack={
            handleBackClick
          }
        />

      )}

    </>

  );
}

export default ProjectsPage;
