import { ChangeEventHandler } from "react";
import LabeledInput from "../common/labeled-input";

// CSS styles for the container
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

// Prop types for the ColorSelect component
type ColorSelectProps = {
  hexColor: string; // The currently selected hexadecimal color
  label?: string; // The label for the color input (optional, defaults to "Color")
  onChange: ChangeEventHandler<HTMLInputElement>; // Event handler for color input changes
};

// The ColorSelect component allows the user to select a color using an input type="color"
const ColorSelect = ({ hexColor, label = "Color", onChange }: ColorSelectProps) => {
  return (
    <div style={containerStyle}>
      {/* LabeledInput component to display the selected color */}
      <LabeledInput
        label={label}
        id="color-input"
        className="h-80 w-full"
        type="color"
        value={hexColor}
        onChange={onChange}
      />
    </div>
  );
};

export default ColorSelect;
