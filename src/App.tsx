import { useState, useEffect, useRef } from 'react';
import Scene3D from './components/Scene3D';
import Navigation from './components/Navigation';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const scrollToSection = (index: number) => {
    if (!containerRef.current || isScrollingRef.current) return;

    isScrollingRef.current = true;
    setActiveSection(index);

    const sections = containerRef.current.children;
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && activeSection < 4) {
        scrollToSection(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && activeSection < 4) {
        scrollToSection(activeSection + 1);
      } else if (e.key === 'ArrowUp' && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection]);

  return (
    <div className="relative overflow-hidden">
      <Scene3D activeSection={activeSection} />
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <div
        ref={containerRef}
        className="relative z-10 snap-y snap-mandatory h-screen overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="snap-start">
          <IntroSection onNext={() => scrollToSection(1)} />
        </div>
        <div className="snap-start">
          <AboutSection isActive={activeSection === 1} />
        </div>
        <div className="snap-start">
          <SkillsSection isActive={activeSection === 2} />
        </div>
        <div className="snap-start">
          <ProjectsSection isActive={activeSection === 3} />
        </div>
        <div className="snap-start">
          <ContactSection isActive={activeSection === 4} />
        </div>
      </div>
    </div>
  );
}

export default App;
