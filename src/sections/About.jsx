import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
  Network,
  Cable,
  Database,
  Gauge,
} from "lucide-react";

const highLights = [
  {
    icon: Network,
    title: "Scalable Architecture",
    description: "Designing systems that can grow with business needs.",
  },
  {
    icon: Cable,
    title: "API Development",
    description: "Building secure and reliable APIs for modern applications.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Creating efficient and optimized database structures.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Improving speed, reliability, and resource efficiency.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="md:py-30 py-16 md:px-10 relative overflow-hidden"
    >
      <div className="container mx-auto px-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="uppercase text-secondary-foreground tracking-wider text-md font-medium">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10 text-secondary-foreground animate-fade-in animation-delay-200">
              Building scalable systems,
              <span className="text-foreground italic font-normal font-serif">
                {" "}
                for modern applications.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-400 ">
              <p>
                I'm a backend-focused software developer passionate about
                building scalable, secure, and efficient systems. I enjoy
                transforming complex business requirements into reliable APIs
                and architectures that power modern web applications.
              </p>
              <p>
                My experience spans designing RESTful APIs, database
                architecture, authentication systems, and performance
                optimization. I focus on writing clean, maintainable code that
                supports long-term growth and scalability.
              </p>
              <p>
                Beyond development, I'm constantly exploring new technologies
                and best practices to improve system performance and deliver
                better solutions. I believe great software is built through
                continuous learning, collaboration, and attention to detail.
              </p>
            </div>

            <div className="glass rounded-2xl animate-fade-in animation-delay-600 p-6 flex items-center gap-4 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "Great software isn't only about what users see; it's about the
                systems working seamlessly behind the scenes."
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-4 animate-fade-in animation-delay-800">
            {highLights.map((highlight, index) => (
              <div
                key={index}
                className="glass flex items-center gap-4 rounded-2xl p-6 animate-fade-in animation-delay"
                style={{
                  animationDelay: `${(index + 2) * 100}ms`,
                }}
              >
                <div className="flex flex-col">
                  <div className="mb-3">
                    <div className="w-12 h-12 mb-4 bg-primary/10 hover:bg-primary/20 rounded-xl p-2 flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
