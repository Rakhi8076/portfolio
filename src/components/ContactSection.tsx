import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactSectionProps {
  isActive: boolean;
}

export default function ContactSection({ isActive }: ContactSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !contentRef.current) return;

    const elements = contentRef.current.children;

    gsap.fromTo(
      elements,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
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
      <div className="max-w-4xl w-full text-center">
        <div ref={contentRef}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities and creative ideas.
          </p>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
            <a
              href="mailto:hello@johndoe.com"
              className="group inline-flex items-center gap-4 text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Mail className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              hello@johndoe.com
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Twitter, href: 'https://twitter.com' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </a>
              );
            })}
          </div>

          <p className="text-gray-500 mt-12">
            © 2025 John Doe. Crafted with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
}
