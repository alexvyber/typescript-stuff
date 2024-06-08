export {};

type CatOwner = { catName: string };
type DogOwner = { dogName: string };

type HasCatOrDog = CatOwner | DogOwner;

const one: HasCatOrDog = { catName: "cat" };
const two: HasCatOrDog = { dogName: "dog" };

const three: HasCatOrDog = { ...one, ...two };
const four: HasCatOrDog = { catName: "cat", dogName: "dog" };

type HasCatAndDog = CatOwner & DogOwner;

const five: HasCatAndDog = { ...one, ...two };
