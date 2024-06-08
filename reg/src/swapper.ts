export class Swapper<T> {
  constructor(private arr: T[]) {}

  swap(one: number, two: number): this {
    if (one < 0 || one >= this.arr.length || two < 0 || two >= this.arr.length) {
      return this;
    }

    const temp = this.arr[one];
    this.arr[one] = this.arr[two];
    this.arr[two] = temp;

    return this;
  }

  get array(): T[] {
    return this.arr;
  }

  log(): this {
    return this;
  }
}
