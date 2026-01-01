import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Personalized attention for every case",
  "Transparent communication throughout",
  "Proven track record of success",
  "No fees unless we win your case",
  "Available 24/7 for emergencies",
  "Multilingual legal support",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-navy rounded-lg aspect-[4/5] overflow-hidden shadow-elegant">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <blockquote className="text-cream font-serif text-xl italic mb-4">
                  "Justice is not just about the law—it's about protecting the
                  people who put their trust in us."
                </blockquote>
                <cite className="text-gold text-sm not-italic">
                  — James Sterling, Founding Partner
                </cite>
              </div>
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg shadow-gold hidden lg:block">
              <span className="font-serif text-4xl text-navy-dark block">25+</span>
              <span className="text-navy-dark/80 text-sm">Years of Excellence</span>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6">
              Committed to Your Success
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Sterling & Associates, we understand that legal matters can be
              overwhelming. That's why we take a client-first approach, combining
              decades of legal expertise with genuine care for the people we serve.
              Our team of dedicated attorneys works tirelessly to achieve the best
              possible outcomes for our clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="navy" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
