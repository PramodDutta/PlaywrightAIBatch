// Exercise 7 Solution: Multiple Script Files (File B)
// Run: node 07b_runner_solution.js

console.log("Starting test runner...");
console.log("Browser: chromium");
console.log("Headless: true");

// OUTPUT:
// Starting test runner...
// Browser: chromium
// Headless: true
//
// ANSWERS:
//
// 1. No — running 07a_config_solution.js does NOT affect 07b_runner_solution.js
//
// 2. Why? Because each file runs in its own separate V8 execution context.
//    - When you run `node 07a_config_solution.js`, V8 creates a new context,
//      parses the file, executes it, and then destroys the context.
//    - When you then run `node 07b_runner_solution.js`, a completely NEW
//      V8 context is created. It has no memory of the previous run.
//
// 3. What this tells us:
//    - Each `node <file>` command starts a fresh V8 instance
//    - Variables, functions, and state do NOT persist between runs
//    - To share data between files, you need modules (import/export)
//      which we'll learn later in the course
//    - This is actually good for test isolation — each test file
//      starts with a clean slate
