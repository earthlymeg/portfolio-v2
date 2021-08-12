import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/experiencePage.css";
import projects from "../projectData";
import wave from '../assets/wave.png'
function ExperiencePage() {
  return (
    <div className="experience-page">
          <img src={wave} 
         className="wave"
         alt=""></img>
      <h2>Experience</h2>
      {projects.length > 0 &&
        projects.map((repo) => 
          <ProjectCard
            name={repo.name}
            technology={repo.technology}
            image={repo.img}
            github={repo.github}
          />
        )}
    </div>
  );
}

export default ExperiencePage;
