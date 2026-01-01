import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block text-gold uppercase tracking-[0.3em] text-sm font-medium mb-6">
              Excellence in Legal Representation
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Protecting Your Rights with{" "}
              <span className="text-gradient-gold">Unwavering Dedication</span>
            </h1>
            
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              For over 25 years, our firm has been a trusted advocate for clients
              facing complex legal challenges. We combine expertise with compassion
              to deliver exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button variant="hero" size="xl">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Our Practice Areas
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-cream/20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-4">
              <Shield className="w-10 h-10 text-gold" />
              <div>
                <span className="block font-serif text-3xl text-cream">500+</span>
                <span className="text-cream/60 text-sm">Cases Won</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="w-10 h-10 text-gold" />
              <div>
                <span className="block font-serif text-3xl text-cream">25+</span>
                <span className="text-cream/60 text-sm">Years Experience</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="w-10 h-10 text-gold" />
              <div>
                <span className="block font-serif text-3xl text-cream">1000+</span>
                <span className="text-cream/60 text-sm">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
