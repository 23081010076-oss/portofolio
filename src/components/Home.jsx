import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="text-animation">
          <h3>Hello, I'm</h3>
          <h1>Moh. Misbahul Musthofah</h1>
          <h2 className="typing-text">
            <span>Junior Web Developer</span>
          </h2>
        </div>
        
        <p>
          Mahasiswa Informatika di Universitas Pembangunan Nasional "Veteran" Jawa Timur 
          dengan minat mendalam pada pengembangan front-end modern. Berfokus pada pembuatan 
          antarmuka web yang intuitif, responsif, dan menarik secara visual.
        </p>

        <div className="home-buttons">
          <a href="#portfolio" className="btn btn-primary">
            View Projects
          </a>
          <a href="/cv.pdf" className="btn btn-secondary" download>
            Download CV
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/23081010076-oss" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/misbahul-musthofah" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=misbahulmusthofah@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail />
          </a>
          <a href="https://www.instagram.com/misbahul.m" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="home-image">
        <div className="image-container">
          <div className="glow-effect"></div>
          <img src="/bgg.png" alt="Moh. Misbahul Musthofah" />
        </div>
      </div>
    </section>
  );
};

export default Home;
