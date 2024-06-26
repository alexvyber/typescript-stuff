export class Robot {
  #superPrivate = "Some Private Stuff";

  constructor(
    public readonly id: number,
    public readonly model: string,
    public name: string,
    private sentient: boolean
  ) {
    this.id = id;
    this.model = model;
    this.name = name;
    this.sentient = sentient;
  }

  walk(): void {
    console.log("This robot can walk");
  }

  abilityTothink(): boolean {
    return this.sentient;
  }

  getPrivateStuff() {
    return this.#superPrivate;
  }
}

let robot = new Robot(1051, "EX69", "Avdon", true);

console.log(robot);
console.log(robot.abilityTothink());

// Property 'sentient' is private and only accessible within class 'Robot'.
// robot.sentient

// @ts-ignore
console.log("🚀 ~ robot.sentient:", robot.sentient); // typecheck error

// @ts-ignore
console.log("🚀 ~ robot.#superPrivate:", robot.#superPrivate); // runtime error
