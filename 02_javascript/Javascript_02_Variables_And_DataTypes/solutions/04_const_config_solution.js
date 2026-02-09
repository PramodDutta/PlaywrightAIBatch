// Exercise 4 Solution: const for Test Configuration
// Run: node 04_const_config_solution.js

const BASE_URL = "https://app.example.com";
const TIMEOUT = 30000;
const BROWSER = "chromium";

console.log(BASE_URL, TIMEOUT, BROWSER);

// Reassignment attempt:
// BASE_URL = "https://other.com";
// Error: TypeError: Assignment to constant variable.

// Re-declaration attempt:
// const BASE_URL = "https://new.com";
// Error: SyntaxError: Identifier 'BASE_URL' has already been declared

// Bonus — const with objects:
const config = { browser: "chromium", headless: true };
config.headless = false;
console.log(config);

// OUTPUT:
// https://app.example.com 30000 chromium
// { browser: 'chromium', headless: false }    <-- This WORKS!
//
// ANSWER:
// Why does config.headless = false work with const?
//
// const prevents REASSIGNMENT of the variable itself, not mutation.
// - config = {} would fail (reassignment)
// - config.headless = false works (mutation of the object's property)
//
// Think of it like: const locks the "box" (variable), not the "contents" (object).
// The box always points to the same object, but the object's properties can change.
//
// Why is const ideal for test config values?
// - BASE_URL, TIMEOUT, BROWSER should NEVER change during a test run
// - If someone accidentally tries to overwrite them, const throws an error immediately
// - Convention: UPPER_SNAKE_CASE for const values (BASE_URL, MAX_RETRIES, etc.)
// - This is the standard pattern in Playwright test frameworks
