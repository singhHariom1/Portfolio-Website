
import { FileDown } from 'lucide-react';
import { AnimateInView } from './ui/motion';

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-1/4 h-1/4 bg-accent/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="section-container">
        <AnimateInView>
          <h2 className="section-title">
            My <span className="text-gradient">Resume</span>
          </h2>
        </AnimateInView>
        
        <AnimateInView delay={100}>
          <p className="section-subtitle">
            Download my resume to learn more about my experience, education, and skills.
          </p>
        </AnimateInView>
        
        <AnimateInView animation="scale-in" delay={300} className="flex justify-center mt-8">
          <a 
            href="/resume.pdf" 
            download="FullStack_Developer_Resume.pdf"
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover-lift flex items-center gap-3 shadow-lg"
          >
            <FileDown className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </AnimateInView>
      </div>
    </section>
  );
}
