import { useState } from "react"; // Importing useState from React
import id from "lodash.uniqueid"; // Importing the lodash.uniqueid function to generate unique IDs
import AddSavedColor from "./add-saved-color"; // Importing the AddSavedColor component
import SavedColor from "./saved-color"; // Importing the SavedColor component

// Inline CSS styles for the container element
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1rem",
};

type SavedColorsProps = {
  hexColor: string;
};

// Initial saved colors data
const saved_colors = [
  { id: id(), name: "Rosy Brown", hexColor: "#BC8F8F" },
  { id: id(), name: "Royal Blue", hexColor: "#4169E1" },
];

const SavedColors = ({ hexColor }: SavedColorsProps) => {
  const [savedColors, setSavedColors] = useState(saved_colors);

  return (
    <section style={containerStyle}>
      {/* Heading */}
      <h3>Save Your Color</h3>
      {/* AddSavedColor component to add new saved colors */}
      <AddSavedColor
        onSave={(name) =>
          setSavedColors((colors) => [...colors, { id: id(), name, hexColor }])
        }
      />
      {/* Mapping through savedColors and rendering SavedColor component for each */}
      {savedColors.map(({ id, name, hexColor }) => {
        return (
          <SavedColor
            key={id}
            name={name}
            hexColor={hexColor}
            onRemove={() =>
              setSavedColors((colors) =>
                colors.filter((color) => color.id !== id)
              )
            }
          />
        );
      })}
    </section>
  );
};

export default SavedColors;
