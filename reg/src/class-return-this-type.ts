export {};

class Some {
  other: string = "";
  count: number = 0;
  do(): this & { other: string } & {
    do(arg: string): Some;
    do(arg: number): Some;
    do(arg: number | string): Some;
  } {
    return {
      ...this,
      shit() {
        return this;
      },
    } as any;
  }
}

const some: Some = {
  other: "some",
  count: 0,
  do() {
    this.count += 1;
    this.other += " " + this.count;
    return this as any;
  },
};
const afterDo = some.do().do("adf").do().do(1).do();
// afterDo.shit().
console.log("🚀 ~ afterDo.other:", afterDo.other);
