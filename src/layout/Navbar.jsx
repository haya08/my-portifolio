import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="mx-10 px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          PM<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="glass rounded-full">
          <div className="hidden md:flex items-center gap-4 py-2 px-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-2 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* contact btn */}
        <div className="hidden md:block">
          <Button children="Contact Me" size="sm" />
        </div>

        {/* mobile menu btn */}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="flex flex-col mx-auto gap-4 py-2 px-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button children="Contact Me" />
          </div>
        </div>
      )}
    </header>
  );
};
