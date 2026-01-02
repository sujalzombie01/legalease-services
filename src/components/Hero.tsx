import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/50 via-transparent to-navy-dark/30" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium tracking-wide">
                Your Complete Tax Compliance Partner
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-8 text-balance">
              Simplifying{" "}
              <span className="text-gradient-gold">Indian Taxation</span>{" "}
              <br className="hidden md:block" />
              For You
            </h1>
            
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light">
              Navigating the intricate landscape of Indian taxation can be daunting. 
              At Hariq & Co, we simplify this complexity with expert-led, 
              tailored services—so you stay compliant and focused on what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Button variant="hero" size="xl" className="group shadow-gold">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="backdrop-blur-sm">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 animate-fade-up" 
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Shield, value: "5000+", label: "ITRs Filed Successfully" },
              { icon: Award, value: "15+", label: "Years of Excellence" },
              { icon: Users, value: "2000+", label: "Satisfied Clients" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="flex items-center gap-5 p-5 rounded-2xl bg-cream/5 backdrop-blur-sm border border-cream/10 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <span className="block font-serif text-4xl text-cream font-bold">{stat.value}</span>
                  <span className="text-cream/50 text-sm font-medium">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#services" className="flex flex-col items-center gap-2 text-cream/40 hover:text-cream/60 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;