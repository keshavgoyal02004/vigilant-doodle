import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Testimonials from "@/components/Testimonials";
import { ArrowLeft, ExternalLink, Github, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { count } from "console";
import { Label } from "@/components/ui/label";
import { StatusLabel } from "@/components/ui/status-label";

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      rating: 5,
      testimonial: "Outstanding work! The e-commerce platform exceeded our expectations and helped increase our sales by 40%."
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "A secure mobile banking application built with React Native and Firebase. Includes biometric authentication and real-time transactions.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
      rating: 5,
      testimonial: "The team delivered a professional banking app that our users love. Highly recommended!"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics platform that provides real-time insights and predictive analytics for business intelligence.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
      rating: 5,
      testimonial: "The AI dashboard transformed how we analyze data. Incredible insights and beautiful design."
    },
    {
      id: 4,
      title: "Restaurant Management System",
      description: "A comprehensive restaurant management solution with order management, inventory tracking, and customer analytics.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      rating: 5,
      testimonial: "Streamlined our entire restaurant operations. The system is intuitive and powerful."
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A fitness app that tracks workouts, nutrition, and provides personalized training plans with progress analytics.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Firebase", "Dart", "Google Fit API"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
      rating: 5,
      testimonial: "Our users love the fitness tracking features. The app has helped thousands achieve their fitness goals."
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "A modern real estate platform with property listings, virtual tours, and advanced search capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      rating: 5,
      testimonial: "The real estate platform is a game-changer. Beautiful design and powerful search functionality."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "WebSolutions transformed our business with their innovative web platform. The team's expertise and dedication are unmatched.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GreenTech",
      content: "Working with WebSolutions was a game-changer. They delivered our mobile app on time and exceeded all expectations.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, FashionCo",
      content: "The e-commerce solution they built for us increased our online sales by 60%. Outstanding results and support!",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, FinTech Solutions",
      content: "Their AI-powered dashboard gave us insights we never had before. The technical expertise is world-class.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Apps", count: projects.filter(p => p.category === "web").length },
    { id: "mobile", label: "Mobile Apps", count: projects.filter(p => p.category === "mobile").length },
    { id: "ai", label: "AI/ML", count: projects.filter(p => p.category === "ai").length },
    { id: "devops", label: "DevOps Projects", count: projects.filter(p => p.category === "devops").length },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <div className="bg-gradient-hero pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>

            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Our Projects & Success Stories
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover how we've helped businesses transform their digital presence with innovative solutions and exceptional results.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="rounded-full"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count ? category.count : null}
                </Badge>
              </Button>
            ))}
          </div>



          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {
              filteredProjects.length === 0 ?
                <div className="text-[clamp(2.5rem,10vw,8rem)] flex items-center justify-center bg-background md:col-start-1 md:col-span-3 lg:col-start-1 lg:col-span-3">
                  {/* <StatusLabel variant="comingsoon">🚀 Coming Soon</StatusLabel> */}
                  {/* <StatusLabel variant="working">⚡ Working</StatusLabel> */}
                  <StatusLabel variant="work">⚡ Working</StatusLabel>
                </div>
                :
                filteredProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div
                        className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{project.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">
                          "{project.testimonial}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
            }
          </div>

          {/* Testimonials Section */}
          <Testimonials />

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => navigate("/")}>
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/")}>
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
};

export default Projects;
