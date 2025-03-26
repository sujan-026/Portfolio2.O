
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Palette, Database, Terminal, Wrench, BookOpen } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  description: string;
};

type SkillCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      {
        name: "HTML & CSS",
        level: 95,
        description:
          "Semantic HTML and advanced CSS techniques including animations and responsive design.",
      },
      {
        name: "JavaScript",
        level: 90,
        description:
          "ES6+, DOM manipulation, async programming, and modern JS patterns.",
      },
      {
        name: "React",
        level: 88,
        description:
          "Component architecture, hooks, context API, and state management solutions.",
      },
      {
        name: "Next",
        level: 95,
        description:
          "Building full-stack apps using API routes, dynamic routing, SSR/SSG, and seamless integration with React.",
      },
      {
        name: "TypeScript",
        level: 85,
        description:
          "Type definitions, interfaces, generics, and integration with React.",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        description: "Utility-first CSS and component design systems.",
      },
    ],
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      {
        name: "Responsive Design",
        level: 90,
        description:
          "Mobile-first design principles and cross-device compatibility.",
      },
      {
        name: "Accessibility",
        level: 80,
        description:
          "WCAG guidelines, ARIA attributes, and inclusive design patterns.",
      },
      {
        name: "Design Systems",
        level: 82,
        description:
          "Creating and implementing consistent component libraries.",
      },
      {
        name: "User Testing",
        level: 75,
        description: "Conducting usability tests and implementing feedback.",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: [
      {
        name: "Node.js",
        level: 82,
        description:
          "Server-side JavaScript, Express, and RESTful API development.",
      },
      {
        name: "Express.js",
        level: 95,
        description:
          "Server-side JavaScript, Express, and RESTful API development.",
      },
      {
        name: "MongoDB",
        level: 78,
        description:
          "Schema design, queries, and integration with Node.js applications.",
      },
      {
        name: "Firebase",
        level: 85,
        description:
          "Authentication, Firestore, and real-time database operations.",
      },
      {
        name: "SQL",
        level: 70,
        description: "Database design, normalization, and complex queries.",
      },
      {
        name: "Prisma",
        level: 90,
        description:
          "Declarative schema modeling, type-safe DB access, and seamless integration with SQL databases.",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      {
        name: "Git & GitHub",
        level: 88,
        description:
          "Version control, branching strategies, and collaborative workflows.",
      },
      {
        name: "CI/CD",
        level: 75,
        description: "Automated testing and deployment pipelines.",
      },
      {
        name: "Docker",
        level: 68,
        description: "Containerization of applications and services.",
      },
      {
        name: "Performance Optimization",
        level: 80,
        description: "Web vitals, bundle optimization, and loading strategies.",
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Methods",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      {
        name: "VS Code",
        level: 95,
        description:
          "Power user of VS Code with custom extensions, workspace setup, and productivity workflows.",
      },
      {
        name: "Expo",
        level: 85,
        description:
          "Rapid mobile development with React Native, OTA updates, and native API integration.",
      },
      {
        name: "Unity",
        level: 80,
        description:
          "2D/3D game development with C#, physics, UI systems, and performance optimization.",
      },
      {
        name: "npm",
        level: 90,
        description:
          "Efficient dependency management, custom scripts, and workspace tooling.",
      },
    ],
  },
  {
    id: "learning",
    name: "Currently Learning",
    icon: <BookOpen className="h-5 w-5" />,
    skills: [
      {
        name: "Three.js",
        level: 75,
        description: "3D graphics and animations for web applications.",
      },
      {
        name: "Web3",
        level: 40,
        description:
          "Blockchain integration and decentralized application development.",
      },
      {
        name: "Rust",
        level: 35,
        description:
          "Systems programming for performance-critical applications.",
      },
      {
        name: "Unity",
        level: 55,
        description:
          "Beginner-level experience with C# scripting, game objects, and Unity's component system.",
      },
    ],
  },
];

const SkillItem = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
      
      {isHovered && (
        <p className="text-sm text-muted-foreground mt-2 animate-fade-in">
          {skill.description}
        </p>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical expertise and proficiency across various technologies, 
            tools, and methodologies in web development.
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden md:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
