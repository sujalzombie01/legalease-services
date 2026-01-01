import { Scale, FileText, Users, Home, Briefcase, Shield } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Criminal Defense",
    description:
      "Aggressive defense strategies for felonies, misdemeanors, and white-collar crimes. Protecting your freedom is our priority.",
  },
  {
    icon: FileText,
    title: "Personal Injury",
    description:
      "Comprehensive representation for accident victims. We fight to secure maximum compensation for your injuries.",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Compassionate guidance through divorce, custody disputes, and adoption proceedings with your family's best interests at heart.",
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description:
      "Expert assistance with property transactions, disputes, and commercial real estate matters.",
  },
  {
    icon: Briefcase,
    title: "Business Law",
    description:
      "Strategic counsel for corporations, startups, and entrepreneurs on contracts, compliance, and disputes.",
  },
  {
    icon: Shield,
    title: "Estate Planning",
    description:
      "Protect your legacy with wills, trusts, and comprehensive estate planning tailored to your needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6">
            Our Practice Areas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide comprehensive legal services across multiple practice areas,
            ensuring expert representation no matter your legal needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-gold/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-navy/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
