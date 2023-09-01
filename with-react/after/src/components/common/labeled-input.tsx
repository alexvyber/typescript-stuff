import clsx from "clsx"; // Importing clsx library for combining class names
import { ChangeEventHandler, useId } from "react"; // Importing ChangeEventHandler and useId hook from React

const inputStyle: React.CSSProperties = {
  // CSS styles for the input element
  width: "50%",
  padding: "8px",
  border: "2px solid #1d4ed8",
  borderRadius: "4px",
  fontSize: "16px",
  color: "#333",
  backgroundColor: "#f7f7f7",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  outline: "none",
  transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  WebkitAppearance: "none",
  MozAppearance: "textfield",
};

type LabeledInputProps = {
  id?: string;
  label: string;
  value: string | number;
  type?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const LabeledInput = ({
  label,
  value,
  id,
  className,
  type = "text",
  onChange,
}: LabeledInputProps) => {
  // Ensure unique ID using useId() hook
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id} style={{ display: "block" }}>
        {/* Display the provided label */}
        {label}
      </label>
      <input
        id={id}
        style={inputStyle}
        value={value}
        onChange={onChange}
        type={type}
        className={clsx("w-100", className)} // Concatenate class names using clsx
        readOnly={!onChange} // Set input as read-only if onChange event handler is not provided
      />
    </div>
  );
};

export default LabeledInput;
