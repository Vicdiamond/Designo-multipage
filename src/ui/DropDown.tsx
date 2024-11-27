import { motion } from "motion/react";
import NavigationLinks from "./NavigationLinks";

type DropDownProps = {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropDown: React.FC<DropDownProps> = ({ setShowDropDown }) => {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;

    if (target.innerHTML.length <= 11) setShowDropDown(false);
  }

  return (
    <div className="md:hidden">
      <div
        className="absolute top-0 z-20 text-white w-full"
        onClick={handleClick}
      >
        <NavigationLinks />
      </div>
      <motion.div
        className="absolute inset-0 bg-black opacity-50 z-10"
        initial={{ opacity: 0 }} // Fade in overlay
        animate={{ opacity: 0.7 }} // Keep opacity at 0.5 when the dropdown is active
        exit={{ opacity: 0 }}
      ></motion.div>
    </div>
  );
};

export default DropDown;
