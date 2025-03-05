
import { Heart, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-serif font-bold">
              <span className="text-gradient">Portfolio.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Creating beautiful digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <h3 className="text-sm font-semibold mb-3">Pages</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About</a></li>
                <li><a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground flex items-center">
            Designed & built with <Heart className="w-4 h-4 mx-1 text-accent" /> in 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
