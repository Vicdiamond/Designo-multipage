import Button from "../../ui/Button";
import { motion } from "framer-motion";

interface ImgProps {
  name: string;
  img: string;
}

interface PlacrProps {
  place: ImgProps;
  i: number;
}

const Place: React.FC<PlacrProps> = ({ place, i }) => {
  const placesVariants = {
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
      className="flex items-center justify-center flex-col mb-[48px]"
      initial={i % 2 === 0 ? "fromBottom" : "fromTop"}
      variants={placesVariants}
      whileInView="visible"
    >
      <img src={place.img} alt="" />
      <p className="mt-[48px] mb-8 text-[20px] leading-[26px] text-[#333136] tracking-[5px]">
        {place.name}
      </p>
      <Button type="primary">SEE LOCATION</Button>
    </motion.div>
  );
};

export default Place;
