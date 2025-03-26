
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Reference to store timeouts for cleanup
  const timeoutsRef = useRef<number[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create stars in the background
    const createStars = () => {
      const starContainer = document.createElement('div');
      starContainer.className = 'fixed inset-0 pointer-events-none z-0';
      document.body.appendChild(starContainer);
      
      const starCount = 150;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('space-star');
        
        // Random sizes
        const size = Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random positions
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random twinkle durations
        star.style.setProperty('--twinkle-duration', `${3 + Math.random() * 5}s`);
        
        // Random delays
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starContainer.appendChild(star);
      }
      
      // Add nebula effects
      for (let i = 0; i < 5; i++) {
        const nebula = document.createElement('div');
        nebula.classList.add('cosmic-nebula');
        
        // Random sizes
        const size = 200 + Math.random() * 300;
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        
        // Random positions
        nebula.style.left = `${Math.random() * 100}%`;
        nebula.style.top = `${Math.random() * 100}%`;
        
        // Random colors
        const hue1 = Math.floor(Math.random() * 360);
        const hue2 = (hue1 + 30 + Math.floor(Math.random() * 60)) % 360;
        nebula.style.background = `radial-gradient(circle at center, 
          hsla(${hue1}, 100%, 75%, 0.1) 0%, 
          hsla(${hue2}, 100%, 50%, 0.05) 50%, 
          transparent 70%)`;
        
        // Random rotation
        nebula.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        starContainer.appendChild(nebula);
      }
      
      return starContainer;
    };
    
    const starContainer = createStars();
    
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a slight delay to each element for a cascade effect
            const timeout = window.setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, 150 * Array.from(entry.target.parentNode?.children || []).indexOf(entry.target));
            
            timeoutsRef.current.push(timeout);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe elements with the reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    // Add cursor trail effect
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Create particle at cursor position
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      
      // Random size
      const size = 2 + Math.random() * 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color
      const hue = Math.random() > 0.5 ? 250 : 310; // Primary or accent color
      particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${0.3 + Math.random() * 0.5})`;
      
      document.body.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        document.body.removeChild(particle);
      }, 1000);
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Clean up timeouts and observer
      timeoutsRef.current.forEach(window.clearTimeout);
      observer.disconnect();
      
      // Remove star container
      if (starContainer) {
        document.body.removeChild(starContainer);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 z-0 grid-background"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
