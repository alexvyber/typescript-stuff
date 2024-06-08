type Some<Type> = Type extends {
  [key in keyof Type as Type extends string ? string : never]: infer PropType;
}
  ? PropType
  : never;

type Obj = {
  some: string;
  other: number;
};

type Result = Some<Obj>;
