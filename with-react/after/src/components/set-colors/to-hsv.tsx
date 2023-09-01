import { hex } from "color-convert"; // Importing the color-convert library
import LabeledInput from "../common/labeled-input"; // Importing the LabeledInput component

const containerStyle: React.CSSProperties = {
  display: "grid",
  width: "100%",
  gridAutoFlow: "column",
  gap: "0.5rem",
};

type HexToHSVProps = {
  hexColor: string;
};

const HexToHSV = ({ hexColor }: HexToHSVProps) => {
  // Convert the hexColor to HSV format using color-convert library
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  return (
    <section style={containerStyle}>
      {/* Display LabeledInput components for each HSV component */}
      <LabeledInput label="H" type="number" value={h} />
      <LabeledInput label="S" type="number" value={s} />
      <LabeledInput label="V" type="number" value={v} />
    </section>
  );
};

export default HexToHSV;
