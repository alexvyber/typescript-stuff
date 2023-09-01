import { ChangeEventHandler } from "react";
import ColorSelect from "./color-select";
import ColorSwatch from "./color-swatch";

// CSS styles for the container
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1rem",
};

// Prop types for the ColorPicker component
type ColorPickerProps = {
  hexColor: string; // The current hexadecimal color value
  onChange: ChangeEventHandler<HTMLInputElement>; // Event handler for color change
};

// The ColorPicker component allows users to choose and display a color
const ColorPicker = ({ hexColor, onChange }: ColorPickerProps) => {
  return (
    <div style={containerStyle}>
      <h3>Choose Color</h3>
      <ColorSelect hexColor={hexColor} onChange={onChange} />
      <ColorSwatch hexColor={hexColor} />
    </div>
  );
};

export default ColorPicker;
