import { ExternalLink, GitFork, X } from "lucide-react";
import { useEffect, useState } from "react";

const expandedProjectsData = [
  {
    id: 1,
    title: "Machine Learning Trading Bot",
    info: "An end-to-end algorithmic trading system built with PyTorch and the Alpaca API. The bot uses a custom LSTM model trained on historical price data to predict short-term market movements. \n Feature engineering has been used to generate 53 features for prediction, and it predicts whether close will be higher or lower than open by using yesterdays tickers. \nA Streamlit dashboard provides real-time monitoring of positions, P&L, and model confidence scores. The system is hosted on Oracle Cloud with automated scheduling and risk management controls.",
    videoUrl: "/projects/trader_bot_demo.m4v",
    demoUrl: "http://193.123.189.238:8501/",
    githubUrl: "https://github.com/sebparkin/trader_bot",
  },
  {
    id: 2,
    title: "Nonogram Puzzle App",
    info: "A cross-platform nonogram (Picross) puzzle game web-app built with React Native and Expo. Features include procedurally generated puzzles from user-supplied images using custom edge-detection logic, gesture handling for fast cell marking, and spring-based animations throughout the UI. \nThe rules of the game are to fill in the squares so that the filled squares in each row and column match the clues on the top and the left of the grid",
    videoUrl: "/projects/nonogram_demo.m4v",
    demoUrl: "https://nonogram-app.vercel.app",
    githubUrl: "https://github.com/sebparkin/nonogram_app",
  },
  {
    id: 3,
    title: "MD Simulations of the EGFR",
    info: "A computational biophysics study applying the D-NEMD (Dynamical Non-Equilibrium Molecular Dynamics) technique to investigate how a cancer-related mutation in the Epithelial Growth Factor Receptor alters allosteric communication pathways. \nSimulations were run on HPC clusters using GROMACS, with analysis pipelines written in Bash and Python to process hundreds of gigabytes of trajectory data. \nBy comparing displacements between equilibrium and non-equilibrium simulations the dynamical effects due to the mutation could be resolved.",
    videoUrl: "/projects/egfr_demo.mp4",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ExpandedProjects = ({ projectId, onClose }) => {
  const project = expandedProjectsData.find((p) => p.id === projectId);
  const [visible, setVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) setNavbarHeight(navbar.offsetHeight);
    requestAnimationFrame(() => setVisible(true));
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    if (navbar) {
      navbar.style.transition = "none";
      navbar.style.paddingRight = `${scrollbarWidth}px`;
      void navbar.offsetWidth;
      navbar.style.transition = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (navbar) {
        navbar.style.transition = "none";
        navbar.style.paddingRight = "";
        void navbar.offsetWidth;
        navbar.style.transition = "";
      }
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  if (!project) return null;

  return (
    <div
      style={{ top: navbarHeight }}
      className={`fixed inset-x-0 lg:inset-x-64 bottom-0 z-30 bg-card shadow-2xl lg:rounded-t-2xl transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* Top bar: X button left, title centred */}
        <div className="flex items-start px-4 py-4 flex-shrink-0 mb-4">
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors flex-shrink-0 mt-4"
            aria-label="Close"
          >
            <X size={24} className="text-foreground" />
          </button>
          <h2 className="flex-1 text-2xl md:text-3xl font-bold text-center italic px-2 mt-4">
            {project.title}
          </h2>
          <div className="w-10 flex-shrink-0" />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-12 pb-12">
          <div className="max-w-5xl lg:max-w-3xl mx-auto flex flex-col lg:flex-row gap-8 lg:items-center">
            {/* Info text */}
            <div className="flex-1">
              <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-wrap lg:text-justify md:text-center">
                {project.info}
              </p>
            </div>

            {/* Square video */}
            <div className="w-full md:w-64 md:mx-auto lg:w-96 lg:mx-0 flex-shrink-0">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-card">
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="max-w-5xl lg:max-w-3xl mx-auto flex justify-center gap-12 pt-12">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={32} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <GitFork size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
