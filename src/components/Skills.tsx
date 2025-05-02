import { AnimateInView } from "./ui/motion";

const technologies = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.worldvectorlogo.com/logos/c.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.worldvectorlogo.com/logos/python-3.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Data Structures",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Algorithms",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "WebSocket",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "REST APIs",
    logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-1/4 h-1/4 bg-accent/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="section-container">
        <AnimateInView>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
        </AnimateInView>

        <AnimateInView delay={100}>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise in full-stack
            development.
          </p>
        </AnimateInView>

        {/* Technologies */}
        <div>
          <AnimateInView delay={200} className="mb-10">
            <h3 className="text-2xl font-serif font-semibold">Technologies</h3>
          </AnimateInView>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <AnimateInView
                key={index}
                animation="fade-in"
                delay={300 + index * 50}
              >
                <div className="glass px-4 py-6 rounded-xl text-center hover:bg-accent/20 transition-colors duration-300 flex flex-col items-center justify-center gap-3">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-12 h-12 object-contain dark:invert-[.25]"
                  />
                  <span className="font-medium">{tech.name}</span>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
