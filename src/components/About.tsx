import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Java", "Python", "JavaScript", "ReactJS", "HTML", "CSS",
    "MySQL", "MongoDB", "Git", "VS Code", "Jupyter Notebook"
  ];

  const experience = [
    {
      title: "Bachelor of Engineering",
      company: "Atria Institute of Technology",
      period: "2022 - Present",
      description: "Computer Science and Engineering, CGPA: 8.6. Developed multiple full-stack projects including hotel management systems, code compilers, and banking applications."
    },
    {
      title: "Python Foundation Certification",
      company: "Infosys",
      period: "2024",
      description: "Completed certification in Python programming fundamentals and received multiple course completion certificates from IBM, Infosys Springboard, and HackerRank."
    },
    {
      title: "JavaScript Assessment",
      company: "HackerRank",
      period: "2024",
      description: "Successfully cleared JavaScript (Intermediate) assessment on HackerRank, demonstrating proficiency in modern JavaScript development."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science Engineering student with a strong academic record (CGPA: 8.6) and hands-on 
            experience in building innovative software solutions across web development, IoT, and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="mb-6 text-accent-gradient">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-gradient-primary hover:text-primary-foreground hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-default animate-fade-in"
                  style={{ animationDelay: `${0.3 + (index * 0.05)}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="mb-6 text-accent-gradient">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                I started my journey as a curious computer science student fascinated by the power 
                of technology to solve real-world problems. From building IoT projects to developing 
                full-stack web applications, I've continuously expanded my skillset.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Today, I specialize in software development with proficiency in Java, Python, and 
                modern web technologies like ReactJS. I'm passionate about problem-solving, 
                collaboration, and creating innovative solutions that make a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="mb-8 text-center text-accent-gradient">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="group bg-gradient-card border-border/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${0.8 + (index * 0.1)}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-gradient transition-all duration-300">{exp.title}</h4>
                      <p className="text-primary font-medium group-hover:text-cyan-gradient transition-all duration-300">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;