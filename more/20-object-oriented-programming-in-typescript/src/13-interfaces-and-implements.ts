interface RobotInterface {
  name: string;
  durability: string;
  weight: number;

  robotData(): string;
}

abstract class Robot implements RobotInterface {
  constructor(
    public name: string,
    protected model: string,
    public durability: string,
    public weight: number
  ) {}

  robotData() {
    return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`;
  }
}

interface AvdonInterface {
  id: number;
  durability: string;
  weight: number;

  getModel(model: string): string;
}

class Avdon extends Robot implements AvdonInterface {
  constructor(
    public id: number,
    name: string,
    model: string,
    durability: string,
    weight: number
  ) {
    super(name, model, durability, weight);
  }

  public getModel(model: string) {
    return (this.model = model);
  }
}

interface VeaxInterface {
  id: number;
  durability: string;
  weight: number;
}

class Veax extends Robot implements VeaxInterface {
  constructor(
    public id: number,
    name: string,
    model: string,
    durability: string,
    weight: number
  ) {
    super(name, model, durability, weight);
  }
}

const avdonRobot = new Avdon(11254, "Avdon5000", "AN233", "Medium", 25);
const veaxRobot = new Veax(25485, "Veaxcel9000", "VX255", "High", 75);
