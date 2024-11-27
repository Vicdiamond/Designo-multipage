import { useLocation } from "react-router-dom";
import CompanyInfo from "./CompanyInfo";
import Cta from "./Cta";

export default function Footer() {
  const location = useLocation();
  const showCta = location.pathname !== "/contact";
  return (
    <footer
      className={`relative pb-[64px]  bg-primaryBlack px-[24px] md:px-[39px] min-[1440]:px-[165px]  ${
        showCta ? "pt-[256px] md:pt-[166px] " : "pt-[56px] md:pt-[66px]"
      }`}
    >
      {showCta && <Cta />}
      <CompanyInfo />
    </footer>
  );
}
