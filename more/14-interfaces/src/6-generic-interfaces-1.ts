export {};

interface Product<T1, T2, T3> {
  name: T1;
  price: T2;
  availability: T3;
}

const course: Product<"TS" | "Elixir", number, boolean> = {
  name: "Elixir",
  price: 10.99,
  availability: true,
};
