import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Bookstore Fullstack',
      description: 'Aplikasi toko buku fullstack dengan frontend React.js dan backend Laravel, dilengkapi sistem CRUD lengkap',
      image: '/1.png',
      tech: ['React', 'Laravel', 'MySQL'],
      link: '#',
      category: 'Fullstack'
    },
    {
      id: 2,
      title: 'Stuident Web App',
      description: 'Aplikasi E-learning d dengan frontend React.js dan backend Laravel REST API untuk pengelolaan data siswa',
      image: '/2.png',
      tech: ['React', 'Laravel', 'REST API'],
      link: '#',
      category: 'Fullstack'
    },
    {
      id: 3,
      title: 'Blog Laravel',
      description: 'Platform blog modern dengan Laravel dan Tailwind CSS, fitur artikel, kategori, dan komentar',
      image: '/3.png',
      tech: ['Laravel', 'Tailwind', 'MySQL'],
      link: '#',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Bookstore Laravel',
      description: 'Sistem toko buku berbasis Laravel dengan fitur katalog, keranjang belanja, dan manajemen inventori',
      image: '/1.png',
      tech: ['Laravel', 'Bootstrap', 'MySQL'],
      link: '#',
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'Website Toko Elektronik',
      description: 'Platform belanja online modern untuk produk gadget dan elektronik dengan sistem manajemen lengkap',
      image: '/1.png',
      tech: ['MySQL', 'Bootstrap', 'PHP'],
      link: 'https://rendra.infinityfreeapp.com',
      category: 'Web Development'
    },
    {
      id: 6,
      title: 'EcoWood Furniture',
      description: 'Website portfolio furniture dengan desain minimalis dan user experience yang optimal',
      image: '/2.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rendraardika.github.io/ecowood-furniture-website/',
      category: 'Frontend'
    },
    {
      id: 7,
      title: 'Coffee Shop App',
      description: 'Aplikasi web coffee shop dengan React.js, menampilkan menu dan sistem pemesanan interaktif',
      image: '/3.png',
      tech: ['React', 'JavaScript', 'CSS'],
      link: 'https://coffeshop-v287.vercel.app/',
      category: 'React App'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">
          Latest <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Showcase of my recent work and achievements
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-project"
                  >
                    <FaExternalLinkAlt />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
