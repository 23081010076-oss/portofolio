import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      title: "HTML5",
      description:
        "Struktur halaman web dengan semantik yang baik dan accessible",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      title: "CSS3",
      description: "Desain modern, responsive, dan animasi yang menarik",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      title: "JavaScript",
      description: "Interaktivitas dinamis dan logika aplikasi yang kompleks",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
      title: "React.js",
      description: "Membangun UI modern berbasis komponen yang reusable",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
      title: "PHP",
      description: "Server-side logic dan pengembangan web dinamis",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      title: "Laravel",
      description: "Framework PHP modern untuk aplikasi web yang scalable",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      title: "SQL",
      description: "Manajemen dan query database yang efisien",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="skills-swiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skill-card">
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.title} />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
