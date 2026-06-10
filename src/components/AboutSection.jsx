import { AppWindow, Briefcase, Code, User } from "lucide-react";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center italic">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl">
              Highly experienced software developer, adept in a multitude of languages!
            </h3>

            <p className="text-muted-foreground">
              I specialise in building end-to-end systems - from training and deploying machine
              learning models in Python to crafting the interfaces that bring them to life. My work
              spans data pipelines, backend logic, and polished frontends, with a focus on shipping
              things that actually work in production.
            </p>
            <p className="text-muted-foreground">
              Whether it's a React web app, a PyTorch model, or a cloud-hosted automation pipeline,
              I enjoy taking a problem from first principles through to a finished product.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="special-button">
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download="Sebastian_Parkin_CV.pdf"
                className={cn(
                  "px-6 py-2 rounded-2xl border border-primary text-foreground hover:bg-primary/10",
                  "transition-colors duration-300",
                )}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-fill bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experienced Programmer</h4>
                  <p className="text-muted-foreground">
                    Creating end-to-end applications and Machine Learning with Python, highly
                    experienced with Bash, SQL and C.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-fill bg-primary/10">
                  <AppWindow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Developer</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-fill bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Interpersonal Skills</h4>
                  <p className="text-muted-foreground">
                    Experience working directly with clients, ensuring that the needs are always met
                    and projects delivered on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
