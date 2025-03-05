
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AnimateInView } from "@/components/ui/motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto px-4 text-center">
        <AnimateInView animation="scale-in">
          <div className="glass p-8 rounded-xl">
            <h1 className="text-6xl font-serif font-bold mb-4 text-gradient">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Oops! This page doesn't exist.</p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover-lift"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </a>
          </div>
        </AnimateInView>
      </div>
    </div>
  );
};

export default NotFound;
