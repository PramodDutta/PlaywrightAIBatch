// Exercise 4: const for Test Configuration
// Run: node 04_const_config.js
//
// Question: Why is const ideal for test config values?

const BASE_URL = "https://app.example.com";
const TIMEOUT = 30000;
const BROWSER = "chromium";

console.log(BASE_URL, TIMEOUT, BROWSER);

// Uncomment one at a time and run:
// BASE_URL = "https://other.com";     // What happens?
// const BASE_URL = "https://new.com"; // What happens?

// Bonus — const with objects:
const config = { browser: "chromium", headless: true };
config.headless = false;
console.log(config); // Does this work? Why?
