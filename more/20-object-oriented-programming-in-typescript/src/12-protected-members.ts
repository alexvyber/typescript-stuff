export abstract class Robot {
  constructor(
    private name: string,
    protected model: string,
    private durability: string,
    private weight: number
  ) {}

  get robotData() {
    return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`;
  }
}

class Avdon extends Robot {
  constructor(
    public id: number,
    name: string,
    model: string,
    durability: string,
    weight: number,
    protected some: number
  ) {
    super(name, model, durability, weight);
    this.some = some;
  }

  public changeProtected(some: number) {
    return (this.some = some);
  }

  public getModel(model: string) {
    return (this.model = model);
  }
}

let avdonRobot = new Avdon(11254, "Avdon5000", "AN233", "Medium", 25, 111111111);
console.log(avdonRobot.getModel("aaaaaaaaaaaaaaaaaaaaaaaaaaa"));

avdonRobot.changeProtected(99999999999999);

console.log("🚀 ~ avdonRobot:", avdonRobot);
