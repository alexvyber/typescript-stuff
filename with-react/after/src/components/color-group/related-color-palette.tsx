import ColorChangeSwatch from "../common/color-change-swatch";

// CSS styles for the container
const containerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2px",
};

// Prop types for the RelatedColorPalette component
type RelatedColorPaletteProps = {
  title: string; // The title of the color palette
  hexColors: string[]; // Array of hexadecimal colors for the color palette
};

// The RelatedColorPalette component takes a title and an array of hexadecimal colors as input
const RelatedColorPalette = ({
  title,
  hexColors,
}: RelatedColorPaletteProps) => {
  return (
    <section>
      {/* Displaying the title of the color palette */}
      <h3 style={{ marginBottom: "1rem" }}>{title}</h3>

      {/* Displaying the color swatches in a grid layout */}
      <div style={containerStyle}>
        {hexColors.map((hexColor) => {
          // Rendering each color swatch using the ColorChangeSwatch component
          return <ColorChangeSwatch key={hexColor} hexColor={hexColor} />;
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
