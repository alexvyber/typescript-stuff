export {};

class SomeClass {}
const someClass = class {};

type ClassWithMileage = {
  mileage: number;
};

class CarClass {
  engine: string;
  gearbox: string;
  #vin = 1983;
  location = "Some Location";
  start: () => void;
  getLocation: () => void;
  getVin: () => number;
  accessPrivate: () => string;

  constructor(engine: CarClass["engine"], gearbox: CarClass["gearbox"]) {
    this.engine = engine.toUpperCase();
    this.gearbox = gearbox.toUpperCase();
    this.start = function () {
      console.log("engine on...");
    };

    this.getVin = () => {
      return this.#vin;
    };

    this.revEngine = function () {
      console.log("vroom...");
    };

    this.getLocation = function () {
      console.log(this.location);
    };

    const superPrivate = "IM SUPER PRIVATE";

    this.accessPrivate = function () {
      return superPrivate;
    };
  }

  #plate = "123123 asdfas";

  plate = "asdf";

  set accessPlate(arg: string) {
    this.#plate = arg;
  }

  get accessPlate() {
    return this.#plate;
  }

  set accessVin(arg: number) {
    this.#vin = arg;
  }

  get accessVin() {
    return this.#vin;
  }

  revEngine() {
    console.log("vroom...");
  }

  static doShit() {
    console.log("🚀 ~ CarClass ~ doShit ~ this", this);
  }
}

Object.defineProperty(CarClass.prototype, "mileage", {
  value: 1000,
  writable: false,
  enumerable: true,
  configurable: false,
});

const car = new CarClass("EEEE", "GFGFFFFG") as CarClass & ClassWithMileage;
console.log("🚀 ~ car", car);
// console.log("🚀 ~ car", car.accessPlate)
// console.log("🚀 ~ car", (car.accessPlate = "asdfweqrqwerqwerqwer"))
// console.log("🚀 ~ car.accessPlate", car.accessPlate)

console.log("🚀 ~ car.getVin()", car.getVin());

console.log("🚀 ~ car.accessPrivate()", car.accessPrivate());

// car.revEngine()
// CarClass.doShit()
