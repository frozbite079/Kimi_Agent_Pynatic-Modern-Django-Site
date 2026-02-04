import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Desktop Apps', path: '/services' },
    { name: 'IoT Solutions', path: '/services' },
    { name: 'AI/ML', path: '/services' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/contact' },
  ],
  products: [
    { name: 'Chatbot Builder', path: '/products' },
    { name: 'IoT Dashboard', path: '/products' },
    { name: 'AI Parser', path: '/products' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/pynatic', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/pynatic', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/pynatic', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/pynatic', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-pynatic-bg border-t border-white/5">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="font-mono text-lg tracking-[0.2em] uppercase text-pynatic-lime font-medium">
                Pynatic
              </span>
            </Link>
            <p className="text-pynatic-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Transforming ideas into digital reality. We build web apps, desktop tools, 
              and IoT systems—designed, built, and deployed end-to-end.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-pynatic-text-secondary hover:text-pynatic-lime hover:border-pynatic-lime/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-text-secondary mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-pynatic-text hover:text-pynatic-lime transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-text-secondary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-pynatic-text hover:text-pynatic-lime transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-text-secondary mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-pynatic-text hover:text-pynatic-lime transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-text-secondary mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-pynatic-text">
                <Mail size={14} className="text-pynatic-lime" />
                <a href="mailto:pynatic079@gmail.com" className="hover:text-pynatic-lime transition-colors">
                  pynatic079@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-pynatic-text">
                <Phone size={14} className="text-pynatic-lime" />
                <a href="tel:+917984823759" className="hover:text-pynatic-lime transition-colors">
                  +91 7984823759
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-pynatic-text">
                <MapPin size={14} className="text-pynatic-lime mt-0.5" />
                <span className="text-pynatic-text-secondary">
                  Shiv Smruti Bhawan,<br />
                  Dabhoi, Gujarat 391110
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-pynatic-text-secondary">
            &copy; {new Date().getFullYear()} Pynatic. All rights reserved.
          </p>
          <p className="text-sm text-pynatic-text-secondary">
            Build fast. Ship bold.
          </p>
        </div>
      </div>
    </footer>
  );
}