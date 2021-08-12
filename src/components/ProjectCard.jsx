import { useEffect } from 'react'
import { ImGithub } from 'react-icons/im'
import "../styles/projectCard.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCard({name, image, technology, github}) {

  useEffect( () => {
    AOS.init({
        duration : 2000
      });
  }, [])

  console.log('image from Pc', window.location.origin + image)
  
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
        <a href={github} target="_blank" rel="noreferrer"><span className="github-icon">GitHub</span>          < ImGithub className="github-icon"/></a>
      </div>
    </div>
  );
}

export default ProjectCard;
