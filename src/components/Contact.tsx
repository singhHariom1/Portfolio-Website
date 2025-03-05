
import { useState } from 'react';
import { AnimateInView } from './ui/motion';
import { Mail, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="section-container">
        <AnimateInView>
          <h2 className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
        </AnimateInView>
        
        <AnimateInView delay={100}>
          <p className="section-subtitle">
            Have a project in mind or want to explore collaboration opportunities? Let's connect.
          </p>
        </AnimateInView>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimateInView animation="slide-in" delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-medium">Let's create something amazing together</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and collaborations. If you have a project that needs creative input or technical expertise, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contact@example.com</span>
                </a>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4">Follow me on</h4>
                <div className="flex gap-4">
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
              </div>
            </div>
          </AnimateInView>
          
          <AnimateInView animation="slide-up" delay={400}>
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300",
                    isSubmitting 
                      ? "bg-accent/50 cursor-not-allowed" 
                      : "bg-accent text-accent-foreground hover:bg-accent/90 hover-lift"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-accent-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
