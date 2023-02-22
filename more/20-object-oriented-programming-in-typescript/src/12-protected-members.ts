// abstract class Robot {
//   constructor(
//     private name: string,
//     protected model: string,
//     private durability: string,
//     private weight: number
//   ) {}

//   get robotData() {
//     return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`;
//   }
// }

// class Avdon extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }

//   public getModel(model: string) {
//     return (this.model = model);
//   }
// }

// let avdonRobot = new Avdon(11254, "Avdon5000", "AN233", "Medium", 25);
// console.log(avdonRobot.getModel("AN233"));
