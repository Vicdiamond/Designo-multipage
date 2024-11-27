import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface AnimatedLinkProps {
  to: string;
  children: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, children }) => {
  const screenWidth = window.innerWidth;

  const isMobile = screenWidth < 768; // Adjust based on your needs

  const animationVariants = {
    mobile: {
      initial: { x: "100vw" },
      animate: { x: 0 },
      exit: { opacity: 0 },
      transition: { duration: 0.5, delay: 0.1 },
    },
    desktop: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
    },
  };

  const currentVariant = isMobile
    ? animationVariants.mobile
    : animationVariants.desktop;

  return (
    <motion.div
      initial={currentVariant.initial}
      animate={currentVariant.animate}
      exit={currentVariant.exit}
      transition={currentVariant.transition}
    >
      <Link to={to} className="text-white">
        {children}
      </Link>
    </motion.div>
  );
};

export default AnimatedLink;
