import "../styles/header.css";
import headshot from "../assets/portfolio2_headshot.png";
function Header() {
  return (
    <header className="header">
      <section>
        <div className="intro">
          <h3 className="name"
          data-testid="h3-name"
          >Meg Shulmister</h3>
          <h1 data-testid="h1-intro">
            {" "}
            Hello,<br></br>
            I'm Meg Shulmister
          </h1>
          <p data-testid="p-intro">
            I'm a full-stack software engineer based in Rollinsville, Colorado.
            Thanks for stopping by.
          </p>
          <div className="header-bts">
          <button data-testid="email-btn">
            <a href="mailto:meganshulmister@gmail.com">Email Me</a>
          </button>
          <button >
            <a 
            data-testid="linkedin-button"
            href="https://www.linkedin.com/in/meganshulmister019/">
              LinkedIn
            </a>
          </button>
          <button data-testid="github-button">
            <a href="https://github.com/earthlymeg">GitHub</a>
          </button>
          </div>
        </div>
        <div className="headshot">
          <img src={headshot} alt="Meg Shulmister portfoli0"></img>
        </div>
      </section>
    </header>
  );
}

export default Header;
