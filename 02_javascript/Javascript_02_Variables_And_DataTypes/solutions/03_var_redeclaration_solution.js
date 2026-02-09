// Exercise 3 Solution: var Allows Re-declaration
// Run: node 03_var_redeclaration_solution.js

// Part A: var allows re-declaration — no error!
var browser = "chromium";
console.log("First:", browser);

var browser = "firefox";
console.log("Second:", browser);

var browser = "webkit";
console.log("Third:", browser);

// OUTPUT:
// First: chromium
// Second: firefox
// Third: webkit
//
// Part B: let does NOT allow re-declaration
// If you run this in a separate file:
//   let browser = "chromium";
//   let browser = "firefox";
// You get: SyntaxError: Identifier 'browser' has already been declared
//
// ANSWER:
// Why is re-declaration with var risky in a large test file?
//
// Imagine a 500-line test file. You declare `var browser = "chromium"` on line 10.
// On line 350, another developer (or you, months later) writes `var browser = "firefox"`
// not realizing it already exists. No error is thrown!
//
// Now every test after line 350 uses "firefox" instead of "chromium".
// The tests might pass or fail silently — you'd spend hours debugging.
//
// With `let`, the second declaration throws an immediate error,
// catching the bug at the exact moment you make it.
//
// Rule: ALWAYS use let/const. Never use var in new code.
