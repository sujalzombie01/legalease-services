import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-hero relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mt-4 mb-6">
              Ready to Simplify Your Taxes?
            </h2>
            <p className="text-cream/70 leading-relaxed mb-10 max-w-md">
              Contact us today for a free consultation. Our expert team is ready 
              to help you navigate the complexities of Indian taxation with 
              confidence and ease.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Our Office</h4>
                  <p className="text-cream/60 text-sm">
                    123 Business Park, Tower B<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Call Us</h4>
                  <p className="text-cream/60 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Email Us</h4>
                  <p className="text-cream/60 text-sm">info@hariqco.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Office Hours</h4>
                  <p className="text-cream/60 text-sm">
                    Mon-Sat: 10:00 AM - 7:00 PM<br />
                    Tax season extended hours available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card p-8 md:p-10 rounded-lg shadow-elegant">
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Request a Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Rahul"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="rahul@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-muted-foreground mb-2">
                  Type of Tax Service
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-foreground"
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
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Briefly Describe Your Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your tax requirements..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full">
                Submit Request
              </Button>

              <p className="text-muted-foreground text-xs text-center">
                Your information is kept strictly confidential. By submitting this
                form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
