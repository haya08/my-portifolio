import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highLights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Clean code is a way to write code that is easy to understand, easy to maintain, and easy to modify.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Performance is the ability to deliver a product or service to a user in a timely and efficient manner.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Teamwork is the ability to work together as a team to achieve a common goal.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Innovation is the ability to create something new and different from what has already been done.",
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
              Building the future,
              <span className="text-foreground italic font-normal font-serif">
                {" "}
                of web development.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-400 ">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur magnam iusto rem, doloremque mollitia est, voluptatem
                saepe ipsum obcaecati eveniet sunt amet neque perspiciatis?
                Optio, voluptates illum. Nisi reprehenderit veritatis, cumque
                perferendis numquam expedita est debitis beatae aspernatur
                repellat dicta asperiores facilis? Consequuntur, ipsam similique
                accusamus beatae quibusdam accusantium. Quia?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur magnam iusto rem, doloremque mollitia est, voluptatem
                saepe ipsum obcaecati eveniet sunt amet neque perspiciatis?
                Optio, voluptates illum. Nisi reprehenderit veritatis, cumque
                perferendis numquam expedita est debitis beatae aspernatur
                repellat dicta asperiores facilis? Consequuntur, ipsam similique
                accusamus beatae quibusdam accusantium. Quia?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur magnam iusto rem, doloremque mollitia est, voluptatem
                saepe ipsum obcaecati eveniet sunt amet neque perspiciatis?
                Optio, voluptates illum. Nisi reprehenderit veritatis, cumque
                perferendis numquam expedita est debitis beatae aspernatur
                repellat dicta asperiores facilis? Consequuntur, ipsam similique
                accusamus beatae quibusdam accusantium. Quia?
              </p>
            </div>

            <div className="glass rounded-2xl animate-fade-in animation-delay-600 p-6 flex items-center gap-4 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "my mission is to make the world a better place. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Accusamus,
                distinctio!"
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
