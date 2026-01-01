import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "James Sterling",
    role: "Founding Partner",
    specialty: "Criminal Defense",
    initials: "JS",
  },
  {
    name: "Sarah Mitchell",
    role: "Senior Partner",
    specialty: "Family Law",
    initials: "SM",
  },
  {
    name: "Michael Chen",
    role: "Partner",
    specialty: "Business Law",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Associate",
    specialty: "Personal Injury",
    initials: "ER",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
            Meet Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6">
            Experienced Legal Professionals
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our attorneys bring decades of combined experience and a passion for
            justice to every case they handle.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
            >
              {/* Avatar */}
              <div className="aspect-square bg-navy flex items-center justify-center relative overflow-hidden">
                <span className="font-serif text-5xl text-cream/30 group-hover:text-gold/30 transition-colors duration-300">
                  {member.initials}
                </span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy-dark/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-navy-dark" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                  >
                    <Mail className="w-5 h-5 text-navy-dark" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
