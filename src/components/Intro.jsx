import { FaDownload } from "react-icons/fa";
import './Intro.css'
import Moon from '../components/Moon'
function Intro() {
  return (
    <div className="Intro">
      <div className="highlight-box">
        Actively seeking new opportunities
        <div className="slash"></div>
      </div>

      <h1>Crafting Beautiful & Functional Web Experiences</h1>
      <p>Hey, I'm Akash, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.</p>

      <div className="buttons">
        <a href="/resume.pdf" download="Akash_Resume">
          <button><FaDownload/> Resume</button>
        </a>
        <button onClick={() => window.open("https://www.linkedin.com/in/akash-k-6b0510203/")}>
          Lets Connect
        </button>
      </div>
      <Moon/>
    </div>
  );
}

export default Intro;
