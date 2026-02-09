// Exercise 5: Hoisting — The Silent Bug
// Run each block SEPARATELY (comment out the others)
// Run: node 05_hoisting.js
//
// Questions:
// 1. Which blocks throw errors? Which print undefined?
// 2. Why does Block C work but Block D doesn't?
// 3. What rule should you follow to avoid hoisting bugs?

// --- Block A ---
console.log(browserName);
var browserName = "chrome";

// --- Block B (uncomment to test, comment Block A first) ---
// console.log(timeout);
// let timeout = 5000;

// --- Block C (uncomment to test, comment others first) ---
// greet();
// function greet() {
//     console.log("Test suite starting...");
// }

// --- Block D (uncomment to test, comment others first) ---
// startTest();
// var startTest = function () {
//     console.log("Running tests...");
// };
