import { Prettify } from "./prettify";

export {};

let car = {
  engine: "petrol",
  gearbox: "manual",
};

let carProxy = new Proxy(car, {
  // trap
  get(target, prop, receiver) {
    if (prop == "engine") {
      return target[prop].toUpperCase();
    }

    if (prop == "receiver") {
      return receiver;
    }

    return "access denied...";
  },
}) as Prettify<typeof car & { receiver: any }>;

console.log("🚀 ~ carProxy", carProxy);

console.log("🚀 ~ carProxy.engine", carProxy.engine);
console.log("🚀 ~ carProxy.gearbox", carProxy.gearbox);
console.log("🚀 ~ carProxy.receiver", carProxy.receiver);

let newObj = Object.create(carProxy);
console.log("🚀 ~ newObj", newObj);
