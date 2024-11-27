import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import { motion } from "framer-motion";

type HeaderProps = {
  showDropDown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ showDropDown, setShowDropDown }) => {
  return (
    <div className="py-9 px-6 flex items-center justify-between md:py-16 md:px-10">
      <Link to="/">
        <motion.img
          src="/logo.png"
          alt="logo"
          animate={{ y: [0, -20, 0] }} // Moves up and down
          transition={{
            duration: 1.5,
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Reverses direction each loop
            ease: "easeInOut",
          }}
        />
      </Link>

      <button
        className=" md:hidden "
        onClick={() => setShowDropDown((prevState) => !prevState)}
      >
        {!showDropDown && <img src="/shared/mobile/icon-hamburger.svg" />}
        {showDropDown && <img src="/shared/mobile/icon-close.svg" />}
      </button>

      <div className="hidden md:block">
        <NavigationLinks />
      </div>
    </div>
  );
};
export default Header;
