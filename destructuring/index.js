// https://stackoverflow.com/a/72311590
// type DeepPartial<T> = {
//   [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
// };

var data = {
  one: {
    two: {
      three: {
        four: {
          str: "some",
          num: 1
        }
      }
    }
  }
}

var one = data.one

// const {
//   one: { two },
// }: Partial<typeof data> = data;

var three = data.one.two.three
var strAlias = data.one.two.three.four.str
