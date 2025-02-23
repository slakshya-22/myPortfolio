import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Resume Builder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, doloremque. Laboriosam sapiente ipsam earum labore expedita quod dignissimos tempora laborum autem, fugiat eos perferendis non odio vero voluptatibus dolorem illo? Possimus.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://slakshya-22.github.io/M4-GEEKATHON/src/signup-login/register.html",
  },
  {
    image: image2,
    title: "Cadbury Clone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, doloremque. Laboriosam sapiente ipsam earum labore expedita quod dignissimos tempora laborum autem, fugiat eos perferendis non odio vero voluptatibus dolorem illo? Possimus.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://buriburi-nik.github.io/cadbury-clone/nikhil/HomePage/index.html",
  },
  {
    image: image3,
    title: "Chat App Clone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, doloremque. Laboriosam sapiente ipsam earum labore expedita quod dignissimos tempora laborum autem, fugiat eos perferendis non odio vero voluptatibus dolorem illo? Possimus.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    link: "https://m4-chat-8fjr6ictp-lakshya-sharmas-projects-6bea5a93.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"
          />
        </a>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col justify-center items-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
