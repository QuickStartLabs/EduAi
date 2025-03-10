
import { Brain, Clock, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-powered Tutors",
    description: "Get instant help from our advanced AI tutors that adapt to your learning style",
  },
  {
    icon: Target,
    title: "Personalized Study Plans",
    description: "Custom learning paths designed specifically for your goals and pace",
  },
  {
    icon: Lightbulb,
    title: "Instant Doubt-Solving",
    description: "Get immediate answers to your questions, any time of day",
  },
  {
    icon: Clock,
    title: "24/7 Accessibility",
    description: "Learn at your own pace with round-the-clock access to all resources",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edforma-black mb-4">Why Choose EdForma?</h2>
          <p className="text-edforma-slate max-w-2xl mx-auto">
            Education has remained unchanged for centuries. We're here to change that with AI-driven personalized learning that adapts to you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 rounded-lg bg-edforma-teal/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-edforma-teal" />
              </div>
              <h3 className="text-xl font-semibold text-edforma-black mb-2">{feature.title}</h3>
              <p className="text-edforma-slate">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
