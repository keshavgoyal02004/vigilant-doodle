import { Badge } from "@/components/ui/badge";

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS", 
  "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL", "REST APIs"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the <span className="bg-gradient-primary bg-clip-text text-transparent">Future</span> of Web
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 5 years of experience in web development, I specialize in creating 
              high-performance, scalable solutions that drive business growth. From startups 
              to enterprise companies, I've helped businesses transform their digital presence.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Why Choose Me?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                    <span className="text-muted-foreground">Fast turnaround with quality delivery</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                    <span className="text-muted-foreground">Direct communication, no middlemen</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                    <span className="text-muted-foreground">Ongoing support and maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                    <span className="text-muted-foreground">Modern tech stack and best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Recent Achievements</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Project Completion Rate</span>
                    <span className="font-semibold text-primary-glow">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Average Response Time</span>
                    <span className="font-semibold text-primary-glow">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client Retention</span>
                    <span className="font-semibold text-primary-glow">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;