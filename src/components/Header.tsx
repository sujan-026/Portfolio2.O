
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glassmorphism border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">
            <span className="text-white inline-block relative after:absolute after:bg-accent after:h-1 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300">
              <span className="text-accent">Sujan P</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium transition-colors hover:text-accent relative group"
          >
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium transition-colors hover:text-accent relative group"
          >
            <span>Skills</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium transition-colors hover:text-accent relative group"
          >
            <span>About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="pixel-button text-sm py-2 px-4 min-w-[100px]"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-accent" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism animate-fade-in border-b border-white/5">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="py-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-sm font-medium transition-colors hover:text-accent"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="pixel-button w-full mt-2 text-sm py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
