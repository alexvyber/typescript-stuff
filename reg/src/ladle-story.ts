import type * as React from "react";
import { useLadleContext } from "./src/context";
import { StoryDecorator, ActionType, GlobalState, ThemeState, ModeState, GlobalAction, Config } from "../shared/types";
export { useMDXComponents } from "@mdx-js/react";
export declare const Story: (props: any) => any;
export declare const Meta: (props: any) => any;
export declare const Description: (props: any) => any;
type ReactNodeWithoutObject = React.ReactElement | string | number | boolean | null | undefined;
export { useLadleContext, ActionType, ThemeState, ModeState };
export type { StoryDecorator };
export declare const useLink: () => (value: string) => void;
export declare const linkTo: (value: string) => () => void;
export declare const action: (name: string) => (event?: any) => void;
export type GlobalProvider = React.FC<{
  globalState: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
  config: Config;
  children: ReactNodeWithoutObject;
  storyMeta?: Meta;
}>;
export type SourceHeader = React.FC<{
  path: string;
  locStart: number;
  locEnd: number;
}>;
export interface Story<P = {}> extends React.FC<P> {
  args?: Args<P>;
  argTypes?: ArgTypes<P>;
  decorators?: StoryDecorator[];
  meta?: Meta;
  storyName?: string;
}
export type Args<
  P = {
    [key: string]: any;
  },
> = Partial<P>;
export type ControlType = "select" | "multi-select" | "radio" | "inline-radio" | "check" | "inline-check" | "range";

export interface ArgType<K> {
  control?: {
    options?: K[];
    type: ControlType;
    min?: number;
    max?: number;
    step?: number;
    // [key: string]: any;
  };
  defaultValue?: K;
  description?: string;
  name?: string;
  action?: string;
  options?: K[];
  // [key: string]: any;
}
export type ArgTypes<
  P = {
    [key: string]: any;
  },
> = {
  [key in keyof P]?: ArgType<P[key]>;
};
export type Meta = {
  [key: string]: any;
};
