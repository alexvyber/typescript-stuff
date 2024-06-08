type Enum_Order_Mass = "kg1" | "kg5" | "kg10" | "kg15";

type GetMassValueFromKey<Type, Part extends string> = Type extends `${Part}${infer One}` ? One : Type;
type Mass = {
  [Key in Enum_Order_Mass]: `${GetMassValueFromKey<Key, "kg">} кг`;
};

const massObj: Mass = {
  kg1: "1 кг",
  kg5: "5 кг",
  kg10: "10 кг",
  kg15: "15 кг",
};
