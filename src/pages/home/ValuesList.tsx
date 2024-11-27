import { motion } from "framer-motion";

interface ValuesList {
  img: string;
  title: string;
  body: string;
}

interface ValuesListProps {
  value: ValuesList;
  i: number;
}

const ValuesList: React.FC<ValuesListProps> = ({ value, i }) => {
  const valuesVariants = {
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
      className="flex flex-col items-center justify-center md:flex-row  md:gap-[48px] xl:flex-col flex-grow relative z-10"
      initial={i % 2 === 0 ? "fromBottom" : "fromTop"}
      variants={valuesVariants}
      whileInView="visible"
    >
      <div className="">
        <img src={value.img} alt="" />
      </div>
      <div className="text-center max-w-[439px] md:text-start xl:text-center xl:max-w-[350px]">
        <p className="text-[20px] leading-[26px] tracking-[5px] mb-8 mt-[48px]">
          {value.title}
        </p>
        <p className="text-[16px] leading-[26px] text-secondaryBlack ">
          {value.body}
        </p>
      </div>
    </motion.div>
  );
};

export default ValuesList;
