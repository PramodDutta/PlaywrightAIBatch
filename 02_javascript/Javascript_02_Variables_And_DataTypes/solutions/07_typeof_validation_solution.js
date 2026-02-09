// Exercise 7 Solution: typeof — Validating Test Data
// Run: node 07_typeof_validation_solution.js

let testCaseName = "Verify Login";
let stepCount = 5;
let isPassed = true;
let startTime;
let endTime = undefined;
let bugId = null;
let testId = BigInt(9007199254740991);

console.log("testCaseName:", typeof testCaseName);
console.log("stepCount:", typeof stepCount);
console.log("isPassed:", typeof isPassed);
console.log("startTime:", typeof startTime);
console.log("endTime:", typeof endTime);
console.log("bugId:", typeof bugId);
console.log("testId:", typeof testId);

// OUTPUT:
// testCaseName: string
// stepCount: number
// isPassed: boolean
// startTime: undefined
// endTime: undefined
// bugId: object         <-- SURPRISE!
// testId: bigint
//
// ANSWERS:
//
// 1. typeof bugId returns "object" — NOT "null"!
//    This is a famous BUG in JavaScript that has existed since 1995.
//    It was never fixed because too much existing code depends on it.
//    To properly check for null, use: bugId === null (strict equality)
//
// 2. No difference — both startTime and endTime return "undefined".
//    `let startTime;` → automatically undefined (not initialized)
//    `let endTime = undefined;` → explicitly set to undefined
//    They are the same value and same type.
//
// 3. BigInt is useful in testing when dealing with:
//    - Database IDs that exceed Number.MAX_SAFE_INTEGER (9007199254740991)
//    - Timestamps in nanoseconds
//    - Large transaction or order IDs
//    - Any system that uses 64-bit integers
//
// typeof cheat sheet:
// | Value         | typeof result |
// |---------------|---------------|
// | "hello"       | "string"      |
// | 42            | "number"      |
// | true          | "boolean"     |
// | undefined     | "undefined"   |
// | null          | "object" (!)  |
// | 123n          | "bigint"      |
// | Symbol("x")   | "symbol"      |
// | {}            | "object"      |
// | []            | "object" (!)  |
// | function(){}  | "function"    |
