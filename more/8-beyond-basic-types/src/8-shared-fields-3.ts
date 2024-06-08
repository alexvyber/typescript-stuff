export {};

type DigitalProduct = {
  name: string;
  price: number;
  sales: number;
} & ({ availability: string; category: string } | { released: boolean; rating: number });

const course: DigitalProduct = {
  name: "JS",
  price: 10.99,
  sales: 2000,
  released: true,
  rating: 4.6,

  availability: "available",
  category: "Web Dev",
};

console.log(course);
