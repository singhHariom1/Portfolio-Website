
import { AnimateInView } from './ui/motion';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'UI/UX Design', level: 90, icon: '✏️' },
  { name: 'Frontend Development', level: 85, icon: '💻' },
  { name: 'React / React Native', level: 85, icon: '⚛️' },
  { name: 'Responsive Design', level: 95, icon: '📱' },
  { name: 'Design Systems', level: 80, icon: '🎨' },
  { name: 'User Research', level: 75, icon: '🔍' },
  { name: 'Prototyping', level: 90, icon: '🖌️' },
  { name: 'Figma / Adobe XD', level: 95, icon: '🎯' },
];

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 
  'Tailwind CSS', 'Figma', 'Sketch', 'Adobe XD', 'Photoshop', 
  'Illustrator', 'Node.js', 'GraphQL', 'REST APIs', 'Git',
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
            A comprehensive overview of my technical skills and expertise.
          </p>
        </AnimateInView>
        
        {/* Core skills with progress bars */}
        <div className="mb-20">
          <AnimateInView delay={200} className="mb-10">
            <h3 className="text-2xl font-serif font-semibold">Core Expertise</h3>
          </AnimateInView>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            {skills.map((skill, index) => (
              <AnimateInView 
                key={index} 
                animation="slide-up" 
                delay={300 + (index * 50)}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out origin-left"
                      style={{ width: `${skill.level}%`, transform: 'scaleX(0)', animationFillMode: 'forwards' }}
                      onAnimationStart={(e) => {
                        setTimeout(() => {
                          e.currentTarget.style.transform = 'scaleX(1)';
                        }, 100);
                      }}
                    ></div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
        
        {/* Technologies */}
        <div>
          <AnimateInView delay={200} className="mb-10">
            <h3 className="text-2xl font-serif font-semibold">Technologies</h3>
          </AnimateInView>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <AnimateInView 
                key={index} 
                animation="fade-in" 
                delay={300 + (index * 50)}
              >
                <div className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-300">
                  {tech}
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
