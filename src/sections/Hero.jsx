import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ScrollDown } from "@/components/ScrollDown";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "GitHub Actions",
  "vercel",
  "dotnet",
  "C#",
  "C++",
  "Python",
  "sql server",
]

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="/public/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background z-10" />
      </div>

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pinter-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${Math.random() * 20 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto lg:px-20  px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full  text-sm text-primary">
                <span className="bg-primary rounded-full w-2 h-2 animate-pulse" />
                Software Engineer * Full Stack
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                nam officia beatae tenetur sint debitis harum, et iusto facilis
                natus totam rem ipsa sunt non.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
              <Button size="lg">
                Contact Me <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="mr-2 w-5 h-5" /> Download CV
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-700">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaInstagram, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* right column */}
          <div className="animate-fade-in animation-delay-800 relative">
            <div className="relative max-w-sm mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass p-2 rounded-3xl glow-border">
                <img
                  src="/public/my-avatar.jpg"
                  alt="Haya Ahmed"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-full px-4 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/* stats badge */}
                <div className="absolute -top-4 -left-4 rounded-2xl glass px-4 py-2 animate-float">
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-800">
          <p className="text-sm text-muted-foreground text-center mb-6">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-muted-foreground/50 hover:text-muted-foreground transition-colors text-xl font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollDown />
    </section>
  );
};
