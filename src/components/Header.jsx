import "../styles/header.css";
import headshot from '../assets/portfolio2_headshot.png'
function Header() {
  return (
    <header className="header">
      <h3 className="name">Meg Shulmister</h3>
      <section>
        <h1>
          {" "}
          Hello,<br></br>
          I'm Meg Shulmister
        </h1>
        <p>
          I'm a full-stack software engineer based in Rollinsville, Colorado.
          Thanks for stopping by.
        </p>
        <div>
          <button>Email Me</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>
        <div className="headshot">
    <img src={headshot} alt="Meg Shulmister portfoli0"></img>
    </div>
      </section>
    </header>
  );
}

export default Header;
