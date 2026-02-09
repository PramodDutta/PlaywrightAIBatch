// Exercise 7: typeof — Validating Test Data
// Run: node 07_typeof_validation.js
//
// Questions:
// 1. What does typeof bugId return? Is it what you expected?
// 2. Is there any difference between startTime and endTime in typeof?
// 3. When would you use BigInt in testing?

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
