import { Link } from "react-router-dom";
import { motion } from "motion/react";

function NavigationLinks() {
  const links = [
    { to: "/about", label: "OUR COMPANY" },
    { to: "/location", label: "LOCATIONS" },
    { to: "/contact", label: "CONTACT" },
  ];
  return (
    <motion.div
      className=" w-full py-[48px] px-6 bg-black md:bg-transparent  md:p-0 md:items-center justify-between gap-10 text-body flex-col flex md:flex-row items-start "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {links.map((link, index) => (
        <motion.div
          key={link.to}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            to={link.to}
            className="text-white text-xl md:text-secondaryBlack"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default NavigationLinks;
{
  /* <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link to="/about">OUR COMPANY</Link>
      </motion.div>
      <Link to="/location">LOCATIONS</Link>
      <Link to="/contact">CONTACT</Link> */
}
