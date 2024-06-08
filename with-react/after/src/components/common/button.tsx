import clsx from "clsx";
import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";

// Prop types for the Button component
type ButtonProps = {
  variant?: string; // Variant of the button (optional)
  size?: string; // Size of the button (optional)
  className?: string; // Additional CSS class names for the button (optional)
  style?: CSSProperties; // Custom inline CSS styles for the button (optional)
  onClick?: MouseEventHandler<HTMLButtonElement>; // Event handler for button click (optional)
};

// The Button component represents a customizable button element
const Button = ({ variant, size, className, style, children, onClick }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={clsx(variant, size, className)} // Concatenate class names using clsx
      onClick={onClick} // Attach click event handler
      style={style} // Apply custom inline styles
    >
      {children}
    </button>
  );
};

export default Button;
