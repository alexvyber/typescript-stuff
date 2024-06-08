let arr = ["a", "b", "c"];

for (let item of arr) {
  console.log(item);
}

for (let item of arr.values()) {
  console.log(item);
}

let arr2 = ["a", "b", "c"];

let ite = arr2.values();

// @ts-ignore
arr2[Symbol.iterator] = function () {
  let that = this;
  let index = 0;
  return {
    next() {
      if (index < that.length) {
        return {
          value: that[index++].toUpperCase(),
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

let arr3 = ["a", "b", "c"] as const;

let entries = arr3.entries();

entries === entries[Symbol.iterator](); // true

function* operate_db() {
  try {
    let i = 1;

    console.log(i++ + ": verify user ID");
    yield "ID checked";

    console.log(i++ + ": connect to db");
    yield "db connected";

    console.log(i++ + ": send request to db");
    yield "request sent";

    console.log(i++ + ": receive db response");
    yield "response received";

    console.log(i++ + ": disconnect from db");
    yield "db disconnected";
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("ERR: " + error.message);
    }
  }
}

let go = operate_db();

go.next(); // 1
go.throw(new Error("Some shit happend"));
go.next(); // 2
go.next(); // 3
go.return();
go.next(); // 4
go.next(); // 5
go.next(); // 6

function* commodity_list() {
  yield "Fruit:";
  yield* ["apple", "orange"];
  yield "Vegetable:";
  yield* vegetable_list();
  yield "Diary:";
}

function* vegetable_list() {
  let index = 1;
  yield index++ + ": celery";
  yield index++ + ": cabbage";
  yield index++ + ": mushroom";
}

let commodity = commodity_list();
for (let item of commodity) {
  console.log(item);
}
