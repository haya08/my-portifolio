import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "PixelBox completely transformed our brand presence online. The designs were clean, modern, and delivered exactly the message we wanted.",
    author: "Sarah Mitchell",
    role: "Marketing Manager",
    avatar: "/public/avatars/uifaces-popular-avatar(1).jpg",
  },
  {
    quote:
      "Working with PixelBox was one of the best decisions for our business. The team delivered high-quality visuals and engaging video content on time.",
    author: "David Carter",
    role: "Business Owner",
    avatar: "/public/avatars/uifaces-popular-avatar(2).jpg",
  },
  {
    quote:
      "The attention to detail and creativity exceeded our expectations. Our social media engagement noticeably improved after the campaign launch.",
    author: "Emma Wilson",
    role: "Social Media Specialist",
    avatar: "/public/avatars/uifaces-popular-avatar(3).jpg",
  },
  {
    quote:
      "From concept to final delivery, PixelBox handled everything professionally. The final result looked premium and perfectly matched our vision.",
    author: "Michael Anderson",
    role: "Startup Founder",
    avatar: "/public/avatars/uifaces-popular-avatar(4).jpg",
  },
  {
    quote:
      "Exceptional communication, stunning designs, and fast turnaround times. We will definitely work with PixelBox again.",
    author: "Olivia Bennett",
    role: "Brand Manager",
    avatar: "/public/avatars/uifaces-popular-avatar(5).jpg",
  },
  {
    quote:
      "Their creative approach helped our brand stand out in a competitive market. The results were beyond what we imagined.",
    author: "James Thompson",
    role: "E-commerce Director",
    avatar: "/public/avatars/uifaces-popular-avatar(6).jpg",
  },
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const previous = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:px-10 relative overflow-hidden"
    >
      <div className="container mx-auto px-20 relative">
        {/* background */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2  " />

        {/* header section */}
        <div className="flex flex-col items-center">
          <span className="uppercase text-secondary-foreground tracking-wider text-md font-medium animate-fade-in ">
            what people say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5 mt-2 text-secondary-foreground animate-fade-in animation-delay-200">
            Kind words from{" "}
            <span className="text-foreground italic font-normal font-serif">
              amazing people.
            </span>
          </h2>
        </div>

        {/* carousel */}
        <div className="max-w-3xl mx-auto mt-16">
          <div>
            {/* main testimonial */}
            <div className="glass rounded-2xl p-4 md:p-8 glow-border animate-fade-in animation-delay-400">
              <div className="absolute -top-6 left-10 bg-primary rounded-full p-4 flex items-center justify-center">
                <Quote className="w-6 h-6 text-foreground" />
              </div>

              {/* content */}
              <div className="pt-5">
                <p className="md:text-xl font-serif">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-14 h-14 rounded-full border-3 border-primary glow-border"
                  />
                  <div>
                    <p className="text-md font-bold">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 hover:text-primary"
                onClick={() => previous()}
              >
                <ChevronLeft />
              </button>

              {/* dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentTestimonial ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"} transition-all duration-400`}
                    onClick={() => setCurrentTestimonial(index)}
                  ></button>
                ))}
              </div>

              <button
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 hover:text-primary"
                onClick={() => next()}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
