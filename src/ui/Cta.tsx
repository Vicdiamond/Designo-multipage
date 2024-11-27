import Button from "./Button";
import { motion } from "motion/react";

export default function Cta() {
  return (
    <div className="bg-primaryPeach  absolute left-0 right-0 mx-auto w-full max-w-[90%]  sm:max-w-[80%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[84%] -top-40 md:-top-64 text-center py-[64px] px-[24px] rounded-2xl xl:flex-row xl:justify-between  xl:items-center xl:px-[96px] xl:pt-[72px] flex items-center flex-col overflow-hidden  ">
      <img
        src="/shared/desktop/bg-pattern-cta.png"
        className="absolute object-cover  top-0 h-full right-0 w-full"
      />

      <motion.div
        className="xl:text-start xl:max-w-[400px] overflow-hidden"
        initial={{
          opacity: 0,
          x: "-100px",
        }}
        whileInView={{
          opacity: 1,
          x: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <p className="relative z-10 text-h2 tracking-tight text-primaryWhite xl:max-w-[268px]">
          Let's talk about your project
        </p>
        <p className="mt-8 text-primaryWhite text-body relative z-10 tracking-tight md:max-w-[573px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </motion.div>

      <Button type="secondary">Get in Touch</Button>
    </div>
  );
}
