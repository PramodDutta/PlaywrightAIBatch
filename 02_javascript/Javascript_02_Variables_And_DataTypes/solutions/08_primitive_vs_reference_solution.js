// Exercise 8 Solution: Primitive vs Reference Types
// Run: node 08_primitive_vs_reference_solution.js

// Primitive — copies the VALUE
let browser1 = "chromium";
let browser2 = browser1;
browser2 = "firefox";

console.log("browser1:", browser1);
console.log("browser2:", browser2);

console.log("---");

// Reference — copies the REFERENCE (pointer)
let config1 = { browser: "chromium", headless: true };
let config2 = config1;
config2.browser = "firefox";

console.log("config1:", config1);
console.log("config2:", config2);

// OUTPUT:
// browser1: chromium
// browser2: firefox
// ---
// config1: { browser: 'firefox', headless: true }   <-- CHANGED!
// config2: { browser: 'firefox', headless: true }
//
// ANSWERS:
//
// 1. No — changing browser2 did NOT affect browser1.
//    Primitives (string, number, boolean) copy the VALUE.
//    browser2 gets its own independent copy of "chromium".
//    Changing browser2 only changes browser2.
//
//    Memory:
//    browser1 → "chromium" (own copy)
//    browser2 → "firefox"  (own copy, changed independently)
//
// 2. YES — changing config2.browser DID affect config1!
//    Objects are REFERENCE types. config2 = config1 copies the REFERENCE,
//    not the object. Both variables point to the SAME object in memory.
//
//    Memory:
//    config1 ──┐
//              ├──→ { browser: "firefox", headless: true }  (SAME object)
//    config2 ──┘
//
// 3. Why this matters for test automation:
//    If you pass a config object to a test function and that function
//    modifies it, the ORIGINAL config is also changed!
//    This can cause flaky tests where one test's changes affect another.
//
//    To avoid this, create a copy:
//    let config2 = { ...config1 };          // Spread operator (shallow copy)
//    let config2 = JSON.parse(JSON.stringify(config1)); // Deep copy

console.log("\n--- Fix: using spread operator ---");
let configA = { browser: "chromium", headless: true };
let configB = { ...configA }; // Creates a NEW object (copy)
configB.browser = "webkit";

console.log("configA:", configA); // Still chromium!
console.log("configB:", configB); // webkit — independent copy
