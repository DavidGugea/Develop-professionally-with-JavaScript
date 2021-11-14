console.log("Start");

setTimeout(
    () => console.log("Macrotask 1"),
    1000
);
setTimeout(
    () => console.log("Macrotask 2"),
    1000
);

queueMicrotask(
    () => console.log("Microtask 1")
);
queueMicrotask(
    () => console.log("Microtask 2")
);

setTimeout(
    () => console.log("Macrotask 3"),
    1000
);
setTimeout(
    () => console.log("Macrotask 4"),
    1000
);

Promise.resolve().then(
    () => console.log("Microtask 3")
);
Promise.resolve().then(
    () => console.log("Microtask 4")
);

console.log("End");