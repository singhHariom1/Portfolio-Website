
import { AnimateInView } from './ui/motion';

const timeline = [
  {
    year: '2023',
    title: 'Senior UX Designer',
    company: 'Design Studio X',
    description: 'Led design teams in creating award-winning user experiences for enterprise clients.'
  },
  {
    year: '2021',
    title: 'Product Designer',
    company: 'Tech Innovations',
    description: 'Redesigned core user flows resulting in 40% increase in conversion rates.'
  },
  {
    year: '2019',
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    description: 'Crafted interfaces for startups and established brands across various industries.'
  },
  {
    year: '2017',
    title: 'Web Developer',
    company: 'Digital Solutions',
    description: 'Developed responsive websites and web applications using modern technologies.'
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
            My journey in design and development has been fueled by a passion for creating intuitive, engaging experiences.
          </p>
        </AnimateInView>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <AnimateInView animation="slide-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 7 years of experience in the design and development industry, I've cultivated a holistic approach to creating digital experiences that are both beautiful and functional.
                </p>
                <p>
                  My philosophy centers on minimalism and purpose-driven design. Every element should serve a clear function while contributing to the overall aesthetic harmony.
                </p>
                <p>
                  I believe the best digital products arise from deep collaboration between designers, developers, and users. My process emphasizes research, iteration, and continuous refinement.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 glass text-sm rounded-full">UI/UX Design</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Web Development</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Product Strategy</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Visual Design</span>
              </div>
            </div>
          </AnimateInView>
          
          <AnimateInView animation="slide-up" delay={200}>
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-8">Experience</h3>
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
