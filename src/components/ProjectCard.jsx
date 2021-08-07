import "../styles/projectCard.css";

function ProjectCard() {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>
      <div className="name-description">
        <h3>Lorem Ipsum</h3>
        <p>
          Full-Stack application built with React, node.js, and Postgresql
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
