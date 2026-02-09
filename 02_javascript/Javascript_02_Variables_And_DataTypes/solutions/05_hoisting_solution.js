// Exercise 5 Solution: Hoisting — The Silent Bug
// Run: node 05_hoisting_solution.js

// --- Block A: var hoisting ---
console.log("Block A:", browserName); // undefined (not an error!)
var browserName = "chrome";

// --- Block B: let hoisting (TDZ) ---
// console.log(timeout);
// let timeout = 5000;
// ReferenceError: Cannot access 'timeout' before initialization

// --- Block C: function declaration hoisting ---
greet(); // "Test suite starting..." — works!
function greet() {
    console.log("Block C:", "Test suite starting...");
}

// --- Block D: function expression with var ---
// startTest();
// var startTest = function () { console.log("Running tests..."); };
// TypeError: startTest is not a function

// ANSWERS:
//
// | Block | Result                | Why                                     |
// |-------|-----------------------|-----------------------------------------|
// | A     | prints `undefined`    | var is hoisted, initialized to undefined|
// | B     | ReferenceError (TDZ)  | let is hoisted but NOT initialized      |
// | C     | prints the message    | function declarations are fully hoisted |
// | D     | TypeError             | var startTest is hoisted as undefined,  |
// |       |                       | so calling undefined() is a TypeError   |
//
// 1. Block A prints undefined. Block B and D throw errors.
//    Block C works perfectly.
//
// 2. Block C works because function DECLARATIONS are fully hoisted
//    (both the name AND the body are available before the declaration).
//    Block D fails because var only hoists the NAME (startTest = undefined).
//    The function body is NOT assigned until that line executes.
//    So calling startTest() when it's undefined gives TypeError.
//
// 3. Rule to avoid hoisting bugs:
//    "Always declare variables and functions BEFORE you use them."
//    Use let/const instead of var, and prefer const arrow functions
//    over function expressions with var.
