import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Baseera",
    description:
      "Building an AI-powered marketing intelligence platform that extracts structured brand knowledge from unstructured data, resolves entities and aliases, and connects them through a knowledge graph to support market and competitor analysis.",
    image: "/projects/baseera.jpg",
    tags: [".NET", "Neo4j", "Gemini API", "Vector Search"],
    link: "#",
    github: "https://github.com/haya08/Baseera",
  },
  {
    title: "Project management system",
    description:
      "Developed a project and task management backend with secure JWT-based authentication, role-based authorization, RESTful APIs, and real-time updates using SignalR.",
    image: "/projects/task-flow.jpg",
    tags: [".NET", "JWT", "SQL Server", "SignalR"],
    link: "#",
    github: "https://github.com/haya08/Task-flow",
  },
  {
    title: "GSoC 2026 qualification task",
    description:
      "Built an automated data collection pipeline for JSON Schema ecosystem observability, integrating GitHub GraphQL and npm REST APIs to generate ecosystem snapshots and benchmark data collection performance.",
    image: "/projects/GSoC.jpg",
    tags: ["Node.js", "GitHub GraphQL API", "GitHub Actions", "npm REST API"],
    link: "#",
    github: "https://github.com/haya08/JSON-Schema-Observability-Q-T",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:px-10 relative overflow-hidden">
      <div className="container mx-auto px-20 relative">
        {/* background */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/20 rounded-full blur-3xl" />
        {/* <div className="container mx-auto px-6 relative z-10"></div> */}

        {/* header section */}
        <div className="flex flex-col items-center">
          <span className="uppercase text-secondary-foreground tracking-wider text-md font-medium animate-fade-in ">
            featured work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5 mt-2 text-secondary-foreground animate-fade-in animation-delay-200">
            Projects that{" "}
            <span className="text-foreground italic font-normal font-serif">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-400 ">
            A selection of my work, from smaller projects to larger ones.
          </p>
        </div>

        {/* projects grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${(index + 2) * 100}ms`,
              }}
            >
              {/* image */}
              <div className="overflow-hidden relative aspect-video hover:scale-110 transition-transform duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60 " />
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                  {/* <a
                    href={project.link}
                    className="p-2 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-7 h-7" />
                  </a> */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-secondary-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-secondary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-muted-foreground glass px-3 py-1 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* my github link */}
        <a
          href="https://github.com/haya08?tab=repositories"
          target="_blank"
          className="flex justify-center mt-12 animate-fade-in animation-delay-800"
        >
          <AnimatedBorderButton>
            view All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </a>
      </div>
    </section>
  );
};
