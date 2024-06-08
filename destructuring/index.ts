// https://stackoverflow.com/a/72311590
// type DeepPartial<T> = {
//   [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
// };

const data = {
  one: {
    two: {
      three: {
        four: {
          str: "some",
          num: 1,
        },
      },
    },
  },
};

const { one } = data;

const {
  one: { two },
}: Partial<typeof data> = data;

const {
  one: {
    two: { three },
  },
} = data;

const {
  one: {
    two: {
      three: {
        four: { str: strAliast },
      },
    },
  },
} = data;
