import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "E-commerce platform",
    description:
      "Built a full-featured e-commerce platform with product browsing, cart management, user authentication, and a responsive shopping experience.",
    image: "/public/projects/e-commerce.jpg",
    tags: ["C#", ".NET", "MVC", "Entity Framework"],
    link: "#",
    github: "#",
  },
  {
    title: "Task management system",
    description:
      "Developed a task management system that helps users organize projects, track progress, and improve productivity through efficient task planning.",
    image: "/public/projects/task-management.png",
    tags: ["C#", ".NET", "MVC", "Entity Framework"],
    link: "#",
    github: "#",
  },
  {
    title: "Shipping system",
    description:
      "Created a shipping management solution for handling orders, tracking shipments, and optimizing delivery workflows with real-time status updates.",
    image: "/public/projects/shipping.jpeg",
    tags: ["C#", ".NET", "MVC", "Entity Framework"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:px-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* background */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10"></div>

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
                  <a href={project.link} className="p-2 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <ArrowUpRight className="w-7 h-7" />
                  </a>
                  <a href={project.github} className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-secondary-foreground">{project.title}</h3>
                  <ArrowUpRight className="w-6 h-6 text-secondary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm text-muted-foreground glass px-3 py-1 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-500">{tag}</span>
                ))}</div>
              </div>
            </div>
          ))}
        </div>

        {/* my github link */}
        <div className="flex justify-center mt-12 animate-fade-in animation-delay-800">
          <AnimatedBorderButton>
            view All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
