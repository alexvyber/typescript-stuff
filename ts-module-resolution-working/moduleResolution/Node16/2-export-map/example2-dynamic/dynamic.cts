import pkg = require("pkg");
import { value } from "pkg";

export async function Static() {
  return value;
}

export async function Dynamic() {
  return pkg.value;
}

export async function BadCJSDynamic() {
  return (await import("pkg")).value;
}
