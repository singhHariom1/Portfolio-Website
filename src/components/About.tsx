
import { AnimateInView } from './ui/motion';

const timeline = [
  {
    year: '2024',
    title: 'Full-Stack Developer',
    company: 'Personal Projects & Freelance',
    description: 'Building full-stack applications using Next.js, React, and Node.js, with a focus on performance and user experience.'
  },
  {
    year: '2023',
    title: 'Data Structures & Algorithms',
    company: 'Advanced Studies',
    description: 'Deep dive into complex algorithms, problem-solving techniques, and efficient data structures.'
  },
  {
    year: '2022',
    title: 'Frontend Development',
    company: 'Self-learning & Bootcamps',
    description: 'Mastered modern frontend frameworks and libraries including React, Next.js, and Tailwind CSS.'
  },
  {
    year: '2021',
    title: 'Computer Science Fundamentals',
    company: 'Academic Studies',
    description: 'Established strong foundations in programming principles, databases, and computer science theory.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-accent/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="section-container">
        <AnimateInView>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </AnimateInView>
        
        <AnimateInView delay={100}>
          <p className="section-subtitle">
            Passionate about building efficient, scalable applications with clean code and intuitive user experiences.
          </p>
        </AnimateInView>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <AnimateInView animation="slide-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a full-stack developer with a passion for building elegant, efficient solutions, I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.
                </p>
                <p>
                  My journey in technology began with a strong foundation in computer science fundamentals, data structures, and algorithms, which has enabled me to approach complex problems with confidence and analytical thinking.
                </p>
                <p>
                  I believe in continuous learning and staying current with emerging technologies and best practices. My commitment to clean, maintainable code and user-centered design principles guides every project I undertake.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 glass text-sm rounded-full">Full-Stack Development</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Data Structures & Algorithms</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Problem Solving</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Clean Code</span>
              </div>
            </div>
          </AnimateInView>
          
          <AnimateInView animation="slide-up" delay={200}>
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-8">Experience & Learning</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/30 before:to-transparent">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/50 bg-background text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        <span className="text-sm font-bold">{item.year}</span>
                      </div>
                      <div className="w-0.5 h-full bg-accent/20"></div>
                    </div>
                    <div className="ml-6">
                      <div className="font-bold text-lg">{item.title}</div>
                      <div className="text-accent font-medium">{item.company}</div>
                      <div className="text-muted-foreground mt-1">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
