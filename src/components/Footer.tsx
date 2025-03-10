import { Facebook, Github, Instagram, Twitter, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const checkVisibility = () => {
      const footer = document.getElementById('footer');
      if (!footer) return;
      
      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // When footer is 100px into the viewport, set it to visible
      if (rect.top <= windowHeight - 100) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', checkVisibility);
    // Initial check
    checkVisibility();
    
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="relative bg-white dark:bg-slate-950 overflow-hidden">
      {/* Top decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent dark:from-slate-950 pointer-events-none z-10"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Main content */}
      <div 
        className={`container mx-auto px-4 py-16 relative z-20 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Logo and large brand name */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-edforma-teal/30 via-cyan-500/30 to-blue-500/30 dark:from-cyan-400/30 dark:via-blue-400/30 dark:to-cyan-400/30 rounded-3xl opacity-70 animate-pulse"></div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-edforma-black via-edforma-teal to-cyan-500 dark:from-white dark:via-cyan-400 dark:to-blue-400 mb-6 font-['Audiowide',_sans-serif] relative z-10 transform hover:scale-105 transition-transform duration-300">
              EDFORMA
            </h2>
          </div>
          <p className="text-edforma-slate dark:text-slate-400 text-center max-w-md text-lg">
            Revolutionizing education through AI-powered learning experiences.
          </p>
        </div>
        
        {/* Social media icons in center - smaller on mobile */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 md:space-x-6">
            <SocialLink href="#" icon={<Twitter className="h-4 w-4 md:h-5 md:w-5" />} label="Twitter" />
            <SocialLink href="#" icon={<Facebook className="h-4 w-4 md:h-5 md:w-5" />} label="Facebook" />
            <SocialLink href="#" icon={<Instagram className="h-4 w-4 md:h-5 md:w-5" />} label="Instagram" />
            <SocialLink href="#" icon={<Github className="h-4 w-4 md:h-5 md:w-5" />} label="Github" />
          </div>
        </div>
        
        {/* Scroll to top button - removed copyright */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 text-edforma-slate dark:text-slate-400 hover:bg-edforma-teal hover:text-white dark:hover:bg-cyan-600 transition-colors group"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            <span className="sr-only">Scroll to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

// Social media link component - smaller on mobile
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-100 dark:bg-slate-800 text-edforma-slate dark:text-slate-400 hover:bg-edforma-teal hover:text-white dark:hover:bg-cyan-600 transition-colors transform hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);
