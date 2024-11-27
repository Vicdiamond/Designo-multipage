import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type BackgroundProps = {
  children?: ReactNode;
  header: string;
  body: string;
  className?: string;
  page?: string;
};

const Background: React.FC<BackgroundProps> = ({
  children,
  header,
  body,
  className,
  page,
}) => {
  const location = useLocation();

  const isDesignPage = location.pathname.includes("design");
  const isContactPage = location.pathname === "/contact";

  const projectsHeroStyles = isDesignPage
    ? "md:rounded-xl items-center "
    : "xl:px-[95px]";
  const projectsContentStyles = isDesignPage
    ? "text-center xl:items-center "
    : "xl:items-start xl:text-start max-w-[530px]";

  const contactPageHeroStyles = isContactPage
    ? "md:items-start xl:flex-row xl:py-[54px] md:rounded-xl"
    : isDesignPage
    ? ""
    : "xl:pt-[139px]";

  const contactPageContentStyles = isContactPage
    ? "md:px-[58px] md:items-start md:text-start md:max-w-[650px] xl:h-full xl:my-auto"
    : "";

  return (
    <div
      className={`bg-primaryPeach w-full h-full px-[24px]  flex flex-col items-center justify-center xl:justify-start pt-[60px] py-[80px]   relative z-10 overflow-hidden md:rounded-b-xl xl:rounded-br-none xl:rounded-l-lg text-white ${className} ${contactPageHeroStyles}
      ${projectsHeroStyles}
      `}
    >
      {isDesignPage ? (
        <img
          src="/shared/desktop/bg-pattern-cta.png"
          alt="pattern"
          className="absolute object-cover  top-0 h-full right-0 w-full"
        />
      ) : (
        <img
          src="/shared/desktop/Oval.png"
          alt="oval"
          className="absolute rotate-180 -top-60 -right-10 md:-left-[200px] xl:-left-[0px] xl:-top-[300px] p-0 w-full md:max-w-[650px] xl:max-w-[800px] -z-20"
        />
      )}

      <motion.div
        className={`text-center text-white flex flex-col items-center justify-center  xl:max-w-full  xl:pt-6 w-full ${contactPageContentStyles} ${projectsContentStyles}`}
        initial={{
          opacity: 0,
          y: "-100px",
        }}
        whileInView={{
          opacity: 1,
          y: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <p className="font-medium text-[32px] xl:text-[48px] xl:leading-[48px] md:text-[48px] z-10">
          {header}
        </p>

        <p
          className={`mt-[14px] text-[15px] md:text-[16px] xl:text-base  w-full leading-[26px] xl:mt-8 ${
            isDesignPage ? "max-w-[400px]" : ""
          } `}
        >
          {body}
        </p>
      </motion.div>

      <div className={`${page === "contact" ? "xl:pt-16" : ""} w-full`}>
        {children}
      </div>
    </div>
  );
};
export default Background;

{
  /* //max-w-[445px] md:max-w-[573px] */
}

{
  /* <div
        className={`text-center text-white flex flex-col items-center justify-center max-w-[530px] xl:max-w-full xl:items-center xl:text-center xl:pt-6   ${
          page === "contact" ? "md:px-[58px] md:text-start max-w-[573px]" : ""
        }`}
      > */
}
