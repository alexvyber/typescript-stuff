(async () => {
  type SomeUserDefinedType = {};

  const res = await fetch("https://zalupa-api.com/shit/1");
  //    ^?

  const dataFromApi = await res.json();
  //    ^?

  return Math.random() > 0.5 ? (dataFromApi as SomeUserDefinedType) : (dataFromApi as unknown as SomeUserDefinedType);
})();
