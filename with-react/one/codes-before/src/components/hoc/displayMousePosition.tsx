import "../style.css";
import { MouseEventHandler } from "react";

export type DisplayMousePositionProps = {
  x: number;
  y: number;
  onMouseMove: MouseEventHandler;
};

export const DisplayMousePosition = ({
  x,
  y,
  onMouseMove,
}: DisplayMousePositionProps) => {
  return (
    <div className="relative-container" onMouseMove={onMouseMove}>
      <section className="absolute-section">
        <p>
          <span className="bold-span">X</span>: {x}
        </p>
        <p>
          <span className="bold-span">Y</span>: {y}
        </p>
      </section>
    </div>
  );
};
