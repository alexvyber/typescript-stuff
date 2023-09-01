import { MouseEventHandler, useCallback, useReducer } from "react";
import { getPosition } from "./get-pos";

const initialState = { x: 0, y: 0 };

type UpdatePositionAction = {
  type: "updatePosition";
  payload: Partial<typeof initialState>;
};

const reducer = (state = { x: 0, y: 0 }, action: UpdatePositionAction) => {
  if (action.type === "updatePosition") {
    return { ...state, ...action.payload };
  }

  return state;
};

const MousePosition = () => {
  const [{ x, y }, dispatch] = useReducer(reducer, initialState);

  const updatePosition = useCallback<MouseEventHandler>(
    (event) =>
      dispatch({ type: "updatePosition", payload: getPosition(event) }),
    [dispatch]
  );

  return (
    <div className="relative-container" onMouseMove={updatePosition}>
      <section className="absolute-section">
        <p className="paragraph">
          <span className="bold-span">X</span>: {x}
        </p>
        <p className="paragraph">
          <span className="bold-span">Y</span>: {y}
        </p>
      </section>
    </div>
  );
};

export default MousePosition;
