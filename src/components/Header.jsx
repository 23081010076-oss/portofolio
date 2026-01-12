import { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a
        href="#home"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
      >
        Misbahul<span>.</span>
      </a>

      <nav className="navbar">
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills");
          }}
        >
          Skills
        </a>
        <a
          href="#portfolio"
          className={activeSection === "portfolio" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("portfolio");
          }}
        >
          Portfolio
        </a>
      </nav>
    </header>
  );
};

export default Header;
