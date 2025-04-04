import { AnimateInView, AnimateHover } from "./ui/motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How to Identify the Right Pattern While Solving Any DSA Problem",
    excerpt:
      "Master the art of recognizing common DSA patterns like Sliding Window, Two Pointers, and Binary Search to crack problems faster and more effectively.",
    date: "April 4, 2025",
    category: "Data Structures & Algorithms",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1920&auto=format&fit=crop",
    slug: "https://medium.com/@BarbellToBinary/how-to-identify-the-right-pattern-while-solving-any-dsa-problem-58efffdf3ecd",
  },
  {
    title: "Top 5 VS Code Extensions Every Dev Should Try in 2025 🚀",
    excerpt:
      "Supercharge your developer workflow with these powerful VS Code extensions for productivity, debugging, AI assistance, and better code formatting.",
    date: "April 4, 2025",
    category: "Developer Tools",
    image:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1920&auto=format&fit=crop",
    slug: "https://medium.com/@BarbellToBinary/top-5-vs-code-extensions-every-dev-should-try-in-2025-4dbd1a3ce807",
  },
  {
    title: "React at Warp Speed: Advanced Performance Tips for 2025",
    excerpt:
      "Unlock serious speed in your React apps using memoization, code-splitting, virtualization, and performance profiling tricks used by pro developers.",
    date: "April 4, 2025",
    category: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop",
    slug: "https://medium.com/@BarbellToBinary/%EF%B8%8F-optimizing-react-performance-advanced-techniques-every-dev-should-know-in-2025-6737b375fac0",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="section-container">
        <AnimateInView>
          <h2 className="section-title">
            Latest <span className="text-gradient">Articles</span>
          </h2>
        </AnimateInView>

        <AnimateInView delay={100}>
          <p className="section-subtitle">
            Insights, tutorials, and thoughts on full-stack development and
            algorithms.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post, index) => (
            <AnimateInView
              key={index}
              animation="slide-up"
              delay={200 + index * 100}
            >
              <AnimateHover>
                <a href={post.slug} className="block h-full">
                  <article className="glass rounded-xl overflow-hidden h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent/80">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-serif">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                        <span className="text-sm text-muted-foreground">
                          {post.date}
                        </span>
                        <span className="text-accent flex items-center gap-1 text-sm group">
                          Read more{" "}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </AnimateHover>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView
          animation="fade-in"
          delay={500}
          className="mt-16 text-center"
        >
          <a
            href="https://medium.com/@BarbellToBinary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-medium hover-lift"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </AnimateInView>
      </div>
    </section>
  );
}
