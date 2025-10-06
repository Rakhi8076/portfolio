import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  isActive: boolean;
}

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A stunning portfolio website featuring Three.js animations and smooth transitions.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack shopping experience with real-time inventory and payment processing.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AR Product Visualizer',
    description: 'Augmented reality app for visualizing products in real-world environments.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'AI Chat Interface',
    description: 'Modern chat application with AI integration and real-time messaging.',
    gradient: 'from-green-500 to-teal-500',
  },
];

export default function ProjectsSection({ isActive }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !gridRef.current) return;

    const cards = gridRef.current.children;

    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
        rotateX: 45,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, [isActive]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-200">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-200">
                    <Github className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
