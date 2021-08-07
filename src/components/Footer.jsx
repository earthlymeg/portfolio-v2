import '../styles/footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer">
        <h3>Meg Shulmister</h3>
        <div className="footer-btns">
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
      </div>
    </footer>
  );
}

export default Footer;