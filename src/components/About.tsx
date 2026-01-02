import { Button } from "@/components/ui/button";
import { CheckCircle, Quote } from "lucide-react";

const features = [
  "Personalized tax planning strategies",
  "Transparent communication",
  "Proven track record of compliance",
  "Digital filing & paperless process",
  "Urgent tax matter support",
  "Expert CA & tax professionals",
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-3xl aspect-[4/5] overflow-hidden shadow-float">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              
              {/* Quote section */}
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent">
                <Quote className="w-10 h-10 text-gold/50 mb-4" />
                <blockquote className="text-cream font-serif text-2xl leading-relaxed mb-6">
                  Our mission is hassle-free compliance, personalized advisory, 
                  and digital support with clarity and confidence.
                </blockquote>
                <cite className="text-gold text-sm not-italic font-semibold tracking-wide">
                  — The Hariq & Co Team
                </cite>
              </div>
            </div>
            
            {/* Floating accent box */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-gold to-gold-dark p-8 rounded-2xl shadow-gold hidden lg:block animate-float">
              <span className="font-serif text-5xl text-navy-dark block font-bold">15+</span>
              <span className="text-navy-dark/70 text-sm font-medium">Years of Excellence</span>
            </div>

            {/* Small decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/20 rounded-2xl hidden lg:block" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-gold uppercase tracking-elegant text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Your Trusted Tax Partner
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              At Hariq & Co Legal Advisory Firm, we understand that tax matters can be 
              overwhelming. We combine decades of expertise with genuine care. Whether 
              you're an entrepreneur, salaried employee, or investor—our expert team 
              ensures you stay compliant and worry-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="navy" size="lg" className="shadow-elegant">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;