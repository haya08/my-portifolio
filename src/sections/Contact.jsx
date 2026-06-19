import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo =[
  {
    icon: Mail, 
    label: "Email",
    value: "haya.ahm.08@gmail.com",
    href: "mailto:haya.ahm.08@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 010 049 768 70",
    href: "tel:+200104976870"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: "#"
  }
]

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:px-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* background */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2  " />

        {/* header section */}
        <div className="flex flex-col items-center">
          <span className="uppercase text-secondary-foreground tracking-wider text-md font-medium animate-fade-in ">
            get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5 mt-2 text-secondary-foreground animate-fade-in animation-delay-200">
            Let's build{" "}
            <span className="text-foreground italic font-normal font-serif">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-400 ">
            Have a project in mind? I'd like to hear about it. Send me a message and let's discuss how we can work together.
          </p>
        </div>

        {/* content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* contact form */}
          <div>
            <form action=""></form>
          </div>

          {/* contact info */}
          <div></div>
        </div>
      </div>
    </section>
  );
};
