import { Copyright } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground/10">
      {/* brand name */}
      <div className="flex items-center justify-between mx-6 md:mx-20 px-6 py-8">
        <div>
          <a
            href="#"
            className="text-2xl font-bold tracking-tight hover:text-primary"
          >
            HA<span className="text-primary">.</span>
          </a>
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            <Copyright className="w-4 h-4" /> 2026 Haya Ahmed. All rights reserved
          </p>
        </div>

        {/* section links */}
        <div className="flex items-center gap-5">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-muted-foreground text-sm hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>

        {/* social links */}
        <div className="flex items-center gap-5">
          {[
            { icon: FaGithub, href: "#" },
            { icon: FaLinkedin, href: "#" },
            { icon: FaInstagram, href: "#" },
          ].map((link, index) => (
            <a key={index} href={link.href} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{<link.icon />}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};
