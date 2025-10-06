import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Code2, Palette, Box, Zap, Database, Globe } from 'lucide-react';

interface SkillsSectionProps {
  isActive: boolean;
}

const skills = [
  { icon: Code2, name: 'Web Development', color: 'from-cyan-500 to-blue-500' },
  { icon: Box, name: '3D Graphics', color: 'from-purple-500 to-pink-500' },
  { icon: Palette, name: 'UI/UX Design', color: 'from-orange-500 to-red-500' },
  { icon: Zap, name: 'Animation', color: 'from-yellow-500 to-orange-500' },
  { icon: Database, name: 'Backend', color: 'from-green-500 to-teal-500' },
  { icon: Globe, name: 'WebGL/Three.js', color: 'from-blue-500 to-cyan-500' },
];

export default function SkillsSection({ isActive }: SkillsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !gridRef.current) return;

    const cards = gridRef.current.children;

    gsap.fromTo(
      cards,
      {
        scale: 0,
        rotateY: 180,
        opacity: 0,
      },
      {
        scale: 1,
        rotateY: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
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
          Skills & Expertise
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center">
                    {skill.name}
                  </h3>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 30px rgba(0, 221, 255, 0.3)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
