import { rgb } from "color-convert";

export type UpdateHexAction = {
  type: "update-hex";
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBAction = {
  type: "update-rgb";
  payload: { rgb: [number, number, number] };
};

type ColorState = {
  hexColor: string;
};

export const initState: ColorState = {
  hexColor: "#c2025e",
};

export type ColorActions = UpdateHexAction | UpdateRGBAction;

export const colorReducer = (state: ColorState = initState, action: ColorActions) => {
  if (action.type === "update-hex") {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === "update-rgb") {
    const hexColor = "#" + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }

  return state;
};
