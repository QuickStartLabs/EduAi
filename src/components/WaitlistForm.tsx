import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expectations: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://renovation-lji1.onrender.com/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          expectations: formData.expectations,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you for joining the waitlist!", {
          description: "We'll keep you updated on our progress.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          expectations: "",
        });
      } else {
        toast.error(`Error: ${result.message || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="waitlist-form" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.1),transparent_50%)]" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-edforma-black to-edforma-teal mb-4">
              Join the Revolution
            </h2>
            <p className="text-edforma-slate">
              Be among the first to experience the future of education
            </p>
          </div>
          <Card className="p-6 bg-white/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="h-12"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="h-12"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Textarea
                  name="expectations"
                  placeholder="What do you expect from AI-powered education?"
                  className="min-h-[100px]"
                  required
                  value={formData.expectations}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-edforma-teal to-cyan-500 hover:opacity-90 text-white"
                disabled={loading}
              >
                {loading ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
