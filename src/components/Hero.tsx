import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="mb-6 animate-slide-up">
            Hi, I'm <span className="text-gradient animate-glow">Akanksha Shettigar</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Software Engineer & Computer Science Student
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Motivated Computer Science Engineering student with expertise in IoT, web applications, and software development. 
            Passionate about building innovative, real-world solutions using modern technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1" asChild>
              <a href="/Akanksha_Shettigar_Resume.pdf" download="Akanksha_Shettigar_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/Akanksha-1904-ak" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-full bg-card/30 backdrop-blur-sm hover:bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-125 hover:rotate-12">
              <Github className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="https://linkedin.com/in/akanksha-shettigar-487800339" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-full bg-card/30 backdrop-blur-sm hover:bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-125 hover:rotate-12">
              <Linkedin className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="#contact" className="group p-4 rounded-full bg-card/30 backdrop-blur-sm hover:bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-125 hover:rotate-12">
              <Mail className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;