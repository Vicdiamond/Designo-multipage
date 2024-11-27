import { motion } from "framer-motion";
export default function CompanyInfo() {
  return (
    <div className=" overflow-hidden">
      <div className="w-full py-[32px] mb-[32px] flex items-center justify-between  flex-col gap-8 md:flex-row md:gap-0 md:border-b">
        <div className="border-b flex items-center md:justify-start justify-center w-full pb-8 md:border-0 md:pb-0 flex-1 border-b-secondaryWhite">
          <motion.img
            src="/logo-light.png"
            alt="logo"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.div
          className="md:flex-row md:gap-[42px]  items-center justify-between gap-8 text-body flex flex-col text-secondaryWhite flex-1"
          initial={{
            x: "100px",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <button>OUR COMPANY</button>
          <button>LOCATIONS</button>
          <button>CONTACT</button>
        </motion.div>
      </div>

      <motion.div
        className="text-secondaryWhite space-y-10 md:space-y-0 md:flex  justify-between"
        initial={{
          y: "-100px",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="text-center flex-1 justify-start md:text-start">
          <p className="font-semibold">Designo Central Office</p>
          <p className="">3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>

        <div className="text-center flex-1 md:text-start">
          <p className="font-semibold">Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>

        <div className="flex items-center justify-between mx-auto max-w-[184px] flex-1 md:items-end">
          <img src="/facebook-icon.png" alt="facebook" />
          <img src="/instagram-icon.png" alt="instagram" />
          <img src="/pinterest-icon.png" alt="pinterest" />
          <img src="/twitter-icon.png" alt="twitter" />
          <img src="/youtube-icon.png" alt="youtube" />
        </div>
      </motion.div>
    </div>
  );
}
