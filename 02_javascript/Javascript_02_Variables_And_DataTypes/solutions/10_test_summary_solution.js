// Exercise 10 Solution: Build a Test Summary
// Run: node 10_test_summary_solution.js

const TEST_SUITE = "Smoke Tests";                 // const — suite name never changes
const BASE_URL = "https://staging.example.com";   // const — URL is fixed for the run
const BROWSER = "chromium";                        // const — browser is fixed for the run
let totalTests = 0;                                // let — will be updated after running
let passedTests = 0;                               // let — will be updated after running
let failedTests = 0;                               // let — will be updated after running
let isComplete = false;                            // let — will change to true when done

// Simulate running 3 tests
totalTests = 3;
passedTests = 2;
failedTests = 1;
isComplete = true;

// Print summary
console.log("Suite:", TEST_SUITE);
console.log("URL:", BASE_URL);
console.log("Browser:", BROWSER);
console.log("Total:", totalTests, "(type:", typeof totalTests + ")");
console.log("Passed:", passedTests, "(type:", typeof passedTests + ")");
console.log("Failed:", failedTests, "(type:", typeof failedTests + ")");
console.log("Complete:", isComplete, "(type:", typeof isComplete + ")");

// OUTPUT:
// Suite: Smoke Tests
// URL: https://staging.example.com
// Browser: chromium
// Total: 3 (type: number)
// Passed: 2 (type: number)
// Failed: 1 (type: number)
// Complete: true (type: boolean)
//
// JUSTIFICATION:
//
// | Variable     | Keyword | Why                                          |
// |-------------|---------|----------------------------------------------|
// | TEST_SUITE  | const   | Suite name is fixed, should never change      |
// | BASE_URL    | const   | URL is set once per test run, never changes   |
// | BROWSER     | const   | Browser choice is fixed for the run           |
// | totalTests  | let     | Starts at 0, gets updated after tests run     |
// | passedTests | let     | Starts at 0, incremented as tests pass        |
// | failedTests | let     | Starts at 0, incremented as tests fail        |
// | isComplete  | let     | Starts false, becomes true when suite finishes|
//
// THE GOLDEN RULE:
// - Use `const` by default for everything
// - Only use `let` when you KNOW the value will change
// - NEVER use `var`
//
// This is the exact pattern used in real Playwright test frameworks:
// - const for config (BASE_URL, TIMEOUT, BROWSER)
// - let for state (testResult, currentPage, isLoggedIn)
