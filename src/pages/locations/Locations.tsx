import Location from "./Location";
import { locationInfo } from "../../data/data";

export default function Locations() {
  return (
    <div className="md:px-[40px] space-y-10 mb-[200px] md:mb-[300px] xl:mb-[320px] overflow-hidden">
      {locationInfo.map((location, i) => (
        <Location location={location} key={location.name} index={i + 1} />
      ))}
    </div>
  );
}
