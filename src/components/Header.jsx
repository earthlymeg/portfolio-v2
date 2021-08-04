import "../styles/header.css";
import headshot from "../assets/portfolio2_headshot.png";
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

        <button>
          <a href="mailto:meganshulmister@gmail.com">Email Me</a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/meganshulmister019/">LinkedIn</a>
        </button>
        <button>
          <a href="https://github.com/earthlymeg">GitHub</a>
        </button>

        <div className="headshot">
          <img src={headshot} alt="Meg Shulmister portfoli0"></img>
        </div>

        <svg viewBox="0 0 1440 211"
        
        
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fill="rgba(232, 199, 200, 1)" d="M 0 50 C 219.29999999999998 50 511.70000000000005 110 731 110 L 731 110 L 731 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(232, 199, 200, 1)" d="M 730 110 C 943 110 1227 35 1440 35 L 1440 35 L 1440 0 L 730 0 Z" stroke-width="0"></path> </svg>
      </section>
    </header>
  );
}

export default Header;
