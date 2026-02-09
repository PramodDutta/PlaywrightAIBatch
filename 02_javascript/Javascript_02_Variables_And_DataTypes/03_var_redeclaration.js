// Exercise 3: var Allows Re-declaration
// Run: node 03_var_redeclaration.js
//
// Question: Why is re-declaration with var risky in a large test file?

// Part A: var allows re-declaration
var browser = "chromium";
console.log("First:", browser);

var browser = "firefox";
console.log("Second:", browser);

var browser = "webkit";
console.log("Third:", browser);

// Part B: Uncomment below and run in a SEPARATE file to see the error
// let browser = "chromium";
// let browser = "firefox"; // What happens?
