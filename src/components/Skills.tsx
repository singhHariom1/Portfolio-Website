
import { AnimateInView } from './ui/motion';
import { cn } from '@/lib/utils';

const technologies = [
  { name: 'JavaScript', icon: '📜' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '⚡' },
  { name: 'Node.js', icon: '🚀' },
  { name: 'Express', icon: '🔌' },
  { name: 'SQL', icon: '💾' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Appwrite', icon: '📊' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Figma', icon: '🖌️' },
  { name: 'Git', icon: '📋' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'REST APIs', icon: '🔄' },
  { name: 'GraphQL', icon: '⬢' },
  { name: 'Redux', icon: '🔄' },
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
            A comprehensive overview of my technical expertise in full-stack development.
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
                delay={300 + (index * 50)}
              >
                <div className="glass px-4 py-6 rounded-xl text-center hover:bg-accent/20 transition-colors duration-300 flex flex-col items-center justify-center gap-3">
                  <span className="text-3xl">{tech.icon}</span>
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
