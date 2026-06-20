const experiences = [
  {
    period: "2020 - Present",
    title: "Software Developer",
    company: "Company Name",
    description:
      "lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    technologies: ["React", "Node.js", "MongoDB"],
    current: true,
  },
  {
    period: "2019 - 2020",
    title: "Software Developer",
    company: "Company Name",
    description:
      "lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    period: "2018 - 2019",
    title: "Software Developer",
    company: "Company Name",
    description:
      "lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    period: "2017 - 2018",
    title: "Software Developer",
    company: "Company Name",
    description:
      "lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorme ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 md:px-10 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2  " />

      <div className="container mx-auto px-20 relative z-10">
        {/* section header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <div className="animate-fade-in">
              <span className="uppercase text-secondary-foreground tracking-wider text-md font-medium">
                Career Journey
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5 text-secondary-foreground animate-fade-in animation-delay-200">
              Experience that
              <span className="text-foreground italic font-normal font-serif">
                {" "}
                speaks volume.
              </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-400 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              accusantium! Debitis non, amet corporis eius repellendus aut est
              error quia. Inventore porro a corrupti aspernatur illo provident
              sapiente placeat ad.
            </p>
          </div>
        </div>

        {/* timeline section */}
        <div className="relative mt-16">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />

          {/* experiences */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* timeline dot */}
                <div className="absolute w-3 h-3 bg-primary rounded-full left-0 md:left-1/2 top-0 -translate-x-1/2 ring-4 ring-background">
                  {experience.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-6 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300">
                    <span className="text-primary text-sm font-medium">
                      {experience.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground text-sm mt-4">
                      {experience.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm text-muted-foreground glass px-3 py-1 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
