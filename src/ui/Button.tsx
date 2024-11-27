import { motion } from "motion/react";

type ButtonProps = {
  children: string;
  type: string;
};

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <motion.div
      className={`mt-8 ${
        type === "primary"
          ? "bg-primaryPeach text-white"
          : "bg-white text-black text-center hover:bg-[#FFAD9B] hover:text-white transition-colors duration-500"
      }  py-[17px] px-[19px] rounded-lg font-normal text-nowrap  cursor-pointer relative z-10 max-w-[152px] w-full`}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 3,
        // type: "spring",
        // stiffness: 300,
        // mass: 0.9,
      }}
      initial={{
        opacity: 0,
        x: "100px",
      }}
      whileInView={{
        opacity: 1,
        x: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Button;
