
import '../styles/footer.css'
import {FiArrowUpRight} from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {


  return (
    <footer>
      <div className="footer">
        <h3>Meg Shulmister</h3>
        <div className="footer-btns">
        <button >
          <a href="mailto:meganshulmister@gmail.com">Email<FiArrowUpRight/></a>
        </button>
        <button >
          <a href="https://www.linkedin.com/in/meganshulmister019/"
          target="_blank" rel="noopener noreferrer"
          >LinkedIn<FiArrowUpRight/></a>
        </button >
        <button >
          <a href="https://github.com/earthlymeg"
          target="_blank" rel="noopener noreferrer"
          >GitHub<FiArrowUpRight/></a>
        </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;