// Exercise 9 Solution: When Does TurboFan Kick In?
// Run: node 09_hot_code_solution.js
// Run with trace: node --trace-opt 09_hot_code_solution.js

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

// OUTPUT:
// Single call: 15
// After 10000 calls: 19999
//
// ANSWERS:
//
// 1. TurboFan will optimize Version B (the loop), NOT Version A.
//    Why? Because TurboFan only kicks in for "hot" code — code that
//    runs many times. A single call (Version A) is not worth optimizing.
//    The 10,000 iterations in Version B make the `add` function "hot".
//
// 2. The Profiler looks for:
//    - Functions that are called many times (high call count)
//    - Loops that execute many iterations
//    - Consistent argument types (always numbers, always strings, etc.)
//    When it detects these patterns, it marks the code as "hot" and
//    sends it to TurboFan for optimization.
//
// 3. When running with --trace-opt, you should see messages like:
//    [marking <add> for optimization]
//    [compiling method <add> using TurboFan]
//    [completed optimizing <add>]
//
//    This confirms TurboFan compiled `add()` to machine code
//    after it was called enough times in the loop.
//
// Key takeaway for SDETs:
// - Write consistent code (same types) so V8 can optimize it
// - Avoid mixing types in the same function (numbers + strings)
//   as this can cause "deoptimization"
