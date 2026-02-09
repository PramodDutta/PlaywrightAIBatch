// Exercise 6: Call Stack Tracing
// Run: node 06_call_stack.js
//
// Tasks:
// 1. Write the output order BEFORE running
// 2. Draw the Call Stack at each step (what gets pushed/popped)
// 3. Run and verify

function step1() {
    console.log("Step 1: Open browser");
}

function step2() {
    console.log("Step 2: Navigate to URL");
}

function step3() {
    console.log("Step 3: Click login button");
}

function runTestSuite() {
    console.log("Test Suite: STARTED");
    step1();
    step2();
    step3();
    console.log("Test Suite: COMPLETED");
}

runTestSuite();
