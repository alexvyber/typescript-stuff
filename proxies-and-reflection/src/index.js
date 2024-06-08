"use strict";
exports.__esModule = true;
var obj = {
  name: "Alice",
};
var proxy = new Proxy(obj, {});
proxy.name = "Maria";
console.log(obj);
var proxy2 = new Proxy(
  {},
  {
    get: function (target, p, receiver) {
      console.log("get some stuff");
    },
  }
);
proxy2.constructor;
