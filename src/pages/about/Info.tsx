import InfoCard from "../../ui/InfoCard";
import { aboutFirstCardInfo, aboutSecondCardInfo } from "../../data/data";

interface cardInfoProperties {
  [key: string]: string;
}

type InfoProp = {
  type: string;
};
const Info: React.FC<InfoProp> = ({ type }) => {
  let cardInfo: cardInfoProperties[] = [];

  if (type === "first") cardInfo = aboutFirstCardInfo;

  if (type === "second") cardInfo = aboutSecondCardInfo;

  return (
    <div className="">
      {cardInfo.map((card) => (
        <InfoCard card={card} type={type} key={card.header} />
      ))}
    </div>
  );
};
export default Info;
