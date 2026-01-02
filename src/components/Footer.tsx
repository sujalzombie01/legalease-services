import { Calculator, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-dark pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-4 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Calculator className="w-6 h-6 text-navy-dark" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-cream block">
                  Hariq & Co
                </span>
                <span className="text-[10px] text-cream/40 tracking-elegant uppercase font-medium">
                  Legal Advisory
                </span>
              </div>
            </a>
            <p className="text-cream/50 text-sm leading-relaxed mb-8">
              Hassle-free tax compliance, personalized advisory, 
              and complete digital filing support for individuals and businesses.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-navy-light/50 rounded-xl flex items-center justify-center hover:bg-gold transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-cream/70 group-hover:text-navy-dark" />
                </a>
              ))}
            </div>
          </div>

          {/* Tax Services */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Tax Services</h4>
            <ul className="space-y-3">
              {["Income Tax Filing", "GST Compliance", "TDS Management", "Capital Gains Tax", "Advance Tax", "Professional Tax"].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-cream/50 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:w-2 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Testimonials", "Tax Resources", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-cream/50 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:w-2 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Contact</h4>
            <address className="not-italic space-y-4 text-cream/50 text-sm">
              <p>123 Business Park, Tower B<br />Mumbai, Maharashtra 400001</p>
              <p>
                <a href="tel:+919876543210" className="hover:text-gold transition-colors flex items-center gap-2">
                  +91 98765 43210
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </p>
              <p>
                <a href="mailto:info@hariqco.com" className="hover:text-gold transition-colors flex items-center gap-2">
                  info@hariqco.com
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/30 text-sm">
              © {currentYear} Hariq & Co Legal Advisory Firm. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-cream/30 hover:text-gold text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;