import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaTelegram,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", link: "/#" },
  { title: "Cars", link: "/#cars" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
];

const socialLinks = [
  { icon: <FaTelegram />, href: "https://t.me/mogesmotor", label: "Telegram" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/mogesmotors/", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/moges_motors", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src="images/mogess.png" alt="Moges Motors" className="h-14 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Addis Ababa's leading destination for premium electric vehicles and expert car consultancy.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaLocationArrow className="text-primary shrink-0" />
                <span>Bole, Atlas, Addis Ababa</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaMobileAlt className="text-primary shrink-0" />
                <a href="tel:+251909262626" className="hover:text-primary transition-colors">
                  +251 909 262 626
                </a>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-dark-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gray-600 group-hover:bg-primary group-hover:w-6 transition-all duration-200" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
              FIND US
            </h3>
            <div className="rounded-xl overflow-hidden border border-dark-border h-44">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.7075072144294!2d38.77576707483261!3d9.005352991055018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnMTkuMyJOIDM4wrA0Nic0Mi4wIkU!5e1!3m2!1sen!2set!4v1712569402691!5m2!1sen!2set"
                title="Moges Motors Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Moges Motors. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://www.linkedin.com/company/100400568"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Digital 251
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
