import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Start</span> Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can transform your business with cutting-edge web solutions. 
            Get a free consultation and project estimate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gradient-secondary border-border p-8">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl mb-4">Get In Touch</CardTitle>
                <CardDescription className="text-lg">
                  Choose your preferred way to connect. I typically respond within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@websolutions.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Free Consultation</h4>
                    <p className="text-muted-foreground">We'll discuss your project requirements and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Project Proposal</h4>
                    <p className="text-muted-foreground">Detailed timeline, costs, and technical approach</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Development Start</h4>
                    <p className="text-muted-foreground">Regular updates and milestone deliveries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1 min-h-11">
                Schedule Free Consultation
              </Button>
              <ContactDialog>
                <Button variant="outline" size="lg" className="flex-1 min-h-11">
                  Ask Query
                </Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;