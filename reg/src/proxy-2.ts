export {};

let car = {
  engine: "petrol",
  gearbox: "manual",
  // _id: 1984
};

function isInCar(prop: string | symbol): asserts prop is keyof typeof car {
  if (!(prop in car)) throw new Error("Prop must be of type ...");
}

let carProxy = new Proxy(car, {
  // trap
  get(target, prop, _receiver) {
    isInCar(prop);

    if (prop[0] == "_") {
      return "access denied";
    } else {
      return target[prop];
    }
  },

  set(target, prop, val: unknown, _receiver) {
    isInCar(prop);
    if (prop[0] == "_") {
      throw "cannot set value for this prop";
    }

    if (typeof val === "string") return !!(target[prop] = val.toUpperCase());

    return false;
  },
});

let newObj = Object.create(carProxy);
console.log("🚀 ~ newObj", newObj);

// @ts-ignore
carProxy.location = "asdfasdf";
// @ts-ignore
carProxy.asdf = "122";
console.log("🚀 ~ carProxy", carProxy);
