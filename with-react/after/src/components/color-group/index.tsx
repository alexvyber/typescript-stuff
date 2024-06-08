// Importing utility functions to get related colors from the specified color.
import { getComplementColors, getTriadColors } from "../utils/get-related-colors";

// Importing the component to display the related color palettes.
import ColorGroupPalette from "./related-color-palette";

// Defining the prop types for the ColorGroups component.
type ColorGroupsProps = {
  hexColor: string; // The hexadecimal color for which related colors will be generated.
};

// The ColorGroups component takes a hexadecimal color as input and displays two related color palettes:
// 1. Complementary Palette
// 2. Triadic Palette
const ColorGroups = ({ hexColor }: ColorGroupsProps) => {
  // Using the utility function getTriadColors to get an array of triadic colors for the input color.
  const triadColors = getTriadColors(hexColor);

  // Using the utility function getComplementColors to get an array of complementary colors for the input color.
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      {/* Rendering the ColorGroupPalette component for the Complementary Palette. */}
      <ColorGroupPalette
        title="Complementary Palette" // Setting the title for the Complementary Palette.
        hexColors={complementColors} // Passing the array of complementary colors as props to the ColorGroupPalette component.
      />

      {/* Rendering the ColorGroupPalette component for the Triadic Palette. */}
      <ColorGroupPalette
        title="Triadic Palette" // Setting the title for the Triadic Palette.
        hexColors={triadColors} // Passing the array of triadic colors as props to the ColorGroupPalette component.
      />
    </>
  );
};

export default ColorGroups;
