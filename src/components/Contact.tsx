import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["123 Business Park, Tower B", "Mumbai, Maharashtra 400001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@hariqco.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon-Sat: 10:00 AM - 7:00 PM", "Tax season extended hours"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cream/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold uppercase tracking-elegant text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 text-balance">
            Ready to Simplify Your Taxes?
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-cream/60 text-lg leading-relaxed">
            Contact us for a free consultation. Our experts are ready to help you 
            navigate Indian taxation with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div 
                key={info.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-cream/5 backdrop-blur-sm border border-cream/10 hover:bg-cream/10 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-2">{info.title}</h4>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-cream/60 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Form */}
          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-float border border-border/50">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Request a Consultation
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-muted-foreground mb-2 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-foreground"
                    placeholder="Rahul"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-muted-foreground mb-2 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-foreground"
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-foreground"
                  placeholder="rahul@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-foreground"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-muted-foreground mb-2 font-medium">
                  Type of Tax Service
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="income-tax">Income Tax Filing</option>
                  <option value="gst">GST Registration & Filing</option>
                  <option value="tds">TDS Compliance</option>
                  <option value="capital-gains">Capital Gains Tax</option>
                  <option value="advance-tax">Advance Tax Planning</option>
                  <option value="professional-tax">Professional Tax</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2 font-medium">
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 resize-none text-foreground"
                  placeholder="Tell us about your tax requirements..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full shadow-gold group">
                Submit Request
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-muted-foreground text-xs text-center">
                Your information is kept strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;