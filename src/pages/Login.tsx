
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { GraduationCap, ArrowLeft, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5 text-edforma-slate dark:text-slate-400" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center justify-center mb-6">
              <GraduationCap className="h-10 w-10 text-edforma-teal dark:text-cyan-500" />
              <span className="text-2xl font-bold ml-2 text-edforma-black dark:text-white">EdForma</span>
            </Link>
            <h1 className="text-2xl font-semibold text-edforma-black dark:text-white">Welcome Back</h1>
            <p className="text-edforma-slate dark:text-slate-400 mt-2">Sign in to continue your learning journey</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg dark:shadow-slate-900/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-edforma-slate dark:text-slate-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-edforma-slate dark:text-slate-300">
                    Password
                  </label>
                  <a href="#" className="text-sm text-edforma-teal dark:text-cyan-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-edforma-teal hover:bg-edforma-teal/90 text-white transition-colors dark:bg-cyan-600 dark:hover:bg-cyan-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <LogIn className="h-4 w-4 mr-2" />
                    <span>Sign in</span>
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-edforma-slate dark:text-slate-400">
                Don't have an account?{" "}
                <a href="#" className="text-edforma-teal dark:text-cyan-500 hover:underline font-medium">
                  Create one
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
