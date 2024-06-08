import { MouseEventHandler } from "react"; // Importing MouseEventHandler from React
import Button from "../common/button"; // Importing the Button component
import ColorChangeSwatch from "../common/color-change-swatch"; // Importing the ColorChangeSwatch component

// Inline CSS styles for the container element
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent: "space-between",
  width: "50%",
};

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, onClick, onRemove }: SavedColorProps) => {
  return (
    <article style={containerStyle}>
      {/* Button component to delete the saved color */}
      <Button variant="destructive" size="small" onClick={onRemove}>
        Delete
      </Button>
      {/* ColorChangeSwatch component to display the saved color */}
      <ColorChangeSwatch hexColor={hexColor} colorName={name} onClick={onClick} />
    </article>
  );
};

export default SavedColor;
