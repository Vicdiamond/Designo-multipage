import Place from "./Place";
import { placesInfo } from "../../data/data";

export default function Places() {
  return (
    <div className="pt-[0px] xl:flex items-center justify-around xl:">
      {placesInfo.map((place, i) => (
        <Place place={place} key={place.name} i={i + 1} />
      ))}
    </div>
  );
}
