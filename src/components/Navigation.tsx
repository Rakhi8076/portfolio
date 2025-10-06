import { Menu } from 'lucide-react';

interface NavigationProps {
  activeSection: number;
  onNavigate: (section: number) => void;
}

const sections = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10">
          <ul className="flex gap-8">
            {sections.map((section, index) => (
              <li key={index}>
                <button
                  onClick={() => onNavigate(index)}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    activeSection === index
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section}
                  {activeSection === index && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-6 right-6 z-50 md:hidden">
        <button className="p-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </nav>

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index
                ? 'bg-cyan-400 border-cyan-400 scale-125'
                : 'bg-transparent border-white/30 hover:border-white/60'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
