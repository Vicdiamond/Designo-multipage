import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface Project {
  title: string;
  src: string;
  tabletSrc: string;
  desktopSrc: string;
}

interface ProjectProps {
  project: Project;
  className: string;
  i: number;
}

const Project: React.FC<ProjectProps> = ({ project, className, i }) => {
  const projectVariants = {
    fromLeft: {
      x: "-100px",
      opacity: 0,
      transition: { type: "spring", stiffness: 120, duration: 6 },
    },
    fromRight: {
      x: "100px",
      opacity: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className={`w-full max-h-[250px] md:max-h-[200px] overflow-hidden h-full aspect-square mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-[95%] rounded-xl relative  ${className} `}
      initial={i % 2 === 0 ? "fromLeft" : "fromRight"}
      variants={projectVariants}
      whileInView="visible"
    >
      <img
        src={project.src}
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden rounded-xl"
      />
      <img
        src={project.tabletSrc}
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block xl:hidden rounded-xl"
      />
      <img
        src={project.desktopSrc}
        className="absolute inset-0 w-full h-full object-cover z-0 hidden xl:block rounded-xl"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-xl "></div>

      <Link to={`/${project.title.split(" ")[0].toLowerCase()}-design`}>
        <div className="z-50 text-white relative flex items-center justify-center flex-col h-full gap-3">
          <div className="absolute inset-0 bg-[#E7816B] opacity-0 hover:opacity-50  rounded-xl transition-opacity duration-300"></div>
          <p className="text-[28px] leading-[36px] uppercase tracking-[1.4px]">
            {project.title}
          </p>

          <div className="flex items-center justify-center gap-5">
            <button className="text-h3 text-[15px] uppercase ">
              view projects
            </button>
            <span>
              <img src="/shared/desktop/icon-right-arrow.svg" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
export default Project;
