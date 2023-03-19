"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_worker_threads_1 = require("node:worker_threads");
// console.time("time");
// let output: string = "";
// for (let i = 0; i < 1000_000; i++) {
// console.log(i)
// if (i % 100_000 === 0) console.log("a");
// output += i + "\n";
// }
// console.log(output);
// console.timeEnd("time");
var THREAD_COUNT = 16;
var numberOfLines = 100;
var linesPerWorker = Math.floor(numberOfLines / THREAD_COUNT);
var workerID = 0;
if (node_worker_threads_1.isMainThread) {
    var strArr = new Array(16);
    var inFlight = THREAD_COUNT;
    var count = 0;
    for (var i = 0; i < THREAD_COUNT; i++) {
        var worker = new node_worker_threads_1.Worker(__filename, {
            workerData: { start: linesPerWorker * workerID, workerID: ++workerID },
        });
        worker.on("message", function (msg) {
            if (msg.type === "done") {
                console.log(msg.data);
            }
        });
    }
}
else {
    var str = "";
    for (var i = node_worker_threads_1.workerData.start; i < node_worker_threads_1.workerData.start + linesPerWorker; i++) {
        str += i + "\n";
    }
    // @ts-ignore
    node_worker_threads_1.parentPort.postMessage({
        type: "done",
        data: str,
        workerID: node_worker_threads_1.workerData.workerID,
    });
}
function assertParentPort(port) {
    if (port === null)
        throw new Error("aaaaaaaa");
}
