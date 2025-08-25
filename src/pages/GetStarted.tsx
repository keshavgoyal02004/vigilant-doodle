import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Theme = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
};

const themes: Theme[] = [
  {
    id: "modern-corp",
    name: "Modern Corporate",
    description: "Clean layout for agencies and SaaS.",
    imageUrl: "/placeholder.svg",
    category: "Corporate",
  },
  {
    id: "portfolio-pro",
    name: "Portfolio Pro",
    description: "Elegant portfolio for creatives and studios.",
    imageUrl: "/placeholder.svg",
    category: "Portfolio",
  },
  {
    id: "ecom-lite",
    name: "E‑commerce Lite",
    description: "Minimal store with product focus.",
    imageUrl: "/placeholder.svg",
    category: "E‑commerce",
  },
];

const GetStarted = () => {
  const navigate = useNavigate();
  const [selectedThemeId, setSelectedThemeId] = useState<string>(themes[0].id);

  return (
    <>
    <Navbar />
    <div className="min-h-screen pt-24 container my-4 px-4 sm:px-6">
      <div className="container mx-auto px-4 sm:px-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </div>
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">Get Started</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Browse prebuilt themes and tell us about your project. We'll follow up within 24 hours.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pick a Theme</CardTitle>
              <CardDescription>Select a starting point. We'll tailor it to your brand.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    className={`text-left group rounded-lg border transition shadow-sm hover:shadow-md overflow-hidden ${selectedThemeId === theme.id ? "ring-2 ring-primary" : "border-border"}`}
                    onClick={() => setSelectedThemeId(theme.id)}
                    type="button"
                  >
                    <div className="aspect-video w-full bg-muted/50">
                      <img src={theme.imageUrl} alt={theme.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="font-semibold">{theme.name}</div>
                      <div className="text-sm text-muted-foreground">{theme.description}</div>
                      <div className="mt-2 inline-block text-xs px-2 py-1 rounded bg-accent text-foreground/80">{theme.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Tell us about your goals, scope, and timeline.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate("/projects");
                }}
              >
                <input type="hidden" name="themeId" value={selectedThemeId} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full name</Label>
                    <Input id="fullName" name="fullName" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Acme Inc." />
                  </div>
                  <div>
                    <Label htmlFor="role">Your role</Label>
                    <Input id="role" name="role" placeholder="Founder, PM, Designer..." />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Estimated budget</Label>
                    <Select name="budget">
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<2k">Under $2k</SelectItem>
                        <SelectItem value="2-5k">$2k - $5k</SelectItem>
                        <SelectItem value="5-10k">$5k - $10k</SelectItem>
                        <SelectItem value=">10k">Over $10k</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select name="timeline">
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (2-3 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (1-2 months)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectSummary">Project summary</Label>
                  <Textarea id="projectSummary" name="projectSummary" placeholder="Briefly describe your project, goals, and key pages." className="min-h-[120px]" />
                </div>

                <div>
                  <Label htmlFor="additionalNotes">Additional notes</Label>
                  <Textarea id="additionalNotes" name="additionalNotes" placeholder="Brand assets, references, integrations, etc." className="min-h-[100px]" />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button type="submit" variant="hero" className="w-full sm:w-auto">Submit Request</Button>
                  <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => navigate("/")}>Back to Home</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What's included</CardTitle>
              <CardDescription>Everything you need to launch quickly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Theme customization to your brand</li>
                <li>Responsive design and performance optimizations</li>
                <li>Basic SEO and analytics setup</li>
                <li>Deployment guidance</li>
                <li>2 weeks of post-launch support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need help deciding?</CardTitle>
              <CardDescription>We can recommend a theme based on your goals.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => navigate("/contact")}>Talk to us</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default GetStarted;


