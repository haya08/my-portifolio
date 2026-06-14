const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="mx-10 px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          PM<span className="text-primary">.</span>
        </a>
        <div className="glass rounded-full">
          <div className="flex items-center gap-4 py-2 px-4">
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

        <div>
          <Button />
        </div>
      </nav>
    </header>
  );
};
