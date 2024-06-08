"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
function test(arg1, arg2) {
  console.log(arg1, arg2);
  // @ts-ignore
  console.log(this);
}
// @ts-ignore
var test2 = function () {
  return console.log(_this);
};
test(1, 2);
test2();
var obj = {
  title: "my obj",
  id: 1984,
};
test.apply(obj, ["apple", "banana"]);
// Reflect.apply(test,obj,['one','two'])
// console.log(Reflect.has(obj,'id'))
// console.log(Reflect.deleteProperty(obj,'title'))
// function My_constructor(arg1,arg2){
//   this.prop1 = arg1
//   this.prop2 = arg2
// }
// let obj = Reflect.construct(My_constructor,['one','two'])
