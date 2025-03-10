import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Info, MessageSquare, Users, LogIn, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
      <div 
        className={`flex items-center justify-between w-full max-w-4xl rounded-full px-4 transition-all duration-300 backdrop-blur-md ${
          isScrolled 
            ? "bg-white/90 dark:bg-slate-900/90 shadow-lg py-2" 
            : "bg-white/70 dark:bg-slate-900/70 py-2"
        }`}
      >
        <Link to="/" className="flex items-center z-10 group">
          <GraduationCap className="h-6 w-6 text-edforma-teal dark:text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
          <span className="ml-2 font-bold text-edforma-black dark:text-white text-lg font-mono">
            EDFORMA
          </span>
        </Link>

        <div className="flex items-center space-x-2 z-10">
          <ThemeToggle />
          
          <Link to="/login">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full transition-all duration-300 hover:bg-edforma-teal/10 dark:hover:bg-cyan-800/30 group"
            >
              <LogIn className="h-4 w-4 text-edforma-slate dark:text-slate-300 transition-all duration-300 group-hover:scale-110" />
              <span className="sr-only">Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) => (
  <Link to={to}>
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-8 w-8 rounded-full transition-all duration-300 hover:bg-edforma-teal/10 dark:hover:bg-cyan-800/30 group relative"
    >
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <span className="sr-only">{label}</span>
      <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </Button>
  </Link>
);

const MobileNavItem = ({ 
  icon, 
  label, 
  to, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  to: string; 
  onClick: () => void;
}) => (
  <Link to={to} onClick={onClick} className="flex flex-col items-center space-y-2 group w-full text-center">
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full h-12 w-12 group-hover:bg-edforma-teal/10 dark:group-hover:bg-cyan-800/30"
    >
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-edforma-teal dark:group-hover:text-cyan-400">
        {icon}
      </div>
    </Button>
    <span className="text-base font-medium text-edforma-black dark:text-white group-hover:text-edforma-teal dark:group-hover:text-cyan-400">
      {label}
    </span>
  </Link>
);
