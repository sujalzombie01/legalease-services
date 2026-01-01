import { Scale, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-lg font-semibold text-cream block">
                  Sterling & Associates
                </span>
                <span className="text-xs text-cream/50 tracking-widest uppercase">
                  Attorneys at Law
                </span>
              </div>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Dedicated to providing exceptional legal services with integrity,
              expertise, and compassion.
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

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {["Criminal Defense", "Personal Injury", "Family Law", "Real Estate", "Business Law", "Estate Planning"].map((item) => (
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
              {["About Us", "Our Team", "Case Results", "Testimonials", "Blog", "Contact"].map((item) => (
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
              <p>123 Justice Avenue, Suite 500</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">
                <a href="tel:5551234567" className="hover:text-gold transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:contact@sterlinglaw.com" className="hover:text-gold transition-colors">
                  contact@sterlinglaw.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © 2026 Sterling & Associates. All rights reserved.
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
