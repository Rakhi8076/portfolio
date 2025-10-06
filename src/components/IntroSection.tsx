import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import profileImage from './image.png';

export default function IntroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0, rotationY: 180 },
      { opacity: 1, scale: 1, rotationY: 0, duration: 1.5 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 100, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        '-=0.8'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      );

    // ✅ IMAGE FLOAT/FLOW ANIMATION ADDED
    gsap.to(imageRef.current, {
      y: -10,
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
    // ------------------------------------------

  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center relative px-6">
      <div className="text-center z-10">
        
        {/* ⚡ Updated Image Section */}
        <div
          ref={imageRef}
          className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 group"
          style={{ perspective: '1000px' }}
        >
          {/* Inner Glow / Blur Effect */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(0,40,60,0.7) 0%, rgba(0,0,0,0.9) 100%)',
            }}
          />

          {/* Actual Image and Border/Shadow */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-700/40 shadow-2xl shadow-cyan-900/60 transform group-hover:scale-105 transition-transform duration-500">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.8) contrast(1.2)' }}
            />
            {/* Subtle Overlay for Cyberpunk vibe */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.15), transparent)',
              }}
            />
          </div>

          {/* Outer Animated Ring */}
          <div
            className="absolute -inset-4 border-2 border-cyan-700/40 rounded-full animate-spin-slow"
            style={{
              animationDuration: '12s',
              boxShadow: '0 0 20px rgba(0, 150, 180, 0.5)',
            }}
          />
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          style={{
            textShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
          }}
        >
          Rakhi
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
        >
          Frontend and AI/ML Developer
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/50"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}