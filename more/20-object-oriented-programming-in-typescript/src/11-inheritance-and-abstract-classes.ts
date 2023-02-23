export {}

abstract class Robot {
  constructor(
    public name: string,
    public model: string,
    public durability: string,
    public weight: number,
  ) {}

  get robotData() {
    return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`
  }
}

class Avdon extends Robot {
  constructor(public id: number, name: string, model: string, durability: string, weight: number) {
    super(name, model, durability, weight)
  }
}

class Veax extends Robot {
  constructor(public id: number, name: string, model: string, durability: string, weight: number) {
    super(name, model, durability, weight)
  }
}

// @ts-ignore
const errorRobot = new Robot("Avdon5000", "AN233", "Medium", 25) // typecheck error
console.log("🚀 ~ errorRobot:", errorRobot)

const avdonRobot = new Avdon(11254, "Avdon5000", "AN233", "Medium", 25)
console.log("🚀 ~ avdonRobot:", avdonRobot)

const veaxRobot = new Veax(25485, "Veaxcel9000", "VX255", "High", 75)
console.log("🚀 ~ veaxRobot:", veaxRobot)

console.log("🚀 ~ avdonRobot.robotData:", avdonRobot.robotData)
console.log("🚀 ~ veaxRobot.robotData:", veaxRobot.robotData)
