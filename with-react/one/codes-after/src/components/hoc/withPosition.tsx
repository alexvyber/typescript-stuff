import { MouseEventHandler, useCallback, useState } from "react";
import { getPosition } from "../get-pos";
import { DisplayMousePositionProps } from "./displayMousePosition";

const initialState = { x: 0, y: 0 };

const withMouseMove =
  <T extends {}>(Component: React.ComponentType<DisplayMousePositionProps>) =>
  (props: Omit<T, keyof DisplayMousePositionProps>) => {
    const [{ x, y }, setPosition] = useState(initialState);

    const updatePosition = useCallback<MouseEventHandler>(
      (event) => {
        const { x, y } = getPosition(event);
        setPosition({ x, y });
      },
      [setPosition]
    );

    return <Component {...(props as T)} x={x} y={y} onMouseMove={updatePosition} />;
  };

export default withMouseMove;
