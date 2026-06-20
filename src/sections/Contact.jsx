import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "haya.ahm.08@gmail.com",
    href: "mailto:haya.ahm.08@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 010 049 768 70",
    href: "tel:+200104976870",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID;

      console.log(serviceId, templateId, publicKey);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing env variables");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        type: "error",
        message: err.message || "Failed to send message",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            Have a project in mind? I'd like to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        {/* content */}
        <div className="grid lg:grid-cols-2 gap-8 mx-auto mt-16 max-w-5xl">
          {/* contact form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-600">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name..."
                  className="w-full bg-surface px-4 py-2 rounded-lg border border-border focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your_email@gmail.com"
                  className="w-full bg-surface px-4 py-2 rounded-lg border border-border focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-surface px-4 py-2 rounded-lg border border-border focus:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none h-32"
                ></textarea>
              </div>

              <Button disabled={isLoading}>
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {/* error message */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-4 rounded-xl p-4 text-green-500
                  ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-red-500/10 border border-red-500/20 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* contact info */}
          <div className="flex flex-col gap-8">
            {/* info */}
            <div className="space-y-8 glass p-8 rounded-3xl animate-fade-in animation-delay-600">
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>
              <div className="pl-4 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg p-3 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-100">
                      {<info.icon />}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {info.label}
                      </p>
                      <p className="text-md">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* availability */}
            <div className="glass p-8 space-y-4 rounded-3xl border border-primary/30 animate-fade-in animation-delay-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <h5 className="text-md font-semibold text-foreground">
                  Currently Available
                </h5>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new oppertunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant.
                Let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
