import { hex } from "color-convert"; // Importing the color-convert library
import LabeledInput from "../common/labeled-input"; // Importing the LabeledInput component

const containerStyle: React.CSSProperties = {
  display: "grid",
  width: "100%",
  gridAutoFlow: "column",
  gap: "0.5rem",
};

type HexToCMYKProps = {
  hexColor: string;
};

const HexToCMYK = ({ hexColor }: HexToCMYKProps) => {
  // Convert the hexColor to CMYK format using color-convert library
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  return (
    <section style={containerStyle}>
      {/* Display LabeledInput components for each CMYK component */}
      <LabeledInput label="C" type="number" value={c} />
      <LabeledInput label="M" type="number" value={m} />
      <LabeledInput label="Y" type="number" value={y} />
      <LabeledInput label="K" type="number" value={k} />
    </section>
  );
};

export default HexToCMYK;
