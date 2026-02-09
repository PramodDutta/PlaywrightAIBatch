// Exercise 6 Solution: Temporal Dead Zone (TDZ)
// Run: node 06_temporal_dead_zone_solution.js

// --- Scenario 1: var ---
console.log("Scenario 1 (var):", a); // undefined
var a = "Playwright";
console.log("After assignment:", a); // "Playwright"

// --- Scenario 2: let ---
// console.log(b);        // ReferenceError: Cannot access 'b' before initialization
// let b = "Playwright";

// --- Scenario 3: const ---
// console.log(c);        // ReferenceError: Cannot access 'c' before initialization
// const c = "Playwright";

// ANSWERS:
//
// Scenario 1 (var):
//   Output: undefined
//   var is hoisted and initialized to undefined.
//   No TDZ exists for var.
//
// Scenario 2 (let):
//   Output: ReferenceError
//   let IS hoisted, but it's NOT initialized.
//   TDZ: from the start of the block to the `let b = ...` line.
//   Accessing `b` in the TDZ throws a ReferenceError.
//
//   TDZ for Scenario 2:
//   Line 1: ─┐
//             │ ← TDZ (Temporal Dead Zone)
//   Line 2: ─┘ let b = "Playwright"; ← TDZ ends here
//
// Scenario 3 (const):
//   Output: ReferenceError
//   Same as let — const is hoisted but not initialized.
//   TDZ: from start of block to the `const c = ...` line.
//
// One-line rule:
// "To avoid TDZ errors, always declare let/const variables
//  at the TOP of their scope, BEFORE using them."
//
// Why TDZ exists:
// TDZ is a safety feature. It catches bugs where you accidentally
// use a variable before it's ready. With var, you'd get `undefined`
// silently, which is much harder to debug.
