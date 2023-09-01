import colorNames from "color-name-list"; // Importing the color-name-list library

type ColorNameProps = {
  hexColor: string;
};

const ColorName = ({ hexColor }: ColorNameProps) => {
  // Searching for the color name that matches the given hexColor
  const color = colorNames.find((color) => {
    return color.hex === hexColor.toLowerCase();
  });

  // If color is not found, return null
  if (!color) return null;

  // If color is found, display the color name with the color hex value
  return (
    <p className="info">
      Color Name: <span style={{ color: color.hex }}>{color.name}</span>
    </p>
  );
};

export default ColorName;
