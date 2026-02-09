// Exercise 6: Temporal Dead Zone (TDZ)
// Run each scenario SEPARATELY (comment out the others)
// Run: node 06_temporal_dead_zone.js
//
// Tasks:
// 1. Run each scenario separately
// 2. For Scenario 2 and 3, identify the TDZ — from which line to which line?
// 3. Write a one-line rule: "To avoid TDZ errors, always..."

// --- Scenario 1: var ---
console.log(a);
var a = "Playwright";

// --- Scenario 2: let (uncomment to test, comment Scenario 1 first) ---
// console.log(b);
// let b = "Playwright";

// --- Scenario 3: const (uncomment to test, comment others first) ---
// console.log(c);
// const c = "Playwright";
