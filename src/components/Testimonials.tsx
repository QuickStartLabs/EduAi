
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Computer Science Student",
    content: "EdForma transformed the way I study! It's like having a personal AI tutor 24/7. The personalized learning paths have helped me improve my grades significantly.",
    rating: 5,
  },
  {
    name: "Sarah Kim",
    role: "Engineering Student",
    content: "I was struggling with complex engineering concepts, but EdForma's AI tutoring made everything clear. The 24/7 availability is a game-changer!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Data Science Student",
    content: "The instant doubt-solving feature is incredible. No more waiting for office hours or searching through countless forums. EdForma gives me answers right away!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.1),transparent_70%)]" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edforma-black mb-4">
            What Our Students Say
          </h2>
          <p className="text-edforma-slate max-w-2xl mx-auto">
            Join thousands of KTU students who are already experiencing the future of learning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-edforma-slate mb-4">{testimonial.content}</p>
              <div className="border-t pt-4 mt-4">
                <p className="font-semibold text-edforma-black">{testimonial.name}</p>
                <p className="text-sm text-edforma-slate">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
