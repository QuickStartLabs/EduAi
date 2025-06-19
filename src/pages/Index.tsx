import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import Carousel from "../Carousel";
import { GraduationCap, Home, Info, LogIn, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { useState, useEffect } from "react";
import { Facebook, Github, Instagram, Twitter, ArrowUp } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, Brain, Zap, Lightbulb, Pencil, CheckCircle2, Star } from "lucide-react";
import { Clock, Target } from "lucide-react";
import { toast } from "sonner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import CardsKit from "@/components/ui/cards";
const testimonials = [
  {
    name: "Adity Gupta",
    role: "Computer Science Student",
    content: "Eduai transformed my study routine with personalized AI tutoring, boosting my grades significantly.",
    rating: 5,
  },
  {
    name: "Vyom anna",
    role: "Engineering Student",
    content: "Complex engineering concepts are now crystal clear thanks to Eduai's 24/7 AI support.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Data Science Student",
    content: "Instant doubt-solving has saved me hours. Eduai is a game-changer for learning efficiency!",
    rating: 5,
  },
];const steps = [
  {
    icon: Pencil,
    title: "Sign Up",
    description: "Create your account and select your subjects",
  },
  {
    icon: Target,
    title: "Get Your Plan",
    description: "Receive a personalized AI-driven study plan",
  },
  {
    icon: Zap,
    title: "Start Learning",
    description: "Access interactive materials and AI assistance",
  },
  {
    icon: CheckCircle2,
    title: "Track Progress",
    description: "Monitor your improvement and learning outcomes",
  },
];const features = [
  {
    icon: Brain,
    title: "AI-Powered Tutors",
    description: "Instant, adaptive help tailored to your learning style",
  },
  {
    icon: Target,
    title: "Personalized Study Plans",
    description: "Custom paths designed for your goals and pace",
  },
  {
    icon: Lightbulb,
    title: "Instant Doubt-Solving",
    description: "Immediate answers to your questions, anytime",
  },
  {
    icon: Clock,
    title: "24/7 Accessibility",
    description: "Learn at your own pace with round-the-clock access",
  },
];export const Index = () => {
   let cards = [
    {
      key: uuidv4(),
      content: (
        <CardsKit.Cards className="group relative overflow-hidden bg-transparent shadow-none border-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img 
              src="https://wesoftyou.com/wp-content/uploads/2024/08/ai-artificial-intelligence-search-engine-600nw-2304697097.webp" 
              alt="AI Learning" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">AI-Powered Learning</h3>
                <p className="text-sm opacity-90">Personalized education experiences tailored to your learning style</p>
              </div>
            </div>
          </div>
        </CardsKit.Cards>
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardsKit.Cards className="group relative overflow-hidden bg-transparent shadow-none border-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img 
              src="https://www.diamandis.com/hubfs/featured-img-4.jpg" 
              alt="Future Technology" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">Future of Education</h3>
                <p className="text-sm opacity-90">Revolutionary technology transforming how we learn and grow</p>
              </div>
            </div>
          </div>
        </CardsKit.Cards>
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardsKit.Cards className="group relative overflow-hidden bg-transparent shadow-none border-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img 
              src="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" 
              alt="Interactive Learning" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
                <p className="text-sm opacity-90">Engage with dynamic content and real-time feedback</p>
              </div>
            </div>
          </div>
        </CardsKit.Cards>
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardsKit.Cards className="group relative overflow-hidden bg-transparent shadow-none border-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img 
              src="https://siliconafrica.org/wp-content/uploads/2024/01/images-12.jpeg" 
              alt="Smart Solutions" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">Smart Solutions</h3>
                <p className="text-sm opacity-90">Intelligent algorithms that adapt to your progress</p>
              </div>
            </div>
          </div>
        </CardsKit.Cards>
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardsKit.Cards className="group relative overflow-hidden bg-transparent shadow-none border-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img 
  src="https://steamcube.in/static/media/Learning-amico.1a0928f578b7debf87a9.png"
alt="Innovation" 
              className="w-full h-fit-content object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">Innovation Hub</h3>
                <p className="text-sm opacity-90">Cutting-edge technology driving educational excellence</p>
              </div>
            </div>
          </div>
        </CardsKit.Cards>
      )
    }
  ];
  const [isVisibleTopButton, setIsVisibleTopButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expectations: "",
  });
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);
  useEffect(() => {
    const checkVisibility = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      setIsVisibleTopButton(rect.top <= windowHeight - 100);
    };

window.addEventListener("scroll", checkVisibility);
checkVisibility();
return () => window.removeEventListener("scroll", checkVisibility);

  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

try {
  const response = await fetch("https://renovatio-lji.onrender.com/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  if (response.ok) {
    toast.success("Thank you for joining the waitlist!", {
      description: "We will update you",
    });
    setFormData({ name: "", email: "", expectations: "" });
  } else {
    toast.error(`Error: ${result.message || "Something went wrong."}`);
  }
} catch (error) {
  toast.error("Server error. Please try again later.");
} finally {
  setLoading(false);
}

  };  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById("contact");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };  return (
    <div className="min-h-screen  text-edforma-light relative overflow-hidden font-sans bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Render Particles only after init is true */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { 
                onHover: { enable: true, mode: "bubble" }, 
                onClick: { enable: true, mode: "push" } 
              },
              modes: { 
                bubble: { distance: 200, size: 4, duration: 2, opacity: 0.8 }, 
                push: { quantity: 2 } 
              },
            },
            particles: {
              color: { value: "#14B8A6" },
              links: { 
                color: "#14B8A6", 
                distance: 120, 
                enable: true, 
                opacity: 0.4, 
                width: 0.8 
              },
              move: { 
                direction: "none", 
                enable: true, 
                outModes: "out", 
                random: false, 
                speed: 0.5 
              },
              number: { density: { enable: true }, value: 60 },
              opacity: { value: { min: 0.2, max: 0.5 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
          }}
          className="absolute inset-0 z-0 opacity-50"
        />
      )}

  <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
     <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { 
                onHover: { enable: true, mode: "bubble" }, 
                onClick: { enable: true, mode: "push" } 
              },
              modes: { 
                bubble: { distance: 200, size: 4, duration: 2, opacity: 0.8 }, 
                push: { quantity: 2 } 
              },
            },
            particles: {
              color: { value: "#14B8A6" },
              links: { 
                color: "#14B8A6", 
                distance: 120, 
                enable: true, 
                opacity: 0.4, 
                width: 0.8 
              },
              move: { 
                direction: "none", 
                enable: true, 
                outModes: "out", 
                random: false, 
                speed: 0.5 
              },
              number: { density: { enable: true }, value: 60 },
              opacity: { value: { min: 0.2, max: 0.5 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
          }}
          className="absolute inset-0 z-0 opacity-50"
        />
    <div
      className={`flex items-center justify-between w-full max-w-7xl rounded-full px-6 transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? "bg-edforma-dark/95 shadow-xl" : "bg-edforma-dark/80"
      }`}
    >
      <Link to="/" className="flex items-center z-10 group">
        <GraduationCap className="h-7 w-7 text-edforma-teal transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        <span className="ml-3 font-bold text-edforma-light text-2xl font-heading tracking-wide">
          EduAi
        </span>
      </Link>
      <div className="flex items-center space-x-4 z-10">
        <div className="hidden lg:flex space-x-3">
          <NavItem icon={<Home className="h-5 w-5" />} label="Home" to="/" />
          <NavItem icon={<Info className="h-5 w-5" />} label="About" to="/about" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full text-edforma-light hover:bg-edforma-teal/30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        <ThemeToggle />
        <Link to="/login">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-edforma-light hover:bg-edforma-teal/30 group relative"
          >
            <LogIn className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
            <span className="sr-only">Login</span>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-edforma-dark text-edforma-light px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Login
            </span>
          </Button>
        </Link>
      </div>
    </div>
  </header>

  {isMobileMenuOpen && (
    <div className="fixed inset-0 bg-edforma-dark/95 z-50 flex flex-col items-center justify-center space-y-10 backdrop-blur-sm">
      <MobileNavItem icon={<Home className="h-7 w-7" />} label="Home" to="/" onClick={() => setIsMobileMenuOpen(false)} />
   {/*<MobileNavItem icon={<Info className="h-7 w-7" />} label="About" to="#about" onClick={handleAboutClick} />*/}
      <MobileNavItem icon={<ArrowRight className="h-7 w-7" />} label="Join Waitlist" to="#contact" onClick={handleJoinWaitlist} />
    </div>
  )}

  <main className="relative z-10">
    <section className="pt-36 md:pt-48 pb-24 px-4 bg-gradient-to-b from-edforma-dark/90 to-edforma-dark">
      <div className="container mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center text-center">
          <div
            className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-edforma-teal/20 text-edforma-teal font-medium mb-8 transition-all duration-700 ease-out transform`}
          >
            <Sparkles className="h-5 w-5" />
            <span>Transforming Education with AI</span>
          </div>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-edforma-light mb-4 font-heading tracking-tight transition-all duration-700 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-edforma-light to-edforma-teal">
              Revolutionizing Education
            </span>
          </h1>
          <h2
            className={`text-2xl md:text-4xl font-semibold text-edforma-teal mb-6 transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The Future of Learning
          </h2>
          <p
            className={`text-lg md:text-xl text-edforma-slate max-w-3xl mx-auto mb-10 transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Eduai empowers KTU students with AI-driven, personalized learning experiences available 24/7.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-edforma-teal to-cyan-500 hover:from-edforma-teal/90 hover:to-cyan-500/90 text-white h-14 px-10 rounded-full group transform hover:scale-105 transition-all duration-300"
              onClick={handleJoinWaitlist}
            >
              <span className="text-lg hover:animate-ping">Join the Waitlist</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 border-edforma-slate/40 text-edforma-light hover:bg-edforma-teal/20 hover:text-edforma-light rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg text-black hover:animate-bounce">Learn More</span>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"></div>
        </div>
      </div>
    </section>

    {/* Divider */}

    <section id="about" className="py-24 px-4 bg-edforma-dark/95">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-edforma-light mb-4 font-heading tracking-tight animate-fade-in-up">
            Why Choose EduAi?
          </h2>
          <p className="text-edforma-slate max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Redefining education with cutting-edge AI to deliver personalized learning tailored to you.
          </p>
        </div>
        <div className="font-sans flex animate-fade-in-up animation-delay-400">
          <Carousel
            cards={cards}
            height="500px"
            width="80%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </div>
    </section>


    <section id="features" className="py-24 px-4 bg-edforma-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-edforma-light mb-4 font-heading tracking-tight animate-fade-in-up">
            Powerful Features
          </h2>
          <p className="text-edforma-slate max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Discover what makes EduAi the future of education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-6 bg-edforma-dark/60 backdrop-blur-md border border-edforma-slate/30 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-edforma-teal/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-4 bg-edforma-teal/20 rounded-xl inline-block mb-4 group-hover:bg-edforma-teal/30 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-edforma-teal transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <h3 className="text-lg font-semibold text-edforma-light mb-3 group-hover:text-edforma-teal transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-edforma-slate leading-relaxed group-hover:text-edforma-light transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section id="how-it-works" className="hidden md:block py-24 px-4 bg-edforma-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-edforma-light mb-4 font-heading tracking-tight">
            How It Works
          </h2>
          <p className="text-edforma-slate max-w-2xl mx-auto text-lg">
            Start your learning journey with EduAi in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-14 h-0.5 w-full bg-edforma-slate/20" />
              )}
              <div className="relative z-10 flex items-center justify-center h-20 w-20 rounded-full bg-edforma-dark/80 border-2 border-edforma-teal/30 group-hover:border-edforma-teal group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                <step.icon className="h-8 w-8 text-edforma-teal" />
              </div>
              <h3 className="text-lg font-semibold text-edforma-light mt-6 mb-2 group-hover:text-edforma-teal transition-colors duration-300">{step.title}</h3>
              <p className="text-edforma-slate leading-relaxed group-hover:text-edforma-light transition-colors duration-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-edforma-dark to-edforma-dark/90">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-edforma-light mb-4 font-heading tracking-tight animate-fade-in-up">
            What Our Students Say
          </h2>
          <p className="text-edforma-slate max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Hear from KTU students thriving with EduAi AI-powered learning
          </p>
        </div>
        <Slider {...carouselSettings} className="relative animate-fade-in-up animation-delay-400">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <CardsKit.Cards className="p-8 bg-edforma-dark/60 backdrop-blur-md border border-edforma-slate/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group focus-within:ring-4 focus-within:ring-edforma-teal/30">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 transform transition-transform duration-300 group-hover:scale-110" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-edforma-slate mb-6 leading-relaxed group-hover:text-edforma-light transition-colors duration-300">{testimonial.content}</p>
                <div className="border-t border-edforma-slate/20 pt-4">
                  <p className="font-semibold text-edforma-light group-hover:text-edforma-teal transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-sm text-edforma-slate group-hover:text-edforma-light transition-colors duration-300">{testimonial.role}</p>
                </div>
              </CardsKit.Cards>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    <section id="contact" className="py-24 px-4 bg-edforma-dark/95">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-edforma-light mb-4 font-heading tracking-tight">
            Join the Revolution
          </h2>
          <p className="text-edforma-slate text-lg max-w-xl mx-auto">
            Be the first to experience the future of AI-powered education
          </p>
        </div>
        <CardsKit.Cards className="p-8 bg-edforma-dark/60 backdrop-blur-md border border-edforma-slate/30 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="name"
              placeholder="Your Name"
              className="h-12 bg-edforma-dark/80 text-edforma-light border-edforma-slate/40 focus:border-edforma-teal rounded-lg"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              className="h-12 bg-edforma-dark/80 text-edforma-light border-edforma-slate/40 focus:border-edforma-teal rounded-lg"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Textarea
              name="expectations"
              placeholder="What do you expect from AI-powered education?"
              className="min-h-[140px] bg-edforma-dark/80 text-edforma-light border-edforma-slate/40 focus:border-edforma-teal rounded-lg"
              required
              value={formData.expectations}
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-edforma-teal to-cyan-500 hover:from-edforma-teal/90 hover:to-cyan-500/90 text-white rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Joining..." : "Join the Waitlist"}
            </Button>
          </form>
        </CardsKit.Cards>
      </div>
    </section>
  </main>

  <footer id="footer" className="relative bg-edforma-dark/90 py-20">
    <div className="container mx-auto px-4 max-w-7xl relative z-10">
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-edforma-light to-edforma-teal mb-4 font-heading tracking-wide transition-transform duration-300 hover:scale-105">
          EDUAI
        </h2>
        <p className="text-edforma-slate text-center max-w-md text-lg leading-relaxed">
          Empowering the next generation with AI-driven learning experiences.
        </p>
      </div>
      <div className="flex justify-center mb-12">
        All rights are reserved by the @EDUAI
      </div>
      <div
        className={`flex justify-center transition-all duration-1000 ease-out ${
          isVisibleTopButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center h-12 w-12 rounded-full bg-edforma-dark/80 text-edforma-light hover:bg-edforma-teal hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
          <span className="sr-only">Scroll to top</span>
        </button>
      </div>
    </div>
  </footer>
</div>

  );
};const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="flex items-center justify-center h-12 w-12 rounded-full bg-edforma-dark/80 text-edforma-light hover:bg-edforma-teal hover:text-white transition-all duration-300 transform hover:scale-110"
    aria-label={label}  >

{icon}

  </a>
);

