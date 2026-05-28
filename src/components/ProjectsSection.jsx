import { useState } from "react";
import { ExternalLink, GitFork } from "lucide-react";
import { ExpandedProjects } from "./ExpandedProjects";
const projects = [
  {
    id: 1,
    title: "Machine Learning Trading Bot",
    description:
      "An end-to-end trading bot using PyTorch, Alpaca API, Streamlit and hosted on Oracle Cloud",
    image: "/projects/trader_bot.png",
    tags: ["Python", "PyTorch", "Streamlit"],
    demoUrl: "http://193.123.189.238:8501/",
    githubUrl: "https://github.com/sebparkin/trader_bot",
  },
  {
    id: 2,
    title: "Nonogram Puzzle App",
    description:
      "A puzzle game web app built with React Expo, complete with image manipulation, gesture handling and smooth animations.",
    image: "/projects/nonogram.png",
    tags: ["React", "Expo", "Streamlit"],
    demoUrl: "https://nonogram-app.vercel.app",
    githubUrl: "https://github.com/sebparkin/nonogram_app",
  },
  {
    id: 3,
    title: "MD Simulations of the EGFR",
    description:
      "A study on the effect of a cancer-related perturbation on the dynamics of the Epithelial Growth Factor Receptor, using the D-NEMD technique.",
    image: "/projects/EGFR.png",
    tags: ["HPC", "GROMACS", "Bash"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl lg:max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold italic mb-4 text-center">
          {" "}
          Featured Projects{" "}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Click on each card to see more information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              onClick={() => setSelectedProjectId(project.id)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary italic"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-center items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GitFork size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProjectId !== null && (
        <ExpandedProjects
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  );
};
