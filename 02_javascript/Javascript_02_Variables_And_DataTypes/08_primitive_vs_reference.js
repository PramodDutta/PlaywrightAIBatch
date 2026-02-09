// Exercise 8: Primitive vs Reference Types
// Run: node 08_primitive_vs_reference.js
//
// Questions:
// 1. Did changing browser2 affect browser1?
// 2. Did changing config2.browser affect config1? Why?
// 3. Why is this important when sharing test config objects between test functions?

// Primitive — copies the value
let browser1 = "chromium";
let browser2 = browser1;
browser2 = "firefox";

console.log("browser1:", browser1);
console.log("browser2:", browser2);

console.log("---");

// Reference — copies the reference
let config1 = { browser: "chromium", headless: true };
let config2 = config1;
config2.browser = "firefox";

console.log("config1:", config1);
console.log("config2:", config2);
