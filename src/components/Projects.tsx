
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Country Capital Quizzer",
    description: "An app to test your geographical knowledge.",
    image: "/images/countryQuiz.png",
    demoUrl: "https://country-capitals-quizzer.vercel.app/",
    githubUrl: "https://github.com/sujan-026/World-Capital-Quiz",
    technologies: ["EJS", "JavaScript", "CSS", "MonogoDB"],
    category: "web",
  },
  {
    id: 2,
    title: "Pokemon Cards",
    description: "A simple website to browse through all types of pokemons.",
    image: "/images/pokemonCard.png",
    demoUrl: "https://pokemon-sigma-weld.vercel.app/",
    githubUrl: "https://github.com/sujan-026/pokemon",
    technologies: ["EJS", "JavaScript", "CSS", "Express"],
    category: "web",
  },
  {
    id: 3,
    title: "Earth-Moon Simulation",
    description: "A simple simulator of the earth and its moon",
    image: "/images/earthAndMoonSim.png",
    demoUrl: "https://earth-moon-model.vercel.app/",
    githubUrl: "https://github.com/sujan-026/Earth-Moon-Model",
    technologies: ["React", "JavaScript", "Three.js", "HTML", "CSS"],
    category: "web",
  },
  {
    id: 7,
    title: "Reader Realm",
    description:
      "This platform allows users to explore books and their reviews, create user accounts, and contribute their own reviews. Admins have the special privilege to manage books, reviews, and users with full CRUD operations.",
    image: "/images/readerRealm.png",
    demoUrl: "https://reader-realm.vercel.app/",
    githubUrl: "https://github.com/sujan-026/Reader-Realm-",
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
    category: "web",
  },
  {
    id: 4,
    title: "Aadi Ecommerce App",
    description:
      "During my internship, I developed a dynamic e-commerce platform for a spares company that streamlined inventory management and transformed the customer shopping experience.",
    image:
      "/images/AadiSpares.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/sujan-026/Aadi-Ecom",
    technologies: ["React Native", "Expo", "TypeScript", "GlueStack-UI"],
    category: "mobile",
  },
  // {
  //   id: 5,
  //   title: "Weather Forecast Widget",
  //   description:
  //     "A lightweight, customizable weather widget that can be embedded into any website.",
  //   image:
  //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   technologies: ["JavaScript", "Weather API", "CSS3", "HTML5"],
  //   category: "widget",
  // },
  {
    id: 5,
    title: "Sphere Sprint",
    description: "2D platformer made in Unity",
    image: "/images/sphereSprint.png",
    demoUrl: "https://fury-026.itch.io/sphere-sprinter",
    githubUrl: "#",
    technologies: ["C#", "Unity"],
    category: "Game",
  },
  {
    id: 6,
    title: "Flappy Bird",
    description: "The iconic Flappy Bird game",
    image:
      "/images/flappyBird.png",
    demoUrl: "https://fury-026.itch.io/flappybird",
    githubUrl: "#",
    technologies: ["C#", "Unity"],
    category: "Game",
  },
  // {
  //   id: 6,
  //   title: "Portfolio Template",
  //   description:
  //     "A customizable portfolio template for developers and designers with project showcasing.",
  //   image:
  //     "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
  //   category: "web",
  // },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden border border-border/40 h-full flex flex-col group animate-scale-in transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardHeader className="p-5">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm mt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="px-5 py-0 flex-grow">
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.technologies.map((tech, index) => (
            <Badge variant="secondary" key={index} className="px-2 py-1 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-5 pt-6">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
            <Github size={16} />
            <span>Code</span>
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  const categories = ["all", ...new Set(projects.map(project => project.category))];
  
  useEffect(() => {
    if (selectedCategory === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A curated collection of my professional work and personal projects.
            Each project reflects my commitment to clean code, intuitive design
            and optimal functionality.
          </p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/sujan-026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github size={18} />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
