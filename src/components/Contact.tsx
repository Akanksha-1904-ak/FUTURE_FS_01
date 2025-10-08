import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // For now, just show success message
    // In a real app, this would connect to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration or have a project idea? I'd love to connect and discuss 
            how we can work together to create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="mb-6 text-accent-gradient">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always excited to connect with fellow creators and innovators.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="p-3 rounded-full bg-gradient-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-gradient transition-all duration-300">Email</p>
                  <p className="text-muted-foreground">akankshashettigar3@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="p-3 rounded-full bg-gradient-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-gradient transition-all duration-300">Phone</p>
                  <p className="text-muted-foreground">+91 9740130482</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="p-3 rounded-full bg-gradient-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-gradient transition-all duration-300">Location</p>
                  <p className="text-muted-foreground">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/20 hover:border-primary/40 shadow-glow hover:shadow-glow-accent transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-center text-gradient">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="focus:border-primary focus:ring-primary transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="focus:border-primary focus:ring-primary transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className="focus:border-primary focus:ring-primary transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="focus:border-primary focus:ring-primary transition-all duration-300"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/20 hover:border-primary/20 transition-all duration-300">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> To enable email notifications for this contact form, 
                  you'll need to connect to Supabase for backend functionality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;