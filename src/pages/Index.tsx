import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import profileImage1 from "@/assets/profile-1.jpg";
import { useState, useEffect } from "react";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const navItems = [{
    label: "About",
    href: "#about"
  }, {
    label: "Education",
    href: "#education"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "Certifications",
    href: "#certifications"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <div className="min-h-screen bg-background dark relative">
      {/* Floating Island Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
        <div className="bg-card/80 backdrop-blur-xl border-2 border-border rounded-full shadow-[var(--shadow-elegant)] px-6 py-3 flex items-center gap-2">
            {navItems.map(item => <a key={item.href} href={item.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-full transition-all duration-200 font-display font-medium">
                {item.label}
              </a>)}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-secondary)] pointer-events-none" />
        
        <div className={`relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Sharan M
              </h1>
              <p className="font-body text-xl md:text-2xl text-muted-foreground font-medium">
                BTech in Electrical & Electronics Engineering
              </p>
              <p className="font-body text-base text-muted-foreground">
                Amrita Vishwa Vidyapeetham | Chennai, Tamil Nadu
              </p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <Button variant="default" size="lg" className="font-display font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 px-8" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" className="font-display font-semibold border-2 border-border hover:bg-accent hover:border-primary transition-all duration-300 px-8" asChild>
                <a href="#about" className="border-muted-foreground border text-muted-foreground">Learn More</a>
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-[var(--gradient-primary)] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
            <img src={profileImage1} alt="Sharan M - Professional Portrait" className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full max-w-md mx-auto border-2 border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
            About Me
          </h2>
          
          <Card className="p-8 md:p-12 bg-card border-2 border-border shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I'm currently pursuing my Bachelor of Technology in Electrical and Electronics Engineering 
              at Amrita Vishwa Vidyapeetham (2025-2029). With a strong foundation in AI, neural networks, 
              and programming, I'm passionate about exploring the intersection of electrical engineering 
              and artificial intelligence.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              My journey includes hands-on experience with machine learning frameworks like PyTorch, 
              proficiency in multiple programming languages, and a creative side expressed through art 
              and athletics. I'm actively building my expertise through certifications and real-world projects.
            </p>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-[var(--gradient-secondary)]">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
            Education
          </h2>
          
          <div className="space-y-6">
            <Card className="p-8 bg-card border-2 border-border hover:border-primary/50 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Amrita Vishwa Vidyapeetham
                  </h3>
                  <p className="font-body text-base text-muted-foreground font-medium">
                    Bachelor of Technology - Electrical & Electronics Engineering
                  </p>
                </div>
                <span className="font-body text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-4 py-1.5 rounded-full">
                  Jul 2025 - Aug 2029
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Neural Networks", "RNN", "CNN", "Data Analysis", "PyTorch"].map(skill => <span key={skill} className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-body font-medium hover:bg-primary/20 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-border hover:border-primary/50 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Chennai Public School - India
                  </h3>
                  <p className="font-body text-base text-muted-foreground font-medium">
                    Grade 13 - Computer Science
                  </p>
                </div>
                <span className="font-body text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-4 py-1.5 rounded-full">
                  Apr 2022 - Apr 2024
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Python", "SQL"].map(skill => <span key={skill} className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-body font-medium hover:bg-primary/20 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-border hover:border-primary/50 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    DAV Group of Schools (TNAES), Chennai
                  </h3>
                  <p className="font-body text-base text-muted-foreground font-medium">
                    Secondary Education
                  </p>
                </div>
                <span className="font-body text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-4 py-1.5 rounded-full">
                  Apr 2010 - Apr 2022
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "Microsoft Office", "Art", "Painting"].map(skill => <span key={skill} className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-body font-medium hover:bg-primary/20 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 bg-card border-2 border-border shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="font-display text-xl font-bold text-primary mb-4">AI & Machine Learning</h3>
              <div className="space-y-2.5">
                {["Neural Networks", "CNN", "RNN", "PyTorch", "Data Analysis", "AI", "Prompt Engineering", "ChatGPT"].map(skill => <p key={skill} className="font-body text-sm text-muted-foreground">• {skill}</p>)}
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-border shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="font-display text-xl font-bold text-primary mb-4">Programming</h3>
              <div className="space-y-2.5">
                {["Python", "Java", "SQL", "HTML", "Scratch"].map(skill => <p key={skill} className="font-body text-sm text-muted-foreground">• {skill}</p>)}
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-border shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="font-display text-xl font-bold text-primary mb-4">Other Skills</h3>
              <div className="space-y-2.5">
                {["Microsoft Office", "Word", "PowerPoint", "Art", "Painting", "Athletics", "Football"].map(skill => <p key={skill} className="font-body text-sm text-muted-foreground">• {skill}</p>)}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-[var(--gradient-secondary)]">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
            name: "Symmetria The Art and Math Exposition Trio",
            issuer: "VIT Chennai",
            date: "Nov 2025"
          }, {
            name: "HTML Essentials",
            issuer: "Cisco",
            date: "Oct 2025"
          }, {
            name: "Intro to Software Performance and Modern Java",
            issuer: "Amrita Vishwa Vidyapeetham",
            date: "Oct 2025"
          }, {
            name: "Introduction to Modern AI",
            issuer: "Cisco",
            date: "Oct 2025"
          }, {
            name: "Prompt Engineering with ChatGPT",
            issuer: "LinkedIn Learning",
            date: "Oct 2025"
          }].map((cert, index) => <Card key={cert.name} className="p-6 bg-card border-2 border-border shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all duration-300 hover:scale-[1.01]">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground font-medium mb-1">{cert.issuer}</p>
                <p className="font-body text-xs text-muted-foreground bg-secondary/50 inline-block px-3 py-1 rounded-full">{cert.date}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
            Recent Achievements
          </h2>
          
          <div className="space-y-6">
            <Card className="p-8 bg-card border-2 border-border shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all duration-300 hover:scale-[1.01]">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                IEEE Madras Section - Golden Jubilee Celebration
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Participated in the prestigious IEEE event, celebrating innovation and technical excellence.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-border shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all duration-300 hover:scale-[1.01]">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Multiple Technical Certifications
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Completed 5+ professional certifications in AI, prompt engineering, and software development within 2 months.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[var(--gradient-secondary)]">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
            Let's Connect
          </h2>
          
          <Card className="p-10 md:p-16 bg-card border-2 border-border shadow-[var(--shadow-elegant)]">
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" size="lg" className="font-display font-semibold w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 px-8" asChild>
                <a href="https://www.linkedin.com/in/sharan-m-1a52a8271" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="font-display font-semibold w-full sm:w-auto border-2 border-border hover:bg-accent hover:border-primary transition-all duration-300 px-8" asChild>
                <a href="mailto:contact@sharanm.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t-2 border-border bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 Sharan M. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;