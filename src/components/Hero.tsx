import { ArrowDown } from "lucide-react";
import { AnimateInView } from "./ui/motion";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background elements - decorative */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="w-full md:w-1/2">
          <AnimateInView animation="slide-in" className="mb-6">
            <div className="inline-block rounded-full px-3 py-1 text-sm text-accent border border-accent/30 mb-6">
              Full-Stack Developer
            </div>
          </AnimateInView>

          <AnimateInView animation="slide-in" delay={300}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Crafting Digital
              <span className="text-gradient block">Solutions</span>
            </h1>
          </AnimateInView>

          <AnimateInView animation="slide-in" delay={600}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10">
              Passionate full-stack developer specializing in creating elegant,
              efficient applications with a strong foundation in data structures
              and algorithms.
            </p>
          </AnimateInView>

          <AnimateInView animation="slide-in" delay={900}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover-lift"
              >
                View Projects
              </a>
              <a
                href="/public/resume.pdf"
                download
                className="px-6 py-3 glass rounded-full font-medium hover-lift"
              >
                Download Resume
              </a>
            </div>
          </AnimateInView>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <AnimateInView animation="scale-in" delay={300}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="w-full h-full rounded-full border-2 border-accent/20 absolute animate-pulse-subtle"></div>
              <div
                className="w-[90%] h-[90%] rounded-full border-2 border-accent/30 absolute top-[5%] left-[5%] animate-pulse-subtle"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="w-[80%] h-[80%] rounded-full border-2 border-accent/40 absolute top-[10%] left-[10%] animate-pulse-subtle"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Profile Image */}
              <div className="w-[70%] h-[70%] rounded-full overflow-hidden absolute top-[15%] left-[15%] glass">
                <img
                  src="/public/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
