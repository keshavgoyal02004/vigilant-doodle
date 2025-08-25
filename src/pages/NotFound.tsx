import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground transition-colors duration-300">
      <div className="text-center p-6 rounded-2xl shadow-[var(--shadow-elegant)] bg-card">
        <h1 className="text-7xl font-extrabold mb-4 text-primary drop-shadow-[0_0_20px_hsl(var(--primary-glow))]">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Oops! The page <span className="text-destructive">{location.pathname}</span> doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(220,70%,55%)] text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
        >
          <ArrowLeft className="h-4 w-4 mr-2 inline-block" /> Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
