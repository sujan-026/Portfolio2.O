import { ChevronDown, Terminal, Code, Zap, FileText } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
const resumeUrl = "../../Sujan P.pdf";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Creating digital experiences that matter";
  const [codeVisible, setCodeVisible] = useState(false);

  // Use memo for expensive calculations
  const getRandomColor = useCallback(() => {
    const colors = ["text-green-400", "text-primary", "text-accent"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setCodeVisible(true), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Optimized star creation with requestAnimationFrame and reduced DOM manipulation
  useEffect(() => {
    if (!starsRef.current) return;

    const createStars = () => {
      if (!starsRef.current) return;

      // Clear stars with a single operation
      starsRef.current.innerHTML = "";

      // Create a document fragment to batch DOM operations
      const fragment = document.createDocumentFragment();
      const starCount = 150; // Reduced from 200

      // Create stars
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("space-star");

        const size = Math.random() * 2.5; // Slightly reduced size
        star.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          --twinkle-duration: ${3 + Math.random() * 5}s;
          animation-delay: ${Math.random() * 5}s;
        `;

        fragment.appendChild(star);
      }

      // Create dust (reduced count)
      for (let i = 0; i < 20; i++) {
        // Reduced from 30
        const dust = document.createElement("div");
        dust.classList.add("cosmic-dust");

        const size = 20 + Math.random() * 120; // Slightly reduced size
        dust.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          opacity: ${Math.random() * 0.25};
          animation-duration: ${15 + Math.random() * 30}s;
          animation-delay: ${Math.random() * -30}s;
        `;

        fragment.appendChild(dust);
      }

      // Append all elements at once
      starsRef.current.appendChild(fragment);
    };

    createStars();

    // Throttle mouse movement for better performance
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current || ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const x = (window.innerWidth / 2 - e.clientX) / 40; // Reduced sensitivity
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        const layers = parallaxRef.current.querySelectorAll(".parallax-layer");
        layers.forEach((layer: Element, index) => {
          const speed = (index + 1) * 0.2; // Reduced speed
          const htmlLayer = layer as HTMLElement;
          htmlLayer.style.transform = `translate(${x * speed}px, ${
            y * speed
          }px)`;
        });

        ticking = false;
      });
    };

    // Debounce resize event
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(createStars, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Ensure the resume file is in the 'public' directory (or root for React apps)
    const resumeUrl = "/Sujan P.pdf"; // Adjust the path if necessary
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SujanP Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-background retro-scanline">
      <div ref={starsRef} className="absolute inset-0 z-0"></div>

      <svg className="absolute pointer-events-none" width="0" height="0">
        <filter id="pixel-filter">
          <feFlood x="4" y="4" height="2" width="2" />
          <feComposite width="10" height="10" />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius="1" />
        </filter>
      </svg>

      <div
        ref={parallaxRef}
        className="section-container flex flex-col items-center justify-center text-center z-10 relative"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-subtle" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-subtle" />

        <div className="parallax-layer" data-speed="0.2">
          <span
            className="inline-block py-1.5 px-4 rounded-full bg-secondary text-sm font-medium mb-6 animate-fade-in pixel-corners terminal-text"
            style={{ animationDelay: "0.1s" }}
          >
            <Terminal size={14} className="inline-block mr-1 mb-0.5" />
            Full Stack, Mobile & Game Developer
          </span>
        </div>

        <div className="parallax-layer" data-speed="0.4">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            style={{
              textShadow:
                "0 0 15px rgba(149, 128, 255, 0.7), 0 0 25px rgba(149, 128, 255, 0.4)",
            }}
          >
            <span className="text-primary">{typedText}</span>
            <span className="terminal-text">_</span>
          </h1>
        </div>

        <div className="parallax-layer" data-speed="0.6">
          {codeVisible && (
            <div className="font-mono text-xs md:text-sm mb-8 p-4 glassmorphism pixel-corners retro-scanline max-w-2xl mx-auto overflow-hidden animate-fade-in">
              <div className="flex items-center mb-2">
                <Code size={14} className="mr-2 text-accent" />
                <span className="text-accent">portfolio.ts</span>
              </div>
              <div className="text-left">
                <div className={getRandomColor()}>
                  const <span className="text-accent">createExperience</span> =
                  () {"=> {"}
                </div>
                <div className="ml-4">
                  return {"{"}
                  <div className="ml-4">
                    <span className={getRandomColor()}>engage:</span>{" "}
                    <span className="text-primary">
                      'robust systems & gameplay'
                    </span>
                    ,<br />
                    <span className={getRandomColor()}>technologies:</span>{" "}
                    ['Next', 'TypeScript', 'Tailwind'],
                    <br />
                    <span className={getRandomColor()}>focus:</span>{" "}
                    <span className="text-primary">
                      'user experience & performance'
                    </span>
                    ,<br />
                    <span className={getRandomColor()}>style:</span>{" "}
                    <span className="text-primary">
                      'pixel-perfect, responsive, accessible'
                    </span>
                  </div>
                  {"}"};
                </div>
                <div>{"};"}</div>
                <div className="mt-2 flex items-center gap-2">
                  <Zap size={14} className="text-accent animate-pulse" />
                  <span className="text-accent">
                    // Execute for awesome results
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="parallax-layer flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 animate-fade-in"
          data-speed="0.8"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={scrollToProjects}
            className="pixel-button min-w-[160px] group pixelate-on-hover"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-accent/20 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="pixel-button bg-transparent border border-primary hover:border-accent min-w-[160px] group pixelate-on-hover"
          >
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute inset-0 bg-primary/10 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>

          {/* <button
            onClick={downloadResume}
            className="pixel-button bg-secondary border border-secondary hover:border-accent min-w-[160px] group pixelate-on-hover"
          >
            <FileText size={16} className="inline-block mr-2 mb-0.5" />
            <span className="relative z-10">Resume</span>
            <span className="absolute inset-0 bg-accent/20 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
