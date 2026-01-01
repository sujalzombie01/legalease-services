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
  Landmark 
} from "lucide-react";

const services = [
  {
    icon: Receipt,
    title: "Income Tax",
    description:
      "Whether you're salaried or freelancer, we assist in accurate income declarations, applying deductions (80C, 80D, etc.), and timely ITR filing for zero penalties and maximum savings.",
  },
  {
    icon: TrendingUp,
    title: "Capital Gains Tax",
    description:
      "Profits from real estate, shares, or other assets may attract capital gains tax. We compute accurate liabilities, apply exemptions (Section 54, 54F), and structure your gains for tax efficiency.",
  },
  {
    icon: Percent,
    title: "Dividend Tax",
    description:
      "Understanding TDS rules and tax implications on dividends is vital. We help you track income, manage deductions, and ensure proper compliance under the new tax regime.",
  },
  {
    icon: Building2,
    title: "GST Compliance",
    description:
      "From registration to monthly/quarterly returns and input tax credits—we help you stay audit-ready and compliant with GST regulations at all times.",
  },
  {
    icon: CreditCard,
    title: "TDS Management",
    description:
      "Ensure correct TDS deductions, timely payments, and accurate record-keeping. We help you avoid penalties and notices with comprehensive TDS management.",
  },
  {
    icon: FileSpreadsheet,
    title: "TDS Return Filing",
    description:
      "Filing Form 24Q, 26Q, or 27Q is mandatory for deductors. We handle quarterly submissions, validate data, and ensure flawless filing through TRACES.",
  },
  {
    icon: FileText,
    title: "ITR-3 & ITR-4 Filing",
    description:
      "Choosing the correct ITR form for profession, business, or presumptive tax is critical. We help select, fill, and file your ITR accurately with all documentation.",
  },
  {
    icon: CalendarClock,
    title: "Advance Tax",
    description:
      "If your tax liability exceeds ₹10,000/year, advance tax applies. We calculate due amounts across four installments and help you pay on time to avoid interest under 234B/234C.",
  },
  {
    icon: Calculator,
    title: "GST Return Filing",
    description:
      "From GSTR-1 to GSTR-9, we manage the entire GST return cycle, ensuring you get your Input Tax Credit and maintain compliance across multiple states.",
  },
  {
    icon: Landmark,
    title: "Professional Tax",
    description:
      "Levied by states like Maharashtra and Karnataka, professional tax varies by salary or profession. We handle registrations, deductions, and returns as per state norms.",
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
            Comprehensive Tax Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide end-to-end tax compliance and advisory services for individuals, 
            professionals, and businesses across every tax category in India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-gold/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
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
