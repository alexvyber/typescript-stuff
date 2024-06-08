export {};
// type SomeConstructor = new (prop: Obj["prop"], method: Obj["method"]) => void
// type SomeConstructor = {
//   new (s: string): Obj;
// };

// const OtherConstructor: SomeConstructor =  () => {
//   return new
// }

// // @ts-ignore
// const MyConstructor: (
//   this: any,
//   prop: string,
//   method: (...args: any[]) => any
//   // @ts-ignore
// ) => SomeObject = (prop: Obj["prop"], method: Obj["method"]) => {
//   // @ts-ignore
//   this.prop = prop
//   // @ts-ignore
//   this.method = method
// }

// --

type SomePrototye = {
  numberOfCats: number;
};

type SomeObject = {
  prop: string;

  method: (...args: any[]) => void;
};

type SomeConstructor = {
  new (prop: string, method: (...args: any[]) => void): SomeObject & SomePrototye;
};

function MyConstructor(this: any, prop: string, method: (...args: any[]) => any) {
  this.prop = prop;
  this.method = method;
}

Object.defineProperty(MyConstructor.prototype, "numberOfCats", {
  value: Math.floor(Math.random() * 1000),
  writable: false,
  configurable: false,
  enumerable: true,
});

const some = new (MyConstructor as unknown as SomeConstructor)("asdf", () => {
  console.log("Method Call");
  return "shit";
});

console.log("🚀 ~ some", some);
console.log("🚀 ~ some.prop", some.prop);
console.log("🚀 ~ some.prop", some.numberOfCats);
console.log("🚀 ~ some.method", some.method());

type CarObject = {
  engine: string;
  gearbox: string;
  start: () => void;
  revEngine: () => void;
  getLocation: () => void;
  getVin: () => number;
  accessVin: number;
};

function CarConstructor(this: any, engine: string, gearbox: string) {
  let vin = 1984;

  this.engine = engine.toUpperCase();
  this.gearbox = gearbox.toUpperCase();
  this.start = function () {
    console.log("engine on...");
  };

  this.getVin = function () {
    return vin;
  };

  this.revEngine = function () {
    console.log("vroom...");
  };

  this.getLocation = function () {
    console.log(this.constructor.location);
  };

  Object.defineProperty(this, "accessVin", {
    // do not set writable, value
    enumerable: true,
    configurable: true,

    set: (arg: number) => {
      vin = arg;
    },

    get: () => {
      return vin;
    },
  });
}

Object.defineProperty(CarConstructor.prototype, "mileage", {
  value: 1000,
  writable: false,
  enumerable: true,
  configurable: false,
});

CarConstructor.location = "Some Location";
// CarConstructor.retrieve_vin = function(){
//   return _vin
// }

let carObj = new (
  CarConstructor as unknown as {
    new (engine: string, gearbox: string): CarObject;
  }
)("Hybrid", "Automatic");

carObj.getLocation();
carObj.getVin();

console.log(carObj.accessVin);
carObj.accessVin = 1000;
console.log(carObj.accessVin);
