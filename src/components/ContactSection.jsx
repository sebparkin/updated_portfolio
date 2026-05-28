import { Mail, Send } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // 'success' | 'error' | null
  const [toastVisible, setToastVisible] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setToast("success");
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
        setTimeout(() => setToast(null), 3400); // waits for slide-down to finish
      })
      .catch((err) => {
        setToast("error");
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
        setTimeout(() => setToast(null), 3400);
      });

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold italic mb-4 text-center">Contact Me</h2>
        <p className="text-venter text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to collaborate? Feel free to reach out.
        </p>

        <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-semibold">Email Me at:</h3>
              <div className="rounded-md bg-card flex flex-row items-center px-2 py-2 gap-2">
                <div>
                  <Mail className="font-medium" />
                </div>
                <a
                  href="mailto:sebparkinwork@gmail.com"
                  className="text-muted-foreground italic hover:text-primary transition-colors"
                >
                  sebparkinwork@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* <h3 className="text-2xl font-semibold">Or</h3> */}
          <h3 className="text-2xl font-semibold mb-6 mt-6">Or Send a Message</h3>

          <form className="space-y-6" ref={form}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {" "}
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                placeholder=""
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {" "}
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                placeholder=""
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {" "}
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                placeholder=""
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn("special-button w-full flex items-center justify-center gap-2")}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-md text-foreground z-50 
              transition-all duration-300 ease-in-out
              ${toastVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
              ${toast === "success" ? "bg-card" : "bg-red-500"}`}
        >
          {toast === "success"
            ? "Message sent successfully!"
            : "Something went wrong, please try again."}
        </div>
      )}
    </section>
  );
};
