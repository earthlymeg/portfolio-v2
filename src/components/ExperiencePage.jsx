import { useEffect } from 'react'
import ProjectCard from "./ProjectCard";
import "../styles/experiencePage.css";


function ExperiencePage() {


  return (
    <div className="experience-page">
      <h2>Experience</h2>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ExperiencePage;
