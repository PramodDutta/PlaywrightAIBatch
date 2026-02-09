// Exercise 10: Build a Test Summary
// Run: node 10_test_summary.js
//
// Replace each ______ with var, let, or const — whichever is the best choice.
// Justify each decision!

______ TEST_SUITE = "Smoke Tests";
______ BASE_URL = "https://staging.example.com";
______ BROWSER = "chromium";
______ totalTests = 0;
______ passedTests = 0;
______ failedTests = 0;
______ isComplete = false;

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
