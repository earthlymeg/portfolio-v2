import { useEffect } from 'react'
import "../styles/projectCard.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCard({name, image, technology, github}) {

  useEffect( () => {
    AOS.init({
        duration : 2000
      });
  }, [])
  
  return (
    <div 
  
    className="card"
    data-aos="fade-right"
    >
      <img src={image} alt={name} />
      <div className="name-description">
        <h3>{name}</h3>
        <p>
          {technology}
        </p>
        <a href={github}>Github</a>
      </div>
    </div>
  );
}

export default ProjectCard;
