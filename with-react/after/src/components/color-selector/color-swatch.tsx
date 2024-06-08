import { ReactNode } from "react";

// CSS styles for the container
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  height: "150px",
};

// CSS styles for the content
const contentStyle: React.CSSProperties = {
  width: "50%",
  height: "100%",
  border: "2px solid #1d4ed8",
  backgroundColor: "white",
  textAlign: "center",
  fontSize: "24px",
};

// Prop types for the ColorSwatch component
type ColorSwatchProps = {
  hexColor: string; // The hexadecimal color value to display
};

// The ColorSwatch component displays a colored swatch with the provided hexadecimal color value
const ColorSwatch = ({ hexColor }: ColorSwatchProps) => {
  return (
    <section style={containerStyle}>
      <div style={{ ...contentStyle, backgroundColor: hexColor }}>{hexColor}</div>
    </section>
  );
};

export default ColorSwatch;
