import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Brain, Zap, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleJoinWaitlist = () => {
    // Smooth scroll to waitlist form
    const waitlistSection = document.getElementById("contact");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 md:pt-40 pb-20 px-4 bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 relative overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(8,145,178,0.15),transparent_60%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edforma-teal/10 text-edforma-teal dark:bg-cyan-500/10 dark:text-cyan-400 text-sm font-medium mb-6 transition-all duration-700 ease-out relative z-20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="absolute inset-0 rounded-full animate-pulse">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-edforma-teal/30 via-cyan-500/30 to-blue-500/30 dark:from-cyan-400/30 dark:via-blue-400/30 dark:to-cyan-400/30 blur-xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-edforma-teal/20 via-cyan-500/20 to-blue-500/20 dark:from-cyan-400/20 dark:via-blue-400/20 dark:to-cyan-400/20 blur-lg animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>
            <Sparkles className="h-4 w-4 relative z-10" />
            <span className="relative z-10">Transforming Education with AI</span>
          </div>
          
          {/* Main heading with glow effect */}
          <div className="relative mb-6">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-edforma-teal/20 via-cyan-500/20 to-blue-500/20 dark:from-cyan-600/20 dark:via-cyan-400/20 dark:to-blue-400/20 rounded-full opacity-70"></div>
            <h1 
              className={`text-3xl md:text-5xl font-bold text-edforma-black dark:text-white mb-4 transition-all duration-700 delay-100 ease-out relative z-10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-edforma-black to-edforma-teal dark:from-white dark:to-cyan-400">
                Revolutionizing Education with AI
              </span>
            </h1>
            <h2 
              className={`text-2xl md:text-4xl font-bold transition-all duration-700 delay-200 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-edforma-teal to-cyan-500 dark:from-cyan-400 dark:to-blue-400">
                The Future of Learning
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <p 
            className={`text-base md:text-lg text-edforma-slate dark:text-slate-400 mb-8 max-w-2xl transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Traditional learning is outdated. EdForma brings AI-powered 24/7 personalized learning to help KTU students succeed.
          </p>
          
          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-400 ease-out relative z-30 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-edforma-teal to-cyan-500 dark:from-cyan-600 dark:to-blue-600 hover:opacity-90 text-white h-12 px-8 rounded-full group relative z-30"
              onClick={handleJoinWaitlist}
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 border-edforma-slate/30 text-edforma-slate hover:text-edforma-black hover:bg-edforma-slate/5 dark:border-slate-700 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50 rounded-full relative z-30"
            >
              Learn More
            </Button>
          </div>
          
          {/* AI Learning Illustrations */}
          <div 
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl transition-all duration-700 delay-500 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <IllustrationCard 
              icon={<Brain className="h-10 w-10 text-edforma-teal dark:text-cyan-400" />}
              title="AI-Powered Learning"
              description="Adaptive learning paths that evolve with your progress"
              delay={0}
            />
            <IllustrationCard 
              icon={<Lightbulb className="h-10 w-10 text-edforma-teal dark:text-cyan-400" />}
              title="Personalized Insights"
              description="Custom study recommendations tailored to your learning style"
              delay={200}
            />
            <IllustrationCard 
              icon={<Zap className="h-10 w-10 text-edforma-teal dark:text-cyan-400" />}
              title="24/7 Assistance"
              description="Get answers and clarifications anytime you need them"
              delay={400}
            />
          </div>
          
          {/* Animated circles with enhanced glow */}
          <div 
            className={`mt-12 relative flex items-center justify-center transition-all duration-700 delay-700 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute w-48 h-48 rounded-full border border-edforma-teal/20 dark:border-cyan-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-edforma-teal/20 before:to-cyan-500/20 before:blur-xl before:animate-pulse"></div>
            <div className="absolute w-36 h-36 rounded-full border border-edforma-teal/30 dark:border-cyan-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-edforma-teal/30 before:to-cyan-500/30 before:blur-lg before:animate-pulse"></div>
            <div className="absolute w-24 h-24 rounded-full border border-edforma-teal/40 dark:border-cyan-500/40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_2s] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-edforma-teal/40 before:to-cyan-500/40 before:blur-md before:animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-slate-950 dark:to-slate-950 z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Illustration card component for personalized AI learning features
const IllustrationCard = ({ 
  icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 600 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-800 group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg inline-block mb-4 group-hover:bg-edforma-teal/10 dark:group-hover:bg-cyan-900/30 transition-colors duration-300">
        <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-edforma-black dark:text-white mb-2">{title}</h3>
      <p className="text-edforma-slate dark:text-slate-400 text-sm">{description}</p>
    </div>
  );
};
