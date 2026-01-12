import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <img src="/misbah.png" alt="Moh. Misbahul Musthofah" />
            <div className="image-border"></div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="about-description">
            Halo! Saya <strong>Moh. Misbahul Musthofah</strong>, mahasiswa
            Informatika di Universitas Pembangunan Nasional "Veteran" Jawa
            Timur. Saya memiliki passion yang kuat dalam pengembangan web,
            khususnya di bidang front-end development.
          </p>

          <p className="about-description">
            Dengan keahlian dalam HTML, CSS, JavaScript, dan React.js, saya
            fokus untuk menciptakan pengalaman pengguna yang menarik dan
            interaktif. Saya juga memiliki minat dalam Data Science, Machine
            Learning, dan analisis data.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
          </div>

          <a href="#portfolio" className="btn">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
