import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Hariq Ahmed",
    role: "Founder & Principal",
    specialty: "Tax Strategy & Compliance",
    initials: "HA",
  },
  {
    name: "Priya Sharma",
    role: "Senior Consultant",
    specialty: "GST & Indirect Taxes",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Chartered Accountant",
    specialty: "Income Tax & ITR",
    initials: "RK",
  },
  {
    name: "Ananya Patel",
    role: "Tax Associate",
    specialty: "TDS & Compliance",
    initials: "AP",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-navy/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-gold uppercase tracking-elegant text-sm font-semibold mb-4">
            Meet Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Expert Tax Professionals
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our team of Chartered Accountants and tax experts brings decades of 
            combined experience in Indian taxation and compliance.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-sm-custom hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
                {/* Avatar */}
                <div className="aspect-square bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative overflow-hidden">
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                  
                  <span className="font-serif text-6xl text-cream/20 group-hover:text-gold/30 transition-colors duration-500 group-hover:scale-110 transform">
                    {member.initials}
                  </span>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy-dark/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href="#"
                      className="w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-navy-dark" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors transform hover:scale-110"
                    >
                      <Mail className="w-5 h-5 text-navy-dark" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs">{member.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;