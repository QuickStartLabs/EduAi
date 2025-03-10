import { CheckCircle2, Pencil, Target, Zap } from "lucide-react";

const steps = [
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
];

export const HowItWorks = () => {
  return (
    <section className="hidden md:block py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edforma-black mb-4">How It Works</h2>
          <p className="text-edforma-slate max-w-2xl mx-auto">
            Get started with EdForma in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-12 h-0.5 w-full bg-slate-200" />
              )}
              <div className="relative z-10 flex items-center justify-center h-24 w-24 rounded-full bg-white border-2 border-edforma-teal/20 group-hover:border-edforma-teal transition-colors duration-300">
                <step.icon className="h-10 w-10 text-edforma-teal" />
              </div>
              <h3 className="text-xl font-semibold text-edforma-black mt-6 mb-2">{step.title}</h3>
              <p className="text-edforma-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
