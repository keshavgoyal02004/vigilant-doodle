import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import ContactDialog from "@/components/ContactDialog";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Premium Web Solutions
            <span className="block text-foreground">for Modern Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Transform your business with cutting-edge web development, stunning UI/UX design, 
            and strategic consulting that drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={()=>{navigate('/get-started')}}>
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={()=>{navigate('/projects')}}>
              View Our Past Projects
            </Button>
            {/* <ContactDialog>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ask Query
              </Button>
            </ContactDialog> */}
          </div>
          
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center my-3">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              View Our Past Project
            </Button>
          </div> */}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;