const NavItem = ({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) => (
  <Link to={to}>
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-full text-edforma-light hover:bg-edforma-teal/30 group relative"
    >
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-edforma-teal">
        {icon}
      </div>
      <span className="sr-only">{label}</span>
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-edforma-dark text-edforma-light px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </Button>
  </Link>
);const MobileNavItem = ({
  icon,
  label,
  to,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  onClick: () => void;
}) => (
  <Link to={to} onClick={onClick} className="flex flex-col items-center space-y-3 group w-full text-center">
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full h-14 w-14 group-hover:bg-edforma-teal/30"
    >
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-edforma-teal">
        {icon}
      </div>
    </Button>
    <span className="text-lg font-medium text-edforma-light group-hover:text-edforma-teal">
      {label}
    </span>
  </Link>
);const IllustrationCard = ({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 600 + delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <CardsKit.Cards
      className={`p-6 bg-edforma-dark/60 backdrop-blur-md border border-edforma-slate/30 hover:shadow-2xl transition-all duration-300 ${isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
    >
      <div className="p-4 bg-edforma-teal/20 rounded-xl inline-block mb-4 group-hover:bg-edforma-teal/30 transition-colors duration-300">
        <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:text-edforma-teal">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-edforma-light mb-3">{title}</h3>
      <p className="text-edforma-slate leading-relaxed">{description}</p>
    </CardsKit.Cards>
  );
};
export default Index;