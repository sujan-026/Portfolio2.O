
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { User, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Learn more about my professional background, experience, and what
            drives my passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
            <div
              className={`absolute inset-0 bg-secondary animate-pulse ${
                imageLoaded ? "hidden" : "block"
              }`}
            />
            <img
              src="/images/me.jpg"
              alt="Profile"
              className={`w-full h-full object-cover ${
                imageLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute -bottom-2 -right-2 w-4/5 h-4/5 border-4 border-primary/20 rounded-lg -z-10" />
          </div>

          <div>
            <Tabs defaultValue="bio" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="bio" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Bio</span>
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="flex items-center gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="flex items-center gap-2"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="flex items-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Interests</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bio" className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <p>
                      Hello! I'm Sujan P, a passionate Computer Science student
                      at Dr. Ambedkar Institute of Technology, currently in my
                      third year. I have a strong interest in full-stack and
                      mobile development, and I'm constantly exploring new
                      technologies to sharpen my skills and build impactful
                      solutions. My journey began with curiosity and quickly
                      turned into a love for creating seamless, functional, and
                      visually engaging digital experiences.
                    </p>
                    <p>
                      I've built dynamic applications using the MERN stack and
                      React Native, and I'm also diving into game development
                      and AI/ML. Some of my favorite projects include building a
                      custom flight computer for a rocket and developing a stock
                      trading simulation game. Whether it's designing a clean
                      frontend or architecting backend logic, I enjoy the full
                      development lifecycle and constantly seek ways to improve
                      performance, maintainability, and user experience.
                    </p>
                    <p>
                      Outside of coding, I enjoy collaborating on innovative
                      ideas, contributing to hackathons, and learning through
                      hands-on challenges. I also love watching anime, playing
                      video games, and following cricket. I'm a strong believer
                      in continuous learning, clean code, and building tech that
                      inspires.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">
                          Backend Intern
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Valoir (Delhi-based company) • 2024 - Present
                      </p>
                      <p className="text-sm">
                        Working on scalable backend systems using Node.js, Express.js and
                        SQL/NOSQL. Responsible for developing RESTful APIs,
                        optimizing database queries, and contributing to
                        architectural decisions for ongoing client projects.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">
                          Developer - College Information Management System
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Dr. Ambedkar Institute of Technology • 2024 - Present
                      </p>
                      <p className="text-sm">
                        Leading the development of a full-stack web application
                        to manage student records, faculty data, exams, and
                        marks. The system streamlines administrative workflows
                        and introduces role-based access for different
                        stakeholders.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">
                          BTech in Computer Science
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Dr. Ambedkar Institute of Technology, Bangalore • Dec
                        2022 - Aug 2026
                      </p>
                      <p className="text-sm">
                        Currently pursuing my undergraduate degree in Computer
                        Science with a focus on full-stack development, mobile
                        applications, AI/ML, and innovative project-based
                        learning.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">
                          Higher Secondary Education (CBSE)
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Sri Chaitanya College, Bangalore • 2020 - 2022
                      </p>
                      <p className="text-sm">
                        Completed 11th and 12th grade with a strong foundation
                        in mathematics, physics, and computer science under the
                        CBSE curriculum.
                      </p>
                    </div>

                    {/* <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">
                          Professional Certifications
                        </h3>
                      </div>
                      <p className="text-sm">
                        AWS Certified Developer, Google Professional Cloud
                        Developer, MongoDB Certified Developer
                      </p>
                    </div> */}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interests" className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">
                      Beyond coding, I have a diverse range of interests that
                      keep me inspired and help fuel my creativity:
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Hackathons & Collaboration</strong> - I love
                          teaming up with peers to build innovative solutions
                          and solve real-world problems.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Swimming</strong> - I find swimming both
                          relaxing and energizing; it helps me stay focused and
                          maintain a healthy routine.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Anime</strong> - Watching anime not only
                          entertains me but often inspires creativity and new
                          project ideas.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Gaming</strong> - I enjoy both casual and
                          strategy games that challenge my thinking and offer a
                          break from coding.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Cricket</strong> - Whether watching or
                          playing, cricket is a fun way for me to relax and stay
                          active.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
