import "./style.css";

type HexColorProps = {
  hexColor: string;
};

const HexColor = ({ hexColor }: HexColorProps) => {
  return <section className="semibold info">{hexColor}</section>;
};

export default HexColor;
