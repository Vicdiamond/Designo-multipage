import ValuesList from "./ValuesList";
import { homeValuesDetails } from "../../data/data";

export default function Values() {
  return (
    <div className="px-6 pb-[120px] mx-auto space-y-[80px] mb-[80px] md:mb-[140px] xl:flex items-center justify-center w-full xl:space-y-0 relative ">
      <img
        src="/shared/desktop/bg-pattern-leaf-right.png"
        alt="leaf"
        className="absolute -z-0 -right-10 top-60 hidden xl:block"
      />

      {homeValuesDetails.map((value, i) => (
        <ValuesList value={value} key={value.title} i={i + 1} />
      ))}
    </div>
  );
}
