import axios, { AxiosResponse } from "axios";

console.log("🚀 ~ axios", axios);

type AssertIsAxiosResponseKey = (key: unknown, res: any) => asserts key is keyof AxiosResponse<any, any>;
const isKeyInAxiosResponse: AssertIsAxiosResponseKey = (key, res) => {
  if (typeof key !== "string") throw new Error("Key not blah-blah");
  if (!(key in res)) throw new Error("Key not blah-blah");
};

const some = axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  Object.keys(res).map((key) => {
    isKeyInAxiosResponse(key, res);

    res[key];
    console.log(key);
  });
});
