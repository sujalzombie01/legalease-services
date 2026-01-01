import { Calculator, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-lg font-semibold text-cream block">
                  Hariq & Co
                </span>
                <span className="text-xs text-cream/50 tracking-widest uppercase">
                  Legal Advisory Firm
                </span>
              </div>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Dedicated to providing hassle-free tax compliance, personalized advisory, 
              and complete digital filing support for individuals and businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors group">
                <Facebook className="w-5 h-5 text-cream group-hover:text-navy-dark" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors group">
                <Twitter className="w-5 h-5 text-cream group-hover:text-navy-dark" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors group">
                <Linkedin className="w-5 h-5 text-cream group-hover:text-navy-dark" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors group">
                <Instagram className="w-5 h-5 text-cream group-hover:text-navy-dark" />
              </a>
            </div>
          </div>

          {/* Tax Services */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Tax Services</h4>
            <ul className="space-y-3">
              {["Income Tax Filing", "GST Compliance", "TDS Management", "Capital Gains Tax", "Advance Tax", "Professional Tax"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-cream/60 hover:text-gold transition-colors text-sm">
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
              {["About Us", "Our Team", "Client Testimonials", "Tax Resources", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cream/60 hover:text-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Contact Info</h4>
            <address className="not-italic space-y-3 text-cream/60 text-sm">
              <p>123 Business Park, Tower B</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p className="pt-2">
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:info@hariqco.com" className="hover:text-gold transition-colors">
                  info@hariqco.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © 2026 Hariq & Co Legal Advisory Firm. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/40 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/40 hover:text-gold text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-cream/40 hover:text-gold text-sm transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
