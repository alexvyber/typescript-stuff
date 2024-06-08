export {};

type CarObject = {
  engine: string;
  gearbox: string;
};

function Car(this: any, brand: string, model: string) {
  if (!new.target) throw "Car is a constructor, new it!!!";

  this.brand = brand;
  this.model = model;
}

let car = new (
  Car as unknown as {
    new (engine: string, gearbox: string): CarObject;
  }
)("Petrol", "Manual");

console.log("🚀 ~ car", car);
