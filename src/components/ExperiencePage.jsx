import ProjectCard from './ProjectCard';
import '../styles/experiencePage.css'
function ExperiencePage() {

    return (
        <div className="experience-page">
            <section>
            <h2>Experience</h2>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            </section>
        </div>
    )
}

export default ExperiencePage;