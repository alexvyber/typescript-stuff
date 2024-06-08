const someFunc = () => console.log("Random Call");

let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));

console.log(sum); // 15
console.log(squares); // [1, 4, 9, 16, 25]

export const Shit = () => (
  <section className=" pt-[40px] pb-[80px]">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex flex-col gap-5">
        <h1 className="mb-11 text-2xl font-bold sm:text-4xl">Популярные вопросы</h1>
        <ul>
          {[1, 2, 3, 4].map(
            (item) => (console.log("🚀 ~ item:", item), someFunc(), someFunc(), someFunc(), (<h1>{item}</h1>))
          )}
        </ul>
      </div>
    </div>
  </section>
);
