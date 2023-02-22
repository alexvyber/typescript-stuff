// abstract class Robot {
//   constructor(
//     public name: string,
//     public model: string,
//     public durability: string,
//     public weight: number
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
// }

// class Veax extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// let avdonRobot = new Avdon(11254, "Avdon5000", "AN233", "Medium", 25);
// console.log(avdonRobot);

// let veaxRobot = new Veax(25485, "Veaxcel9000", "VX255", "High", 75);
// console.log(veaxRobot);
