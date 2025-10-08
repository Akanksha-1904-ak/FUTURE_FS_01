import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-secondary/5 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Akanksha Shettigar. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
             
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Akanksha-1904-ak" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card/50 hover:bg-card hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/akanksha-shettigar-487800339" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card/50 hover:bg-card hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:akankshashettigar3@gmail.com" 
              className="p-2 rounded-full bg-card/50 hover:bg-card hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;