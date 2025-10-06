import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { User, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  isActive: boolean;
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !contentRef.current) return;

    const elements = contentRef.current.children;

    gsap.fromTo(
      elements,
      {
        x: -100,
        opacity: 0,
        rotateY: -45,
      },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
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
      <div
        ref={contentRef}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <User className="w-12 h-12 text-cyan-400" />
          <h2 className="text-5xl md:text-6xl font-bold text-white">About Me</h2>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I'm a passionate creative developer with a love for crafting immersive digital experiences.
            With expertise in 3D graphics, web technologies, and interactive design, I bring ideas to life
            through code and creativity.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            My journey combines technical excellence with artistic vision, creating memorable experiences
            that push the boundaries of what's possible on the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
