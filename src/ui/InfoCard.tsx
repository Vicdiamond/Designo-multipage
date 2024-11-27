import { motion } from "framer-motion";
interface cardProps {
  [key: string]: string;
}

interface InfoCardProps {
  card: cardProps;
  type: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ card, type }) => {
  const infoVariants = {
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
    <div
      className={`xl:flex   ${
        type === "first"
          ? "xl:flex-row mb-[160px]  md:rounded-b-xl xl:rounded-bl-none xl:rounded-r-lg"
          : "xl:flex-row-reverse  md:mb-[350px] mb-[250px]  md:rounded-b-xl xl:rounded-br-none xl:rounded-l-lg "
      } `}
    >
      <motion.div
        //  initial={type === 'first' ? "fromLeft" : "fromRight"}
        initial="fromLeft"
        variants={infoVariants}
        whileInView="visible"
      >
        <img
          src={card.imgSrc}
          alt="world-class-talent"
          className="w-full md:hidden"
        />
        <img
          src={card.imgSrcTablet}
          alt="world-class-talent"
          className="w-full hidden md:block xl:hidden"
        />
        <img
          src={card.imgSrcDesktop}
          alt="world-class-talent"
          className="w-full hidden xl:block h-full"
        />
      </motion.div>
      <motion.div
        className="bg-[#FDF3F0] px-6 py-20 text-center md:px-[59px] xl:py-[154px] xl:px-[96px] flex-1 xl:text-start xl:flex xl:flex-col xl:items-center xl:justify-center overflow-hidden relative  md:rounded-b-xl xl:rounded-br-none xl:rounded-l-lg"
        initial="fromRight"
        variants={infoVariants}
        whileInView="visible"
      >
        <img
          src="/shared/desktop/bg-pattern-three-circles.svg"
          alt=""
          className="absolute  "
        />

        <p className="text-[32px] xl:text-[40px] leading-[36px] xl:leading-[48px] text-primaryPeach mb-6  xl:text-start xl:w-full  xl:max-w-[445px]">
          {card.header}
        </p>
        <p className="text-[15px] xl:tex leading-[25px] text-[#333136] xl:max-w-[445px]">
          {card.body1}
        </p>
        <p className="mt-10 text-[15px] leading-[25px] text-[#333136] xl:max-w-[445px]">
          {card.body2}
        </p>
      </motion.div>
    </div>
  );
};

export default InfoCard;
