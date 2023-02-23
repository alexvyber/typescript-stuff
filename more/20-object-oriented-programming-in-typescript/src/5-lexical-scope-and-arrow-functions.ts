export class MyProduct {
  someStuff = "some stuff"
  onlineCourse() {
    const productName: string = "TS Bootcamp"

    console.log(this)

    setTimeout(
      function () {
        let newProduct: string = "Tailwind CSS Bootcamp"

        console.log(productName, newProduct)
        console.log(this)
      }.bind(this),
      100,
    )

    const that = this

    setTimeout(function () {
      console.log("🚀 ~ MyProduct ~ that.someStuff:", that.someStuff)
    }, 100)

    setTimeout(() => {
      console.log("🚀 ~ MyProduct ~ setTimeout ~ this.someStuff:", this.someStuff)
    }, 100)
  }
}

let product = new MyProduct()

product.onlineCourse()
