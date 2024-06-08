type Product = {
  name: string;
  price: number;
  sales: number;
  availability: string;
  category: string;
};

type Course = {
  name: string;
  price: number;
  sales: number;
  released: boolean;
  rating: number;
};

type OnlineCourse = Product | Course;

const course: OnlineCourse = {
  name: "JS",
  price: 10.99,
  sales: 2000,
  released: true,
  rating: 4.6,

  availability: "available",
  category: "Web Dev",
};
