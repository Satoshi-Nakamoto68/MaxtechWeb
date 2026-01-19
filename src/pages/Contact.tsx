import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll respond within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="relative overflow-hidden min-h-screen" style={{
      background: `linear-gradient(to bottom, 
        rgba(15, 23, 42, 0.98) 0%, 
        rgba(30, 41, 59, 0.98) 50%, 
        rgba(15, 23, 42, 0.98) 100%),
        linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)`,
      backdropFilter: "blur(16px)",
    }}>
      {/* Background layers with neon effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated holographic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/8 via-blue-600/8 via-purple-600/8 to-pink-600/8 animate-gradient-xy-hero opacity-50" />
        
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/12 blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px] animate-float-delayed" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-500/8 blur-[100px] animate-orb-float-hero-1" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[length:220px_220px] opacity-30" />
      </div>
      
      {/* Neon border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 via-purple-400/50 to-transparent" />
      
      <div className="section-container relative z-10 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in select-none cursor-default">
          <h1 className="font-serif text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
            Contact Us
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're here to help with any inquiries about our products, services,
            or company information. Reach out and we'll respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="group/contact-info relative rounded-[32px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-8 shadow-[0_30px_100px_rgba(56,189,248,0.3)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[32px] blur-xl opacity-0 group-hover/contact-info:opacity-100 transition-opacity duration-700" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/contact-info:opacity-100 transition-opacity duration-500 rounded-[32px]" />
              
              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-black mb-8 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {/* Registered Address */}
                  <div className="group/item flex items-start gap-4 cursor-default">
                    <div className="p-3 border border-cyan-400/30 bg-cyan-500/20 text-cyan-400 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover/item:scale-110 transition-transform duration-300 pointer-events-none">
                      <MapPin className="h-6 w-6 group-hover/item:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white select-none">Registered Office</h3>
                      <p className="text-slate-300 select-none">
                        <span className="text-slate-500 italic">Address to be updated</span>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group/item flex items-start gap-4 cursor-default">
                    <div className="p-3 border border-purple-400/30 bg-purple-500/20 text-purple-400 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover/item:scale-110 transition-transform duration-300 pointer-events-none">
                      <Mail className="h-6 w-6 group-hover/item:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white select-none">Email</h3>
                      <span className="text-slate-300 select-none">
                        <span className="text-slate-500 italic">Email to be updated</span>
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group/item flex items-start gap-4 cursor-default">
                    <div className="p-3 border border-blue-400/30 bg-blue-500/20 text-blue-400 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover/item:scale-110 transition-transform duration-300 pointer-events-none">
                      <Phone className="h-6 w-6 group-hover/item:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white select-none">Phone</h3>
                      <p className="text-slate-300 select-none">
                        <span className="text-slate-500 italic">Phone to be updated</span>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="group/item flex items-start gap-4 cursor-default">
                    <div className="p-3 border border-pink-400/30 bg-pink-500/20 text-pink-400 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] group-hover/item:scale-110 transition-transform duration-300 pointer-events-none">
                      <Clock className="h-6 w-6 group-hover/item:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white select-none">Business Hours</h3>
                      <p className="text-slate-300 select-none">
                        Monday - Friday: 9:00 AM - 6:00 PM HKT
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info Box */}
            <div className="group/company-info relative rounded-[28px] border border-purple-400/30 bg-slate-900/90 backdrop-blur-3xl p-6 shadow-[0_20px_60px_rgba(168,85,247,0.3)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[28px] blur-xl opacity-0 group-hover/company-info:opacity-100 transition-opacity duration-700" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/company-info:opacity-100 transition-opacity duration-500 rounded-[28px]" />
              
              <div className="relative z-10">
                <h3 className="font-bold mb-4 text-white bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] select-none">
                  Company Information
                </h3>
                <div className="space-y-3 text-sm select-none cursor-default">
                  <div className="rounded-2xl border border-purple-400/20 bg-slate-900/80 backdrop-blur-xl p-4">
                    <p className="text-slate-400 font-bold mb-1">Company Name:</p>
                    <p className="text-white font-bold">MAXTECH IMPORT AND EXPORT LIMITED</p>
                  </div>
                  <div className="rounded-2xl border border-purple-400/20 bg-slate-900/80 backdrop-blur-xl p-4">
                    <p className="text-slate-400 font-bold mb-1">Registration No.:</p>
                    <p className="text-slate-500 italic">To be updated</p>
                  </div>
                  <div className="rounded-2xl border border-purple-400/20 bg-slate-900/80 backdrop-blur-xl p-4">
                    <p className="text-slate-400 font-bold mb-1">Established:</p>
                    <p className="text-white font-bold">2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="group/form relative rounded-[32px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-8 shadow-[0_30px_100px_rgba(56,189,248,0.3)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[32px] blur-xl opacity-0 group-hover/form:opacity-100 transition-opacity duration-700" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 rounded-[32px]" />
              
              <div className="relative z-10">
                <h2 className="font-serif text-2xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-300 font-bold">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-2 bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-300 font-bold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2 bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-slate-300 font-bold">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="mt-2 bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300 font-bold">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-2 min-h-[150px] bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] transition-all duration-300 cursor-pointer select-none"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    <span className="relative z-10 pointer-events-none">SEND MESSAGE</span>
                  </Button>

                  <p className="text-xs text-slate-400 text-center select-none">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 animate-fade-in">
          <div className="group/map relative rounded-[32px] border border-purple-400/30 bg-slate-900/90 backdrop-blur-3xl p-8 shadow-[0_30px_100px_rgba(168,85,247,0.3)]">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[32px] blur-xl opacity-0 group-hover/map:opacity-100 transition-opacity duration-700" />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500 rounded-[32px]" />
            
            <div className="relative z-10">
              <h2 className="font-serif text-3xl font-black mb-8 text-center bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] select-none">
                Our Location
              </h2>
              <div className="aspect-video rounded-2xl overflow-hidden border border-purple-400/30 shadow-[0_20px_60px_rgba(168,85,247,0.2)]">
                <div className="w-full h-full flex items-center justify-center bg-slate-900/80 backdrop-blur-xl">
                  <p className="text-slate-400 italic select-none">
                    Map location to be updated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        @keyframes gradient-xy-hero {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(8px);
          }
          66% {
            transform: translateY(8px) translateX(-8px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(8px) translateX(-8px);
          }
          66% {
            transform: translateY(-15px) translateX(8px);
          }
        }
        @keyframes orb-float-hero-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-gradient-xy-hero {
          background-size: 200% 200%;
          animation: gradient-xy-hero 15s ease infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-orb-float-hero-1 {
          animation: orb-float-hero-1 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
