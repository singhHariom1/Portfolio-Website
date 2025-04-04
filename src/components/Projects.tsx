import { useState } from "react";
import { AnimateInView, AnimateHover } from "./ui/motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A comprehensive LMS platform built with MERN stack featuring course management, student progress tracking, and interactive content delivery.",
    tags: ["Full-Stack", "React", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?q=80&w=1920&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A WebSocket-powered chat application enabling real-time messaging, user presence, and multiple chat rooms with MERN stack.",
    tags: ["Full-Stack", "WebSocket", "MERN"],
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1920&auto=format&fit=crop",
    link: "https://pingme-qk2x.onrender.com",
    github: "https://github.com/singhHariom1/FullStack-Chat-App",
  },
  {
    title: "Sorting Visualizer",
    description:
      "Interactive platform for visualizing common data structures like arrays, linked lists, trees, and graphs with step-by-step operations.",
    tags: ["DSA", "React", "Algorithms"],
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1920&auto=format&fit=crop",
    link: "https://sortingvisualizer99.netlify.app/",
    github: "https://github.com/singhHariom1/Sorting-Visualizer",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    tags: ["React", "Tailwind", "Full-Stack"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
];

const categories = ["All", "Full-Stack", "DSA", "MERN"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => tag === activeCategory)
        );

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/3 left-1/4 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="section-container">
        <AnimateInView>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </AnimateInView>

        <AnimateInView delay={100}>
          <p className="section-subtitle">
            Showcasing my work in data structures, algorithms, and full-stack
            development.
          </p>
        </AnimateInView>

        {/* Filter categories */}
        <AnimateInView animation="slide-up" delay={200} className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "glass hover:bg-accent/20"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateInView>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimateInView
              key={index}
              animation="scale-in"
              delay={300 + index * 100}
              className="h-full"
            >
              <AnimateHover className="h-full">
                <div className="glass h-full rounded-xl overflow-hidden flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-3 font-serif">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.link}
                        className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateHover>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
