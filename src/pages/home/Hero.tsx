import Button from "../../ui/Button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="bg-primaryPeach w-full h-full px-[24px] xl:px-[95px] flex items-center  xl:items-start justify-center flex-col mx-auto md:rounded-lg xl:flex-row xl:justify-between pt-[60px] xl:pt-[139px] relative z-10 overflow-hidden">
      <img
        src="/shared/desktop/Oval.png"
        alt="oval"
        className="absolute   xl:block  -right-10 xl:top-0 top-24 w-full md:max-w-[650px] xl:max-w-[800px] -z-20"
      />
      <motion.div
        className="text-center text-white flex flex-col items-center justify-start max-w-[530px] xl:items-start xl:text-start xl:pt-6"
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <p className="font-medium text-[32px] xl:text-[48px] xl:leading-[48px]">
          Award-winning custom designs and digital branding solutions
        </p>
        <p className="mt-[14px] text-[15px] xl:text-base max-w-[445px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button type="secondary">Learn More</Button>
      </motion.div>

      <motion.div
        className="mt-[80px] xl:mt-0"
        initial={{
          y: "100vw",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          // delay: 0.3,
        }}
      >
        <img src="/phone-photo.png" className="max-h-[573px] xl:hidden" />
        <img
          src="/phone-photo-xl.png"
          className="max-h-[573px] hidden xl:block"
        />
      </motion.div>
    </div>
  );
}
