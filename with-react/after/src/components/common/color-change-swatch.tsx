import clsx from "clsx"; // Importing clsx library for combining class names
import { MouseEventHandler } from "react"; // Importing MouseEventHandler from React
import Button from "./button"; // Importing the Button component

type ColorChangeSwatchProps = {
  hexColor: string;
  colorName?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ColorChangeSwatch = ({ hexColor, colorName, className, onClick }: ColorChangeSwatchProps) => {
  return (
    <Button
      className={clsx("color-input", className)} // Concatenate class names using clsx
      style={{
        // Inline CSS styles for the ColorChangeSwatch component
        backgroundColor: hexColor,
        width: "100%",
        height: "100%",
        maxHeight: "43px",
      }}
      onClick={onClick} // Pass the onClick event handler to the Button component
    >
      {/* Display the colorName and hexColor */}
      {colorName}
      <br />
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
