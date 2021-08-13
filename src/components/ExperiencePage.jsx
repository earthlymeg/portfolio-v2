import ProjectCard from "./ProjectCard";
import { useEffect } from 'react'
import "../styles/experiencePage.css";
import projects from "../projectData";
import wave from '../assets/wave.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ExperiencePage() {


  useEffect( () => {
    AOS.init({
        duration : 2000
      });
  }, [])
  return (
    <div className="experience-page">
          <img src={wave} 
         className="wave"
         alt=""></img>
      <h2 data-aos="fade-down">Experience</h2>
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
