interface CarBasics {
  engine: string
  gearbox: string
}

interface SomeCar {
  brand: string
  model: string
  plate: string
}

class CarBasics {
  constructor(engine: string, _shit: number) {
    this.engine = engine
    this.gearbox = "Manual"
  }

  start = function () {
    console.log("Engine on...")
  }

  revEngine() {
    console.log("Vroom...")
  }

  static shutEngine() {
    console.log("Engine shut...")
  }
}

class MyCar extends CarBasics implements SomeCar {
  brand: string
  model: string
  plate: string

  constructor(engine: string) {
    super(engine.toUpperCase(), 1233)
    this.gearbox = "new gearbox prop. val".toUpperCase()
    this.brand = "Toyota"
    this.model = "Supra"
    this.plate = "NE19 HAO"
  }

  revEngine() {
    super.revEngine()
    console.log("WWWWWWWWWWWWrom...")
  }

  static shutEngine() {
    super.shutEngine()
    console.log("Engine shut...".toUpperCase())
  }
}

let car = new MyCar("Diesel")
console.log("🚀 ~ car", car)

car.revEngine()

// @ts-ignore
car.constructor.shutEngine()
