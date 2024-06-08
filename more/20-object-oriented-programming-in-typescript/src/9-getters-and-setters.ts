export class Robot {
  public durability?: string;

  #private = "asdfasdf";

  constructor(
    public readonly id: number,
    public readonly model: string,
    public name: string,
    private _sentient: boolean
  ) {}

  walk(): void {
    console.log("This robot can walk");
  }

  get sentient(): boolean {
    return this._sentient;
  }

  set sentient(sentient: boolean) {
    this._sentient = sentient;
  }

  get private(): string {
    return this.#private;
  }

  set private(arg: string) {
    this.#private = arg;
  }
}

let robot = new Robot(1051, "EX69", "Avdon", true);

console.log(robot.sentient);
robot.sentient = false;
console.log(robot.sentient);

console.log("🚀 ~ robot.private:", robot.private);
robot.private = "qwerqwer";
console.log("🚀 ~ robot.private:", robot.private);
