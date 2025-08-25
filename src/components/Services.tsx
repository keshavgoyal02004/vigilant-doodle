import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import servicesImage from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack development with modern technologies like React, Node.js, and cloud deployment.",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Mobile First"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that convert visitors into customers and enhance user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"]
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation consulting to accelerate your business growth online.",
    features: ["Market Analysis", "Tech Stack Planning", "Growth Strategy", "Performance Metrics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${servicesImage})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span> That Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end web solutions that help businesses 
            establish a powerful online presence and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;