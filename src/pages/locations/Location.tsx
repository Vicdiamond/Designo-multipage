import LightBackground from "../../ui/LightBackground";
import { motion } from "framer-motion";

interface objectProperties {
  [key: string]: string;
}

interface LocationProp {
  location: objectProperties;
  index: number;
}

const Location: React.FC<LocationProp> = ({ location, index }) => {
  const locationtVariants = {
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
      className={`md:space-y-[31px] xl:flex xl:space-y-0 xl:gap-[30px]  ${
        index % 2 !== 0 ? "xl:flex-row-reverse" : ""
      }`}
    >
      <motion.img
        src={location.img}
        alt="map"
        className="w-full md:hidden xl:block xl:max-w-[350px] xl:rounded-xl object-cover"
        initial={index % 2 !== 0 ? "fromRight" : "fromLeft"}
        variants={locationtVariants}
        whileInView="visible"
      />
      <motion.img
        src={location.imgTablet}
        alt=""
        className="w-full hidden md:block xl:hidden"
        initial={index % 2 !== 0 ? "fromRight" : "fromLeft"}
        variants={locationtVariants}
        whileInView="visible"
      />

      <LightBackground index={index}>
        <p className="text-[32px] leading-9 text-primaryPeach md:text-start">
          {location.name}
        </p>

        <div className="mt-[24px] space-y-6 md:flex md:items-center md:space-y-0 md:justify-between xl:w-full">
          <div className="md:text-start md:flex-1 xl:flex-1">
            <p className="text-secondaryBlack text-[15px] leading-[25px] font-bold">
              Designo {location.branch} Office
            </p>
            <p className="text-[15px] leading-[25px] text-secondaryBlack">
              {location.address1}{" "}
            </p>
            <p className="text-[15px] leading-[25px] text-secondaryBlack">
              {" "}
              {location.address2}
            </p>
          </div>

          <div className="md:text-start md:flex-1">
            <p className="text-secondaryBlack text-[15px] leading-[25px] font-bold">
              Contact
            </p>
            <p className="text-[15px] leading-[25px] text-secondaryBlack">
              {location.phone}
            </p>
            <p className="text-[15px] leading-[25px] text-secondaryBlack">
              {location.email}
            </p>
          </div>
        </div>
      </LightBackground>
    </motion.div>
  );
};

export default Location;
