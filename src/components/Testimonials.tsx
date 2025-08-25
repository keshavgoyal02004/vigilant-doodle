import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "WebSolutions transformed our business with their innovative web platform. The team's expertise and dedication are unmatched. They delivered exactly what we needed and more.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GreenTech",
      content: "Working with WebSolutions was a game-changer. They delivered our mobile app on time and exceeded all expectations. The quality and attention to detail is outstanding.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, FashionCo",
      content: "The e-commerce solution they built for us increased our online sales by 60%. Outstanding results and exceptional support throughout the entire process.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, FinTech Solutions",
      content: "Their AI-powered dashboard gave us insights we never had before. The technical expertise is world-class and the results speak for themselves.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager, HealthTech",
      content: "WebSolutions built a comprehensive health monitoring app that our users love. The user experience is intuitive and the performance is exceptional.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Operations Director, LogisticsCo",
      content: "The logistics management system they developed streamlined our entire operation. We've seen a 40% improvement in efficiency and cost savings.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
            <Quote className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us and the results we've delivered.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm h-full">
                    <CardContent className="p-8">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-primary/30 mb-3" />
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
          
          {/* Mobile Dots Indicator */}
          <div className="flex justify-center mt-8 md:hidden">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted mx-1 transition-colors duration-200"
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
