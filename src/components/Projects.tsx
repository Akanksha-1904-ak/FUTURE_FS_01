import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import forensicImage from "@/assets/project-forensic.jpg";
import compilerImage from "@/assets/project-compiler.jpg";
import hotelImage from "@/assets/project-hotel.jpg";
import bankImage from "@/assets/project-bank.jpg";
import ipImage from "@/assets/project-ip.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Forensic Face Sketch Construction",
      description: "Python-based forensic application for drag-and-drop facial sketch construction using LBPH algorithm with OpenCV. Features Django/Flask backend, user authentication, and case tracking for law enforcement.",
      image: forensicImage,
      technologies: ["Python", "OpenCV", "Django", "Flask", "SQLite", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akanksha-1904-ak",
      featured: true
    },
    {
      title: "Web-based Code Compiler",
      description: "Multi-language code compiler supporting real-time code execution and conversion. Features sandboxed execution for security and efficient processing with plans for AI-driven optimization.",
      image: compilerImage,
      technologies: ["JavaScript", "HTML", "CSS", "ReactJS", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akanksha-1904-ak",
      featured: true
    },
    {
      title: "Hotel Management System",
      description: "Comprehensive system streamlining reservations, check-ins, billing, and customer management with intuitive UI and real-time room availability updates.",
      image: hotelImage,
      technologies: ["Java", "MySQL", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akanksha-1904-ak",
      featured: false
    },
    {
      title: "Bank Management System",
      description: "Console-based system using Core Java, JDBC, and MySQL for secure account operations including deposits, withdrawals, and fund transfers with transaction management.",
      image: bankImage,
      technologies: ["Java", "JDBC", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akanksha-1904-ak",
      featured: false
    },
    {
      title: "IP Address Finder App",
      description: "ReactJS web application retrieving and displaying user's IP address with geolocation details using IPify API. Features responsive UI and asynchronous API calls.",
      image: ipImage,
      technologies: ["ReactJS", "JavaScript", "API Integration"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akanksha-1904-ak",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my projects showcasing expertise in web development, IoT, 
            AI applications, and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-card border-border/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground animate-pulse-glow">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 cursor-default"
                      style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow hover:scale-105">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 hover:scale-110">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;