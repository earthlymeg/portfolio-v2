import "../styles/projectCard.css";

function ProjectCard() {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        alt=""
      ></img>
      <div>
        <h2>Title</h2>
        <p>Description</p>
      </div>
    </div>
  );
}

export default ProjectCard;
