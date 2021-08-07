import "../styles/header.css";
import headshot from "../assets/portfolio2_headshot.png";
function Header() {
  return (
    <header className="header">
      <section>
      <div className="intro">
      <h3 className="name">Meg Shulmister</h3>
        <h1>
          {" "}
          Hello,<br></br>
          I'm Meg Shulmister
        </h1>
        <p>
          I'm a full-stack software engineer based in Rollinsville, Colorado.
          Thanks for stopping by.
        </p>

        <button>
          <a href="mailto:meganshulmister@gmail.com">Email Me</a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/meganshulmister019/">LinkedIn</a>
        </button>
        <button>
          <a href="https://github.com/earthlymeg">GitHub</a>
        </button>
</div>
        <div className="headshot">
          <img src={headshot} alt="Meg Shulmister portfoli0"></img>
        </div>
      </section>
    </header>
  );
}

export default Header;
