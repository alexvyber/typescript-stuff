import { moduleOne } from "./module-one"

module moduleTwo {
  function some() {
    moduleOne.funcOne()
    return "some"
  }
}
