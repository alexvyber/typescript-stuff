export {};

class CarBasics {
  brand: string;
  model: string;
  constructor() {
    this.brand = "Toyota";
    this.model = "Camry";
  }
}

function PetrolEngine(cls: typeof CarBasics) {
  return class extends cls {
    engine: string;

    constructor() {
      super();
      this.engine = "Petrol";
    }
  };
}

function AutomaticGearbox(cls: ReturnType<typeof PetrolEngine>) {
  return class extends cls {
    gearbox: string;

    constructor() {
      super();
      this.gearbox = "Automatic";
    }
  };
}

// function Hybrid_engine() {
//   this.engine = "Hybrid"
// }

// function CVT_gearbox() {
//   this.gearbox = "CVT"
// }

// target obj: brand, model, engine, gearbox
const ResultClass = AutomaticGearbox(PetrolEngine(CarBasics));
let car = new ResultClass();

console.log("🚀 ~ car", car);
console.log("🚀 ~ car.brand", car.brand);
