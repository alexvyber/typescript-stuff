import { MouseEventHandler, useCallback, useState } from "react";
import { getPosition } from "../get-pos";

export const useMousePosition = () => {
  const initialState = { x: 0, y: 0 };
  const [{ x, y }, setPosition] = useState(initialState);

  const updatePosition = useCallback<MouseEventHandler>(
    (event) => {
      const { x, y } = getPosition(event);
      setPosition({ x, y });
    },
    [setPosition]
  );

  return { x, y, onMouseMove: updatePosition };
};
