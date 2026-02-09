// Exercise 6 Solution: Call Stack Tracing
// Run: node 06_call_stack_solution.js

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

// OUTPUT (in order):
// Test Suite: STARTED
// Step 1: Open browser
// Step 2: Navigate to URL
// Step 3: Click login button
// Test Suite: COMPLETED
//
// CALL STACK TRACE:
//
// Step 1: [main()] → V8 starts executing global code
// Step 2: [main(), runTestSuite()] → runTestSuite() is called, pushed to stack
// Step 3: Prints "Test Suite: STARTED"
// Step 4: [main(), runTestSuite(), step1()] → step1() is called, pushed to stack
// Step 5: Prints "Step 1: Open browser"
// Step 6: [main(), runTestSuite()] → step1() finishes, popped from stack
// Step 7: [main(), runTestSuite(), step2()] → step2() is called, pushed to stack
// Step 8: Prints "Step 2: Navigate to URL"
// Step 9: [main(), runTestSuite()] → step2() finishes, popped from stack
// Step 10: [main(), runTestSuite(), step3()] → step3() is called, pushed to stack
// Step 11: Prints "Step 3: Click login button"
// Step 12: [main(), runTestSuite()] → step3() finishes, popped from stack
// Step 13: Prints "Test Suite: COMPLETED"
// Step 14: [main()] → runTestSuite() finishes, popped from stack
// Step 15: [] → main() finishes, stack is empty
//
// Key takeaway: JavaScript is single-threaded.
// Functions are pushed onto the stack when called, and popped when they return.
// Only one function runs at a time (the one on top of the stack).
