import { 
  Receipt, 
  TrendingUp, 
  Percent, 
  FileText, 
  Calculator, 
  Building2, 
  CreditCard, 
  CalendarClock, 
  FileSpreadsheet, 
  Landmark,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Receipt,
    title: "Income Tax",
    description:
      "Complete ITR filing with accurate declarations, deductions (80C, 80D), and maximum tax savings.",
  },
  {
    icon: TrendingUp,
    title: "Capital Gains",
    description:
      "Expert computation of capital gains with exemptions under Section 54 and 54F for optimal efficiency.",
  },
  {
    icon: Percent,
    title: "Dividend Tax",
    description:
      "Navigate TDS rules and new tax regime implications on dividends with complete compliance.",
  },
  {
    icon: Building2,
    title: "GST Compliance",
    description:
      "End-to-end GST registration, returns, input tax credits, and audit-ready documentation.",
  },
  {
    icon: CreditCard,
    title: "TDS Management",
    description:
      "Accurate TDS deductions, timely payments, and record-keeping to avoid penalties.",
  },
  {
    icon: FileSpreadsheet,
    title: "TDS Returns",
    description:
      "Quarterly filing of Form 24Q, 26Q, 27Q through TRACES with data validation.",
  },
  {
    icon: FileText,
    title: "ITR-3 & ITR-4",
    description:
      "Correct form selection for business, profession, or presumptive tax with full documentation.",
  },
  {
    icon: CalendarClock,
    title: "Advance Tax",
    description:
      "Calculated installments to avoid interest under Sections 234B and 234C.",
  },
  {
    icon: Calculator,
    title: "GST Returns",
    description:
      "GSTR-1 to GSTR-9 management across multiple states with Input Tax Credit optimization.",
  },
  {
    icon: Landmark,
    title: "Professional Tax",
    description:
      "State-wise registrations, deductions, and returns as per Maharashtra, Karnataka norms.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-gold uppercase tracking-elegant text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Comprehensive Tax Services
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            End-to-end tax compliance and advisory services for individuals, 
            professionals, and businesses across every tax category in India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-6 rounded-2xl shadow-sm-custom hover:shadow-card transition-all duration-500 border border-border/50 hover:border-gold/30 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center mb-5 group-hover:from-gold/20 group-hover:to-gold/5 transition-all duration-500">
                <service.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-500" />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-xl text-foreground mb-2 flex items-center justify-between">
                {service.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;