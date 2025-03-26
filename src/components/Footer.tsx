
import { Github, Linkedin, Twitter, ExternalLink, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary py-8">
      <div className="section-container py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <button
              className="text-xl font-semibold flex items-center gap-2 hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Sujan P
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                2025
              </span>
            </button>
            <p className="text-muted-foreground mt-1 text-sm">
              Crafting digital experiences with precision and care.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a
              href="#projects"
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/sujan-026"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sujan-p-443745244/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/_sujan_026/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-border/40 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {year} Portfolio. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
