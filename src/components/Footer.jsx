import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>
              Misbahul<span>.</span>
            </h3>
            <p>Front End Developer & Creative Designer</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a
                href="https://github.com/23081010076-oss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/misbahul-musthofah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=misbahulmusthofah@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
              <a
                href="https://www.instagram.com/rendraaardiii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> by Moh. Misbahul
            Musthofah
          </p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
