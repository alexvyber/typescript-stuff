import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";
// console.time("time");
// let output: string = "";
// for (let i = 0; i < 1000_000; i++) {
// console.log(i)
// if (i % 100_000 === 0) console.log("a");
// output += i + "\n";
// }
// console.log(output);
// console.timeEnd("time");

const THREAD_COUNT = 16;
const numberOfLines = 100;

const linesPerWorker = Math.floor(numberOfLines / THREAD_COUNT);

type Msg = {
  type: "done" | "data";
  data: any;
  workerID: number;
};

let workerID = 0;

if (isMainThread) {
  const strArr: string[] = new Array(16);
  let inFlight = THREAD_COUNT;
  let count = 0;

  for (let i = 0; i < THREAD_COUNT; i++) {
    const worker = new Worker(__filename, {
      workerData: { start: linesPerWorker * workerID, workerID: ++workerID },
    });

    worker.on("message", (msg: Msg) => {
      if (msg.type === "done") {
        console.log(msg.data);
      }
    });
  }
} else {
  let str = "";
  for (let i = workerData.start; i < workerData.start + linesPerWorker; i++) {
    str += i + "\n";
  }

  // @ts-ignore
  parentPort.postMessage({
    type: "done",
    data: str,
    workerID: workerData.workerID,
  } satisfies Msg);
}

function assertParentPort(
  port: import("worker_threads").MessagePort | null
): asserts port is import("worker_threads").MessagePort {
  if (port === null) throw new Error("aaaaaaaa");
}
