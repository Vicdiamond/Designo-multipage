import { motion } from "framer-motion";
interface ProjectProperties {
  [key: string]: string;
}
type ProjectGalleryItemProp = {
  project: ProjectProperties;
  i: number;
};

const ProjectGalleryItem: React.FC<ProjectGalleryItemProp> = ({
  project,
  i,
}) => {
  const projectGalleryVariants = {
    fromBottom: {
      y: "-100px",
      opacity: 0,
      transition: { type: "spring", stiffness: 120, duration: 6 },
    },
    fromTop: {
      y: "100px",
      opacity: 0,
      transition: { type: "spring", stiffness: 120, delay: 0.5 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      className="flex flex-col md:flex-row xl:flex-col md:px-0 px-6 relative z-10"
      initial={i % 2 === 0 ? "fromBottom" : "fromTop"}
      variants={projectGalleryVariants}
      whileInView="visible"
    >
      <div className="flex-1">
        <img
          src={project.img}
          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none xl:rounded-b-none"
        />
      </div>
      <div className="bg-[#FDF3F0] px-6 py-8 text-center flex-1 flex flex-col justify-center items-center md:rounded-r-lg xl:rounded-t-none xl:rounded-b-xl">
        <p className="text-primaryPeach text-xl leading-[26px] tracking-[5px]">
          {project.title}
        </p>
        <p className="text-base leading-[26px] text-secondaryBlack mt-4">
          {project.body}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectGalleryItem;
