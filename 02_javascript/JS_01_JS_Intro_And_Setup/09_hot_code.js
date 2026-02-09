// Exercise 9: When Does TurboFan Kick In?
// Run: node 09_hot_code.js
// Run with optimization trace: node --trace-opt 09_hot_code.js
//
// Questions:
// 1. Which version will TurboFan optimize — A or B? Why?
// 2. What does the Profiler look for to decide what is "hot" code?
// 3. Can you spot optimization messages in the --trace-opt output?

function add(a, b) {
    return a + b;
}

// Version A: Call once
console.log("Single call:", add(5, 10));

// Version B: Call 10000 times
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);
