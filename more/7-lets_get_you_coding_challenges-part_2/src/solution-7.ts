// Challenge 7
function getNames(data: [string, number][]): string[] {
  return data.map((name) => name[0]);
}

console.log(
  getNames([
    ["John", 35],
    ["Jane", 45],
    ["Jade", 55],
  ])
);
