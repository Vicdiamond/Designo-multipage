import { ReactNode } from "react";
import { motion } from "framer-motion";

type LightBackgroundProps = {
  children: ReactNode;
  index: number;
};

const LightBackground: React.FC<LightBackgroundProps> = ({
  children,
  index,
}) => {
  const lightBackgroundVariants = {
    fromLeft: {
      x: "-100px", // Start off-screen to the left
      opacity: 0, // Start invisible
      transition: { type: "spring", stiffness: 120, duration: 6 }, // Spring transition
    },
    fromRight: {
      x: "100px", // Start off-screen to the right
      opacity: 0, // Start invisible
      transition: { type: "spring", stiffness: 120 },
    },
    visible: {
      x: 0, // Move to the center
      opacity: 1, // Fully visible
      transition: { duration: 0.8 }, // Adjust duration as needed
    },
  };
  return (
    <motion.div
      className="bg-[#FDF3F0] px-6 py-20 text-center md:px-[59px] xl:py-[88px] xl:my-0 xl:px-[96px]  xl:text-start xl:flex xl:flex-col xl:flex-1  xl:items-start   xl:justify- overflow-hidden relative  md:rounded-xl "
      initial={index % 2 !== 0 ? "fromLeft" : "fromRight"}
      variants={lightBackgroundVariants}
      whileInView="visible"
    >
      <img
        src="/shared/desktop/bg-pattern-three-circles.svg"
        alt=""
        className="absolute    md:-top-64"
      />

      {children}
    </motion.div>
  );
};

export default LightBackground;
