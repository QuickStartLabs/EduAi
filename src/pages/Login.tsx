import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { GraduationCap, ArrowLeft, LogIn, Eye, EyeOff, Mail, Lock, Sparkles, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [init, setInit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Demo",
        description: "This is a simulated login. In a real app, you would be redirected to your dashboard.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Particles Background */}
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
      <header className="relative z-10 p-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <span className="text-white/80 group-hover:text-white transition-colors">Back to Home</span>
        </Link>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className={`text-center mb-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <Link to="/" className="inline-flex items-center justify-center mb-6 group">
              <div className="relative">
                <GraduationCap className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-3xl font-bold ml-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                EduAi
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/70 text-lg">Sign in to continue your learning journey</p>
          </div>

          {/* Login Form */}
          <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-cyan-400 transition-colors duration-300" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-white/90">
                    Password
                  </label>
                  <button 
                    type="button"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-cyan-400 transition-colors duration-300" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <LogIn className="h-5 w-5 mr-2" />
                    <span>Sign in to EduAi</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-white/20"></div>
              <span className="px-4 text-white/50 text-sm">or</span>
              <div className="flex-1 border-t border-white/20"></div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-white/70">
                Don't have an account?{" "}
                <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 hover:underline">
                  Create one now
                </button>
              </p>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
              <Brain className="h-8 w-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-medium text-sm">AI-Powered</h3>
              <p className="text-white/60 text-xs">Smart learning assistance</p>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
              <Zap className="h-8 w-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-medium text-sm">24/7 Access</h3>
              <p className="text-white/60 text-xs">Learn anytime, anywhere</p>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
              <GraduationCap className="h-8 w-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-medium text-sm">Personalized</h3>
              <p className="text-white/60 text-xs">Tailored to your needs</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
