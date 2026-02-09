// Exercise 10 Solution: End-to-End V8 Pipeline Trace
// Run: node 10_v8_pipeline_trace_solution.js

let testName = "Login Test";
let steps = 3;
let passed = true;
console.log(testName, steps, passed);

// OUTPUT:
// Login Test 3 true
//
// ===== COMPLETE V8 PIPELINE TRACE =====
//
// PHASE 1: SOURCE CODE
// The raw text: let testName = "Login Test"; let steps = 3; let passed = true; console.log(testName, steps, passed);
//
//
// PHASE 2: TOKENS
// Token          | Type
// ---------------|------------------
// let            | keyword
// testName       | identifier
// =              | operator
// "Login Test"   | string literal
// ;              | punctuation
// let            | keyword
// steps          | identifier
// =              | operator
// 3              | number literal
// ;              | punctuation
// let            | keyword
// passed         | identifier
// =              | operator
// true           | boolean literal
// ;              | punctuation
// console        | identifier
// .              | punctuation
// log            | identifier
// (              | punctuation
// testName       | identifier
// ,              | punctuation
// steps          | identifier
// ,              | punctuation
// passed         | identifier
// )              | punctuation
// ;              | punctuation
// Total: 26 tokens
//
//
// PHASE 3: AST (Abstract Syntax Tree)
// Program
// ├── VariableDeclaration (let)
// │   └── VariableDeclarator
// │       ├── Identifier: "testName"
// │       └── Literal: "Login Test"
// ├── VariableDeclaration (let)
// │   └── VariableDeclarator
// │       ├── Identifier: "steps"
// │       └── Literal: 3
// ├── VariableDeclaration (let)
// │   └── VariableDeclarator
// │       ├── Identifier: "passed"
// │       └── Literal: true
// └── ExpressionStatement
//     └── CallExpression
//         ├── MemberExpression
//         │   ├── Identifier: "console"
//         │   └── Identifier: "log"
//         └── Arguments
//             ├── Identifier: "testName"
//             ├── Identifier: "steps"
//             └── Identifier: "passed"
//
//
// PHASE 4: BYTECODE (approximate Ignition output)
// LdaConstant [0]          // Load "Login Test"
// Star r0                  // Store in r0 (testName)
// LdaSmi [3]               // Load small integer 3
// Star r1                  // Store in r1 (steps)
// LdaTrue                  // Load boolean true
// Star r2                  // Store in r2 (passed)
// LdaGlobal [console]      // Load the console object
// LdaNamedProperty [log]   // Get the log method
// Ldar r0                  // Load testName
// Ldar r1                  // Load steps
// Ldar r2                  // Load passed
// CallProperty3            // Call console.log with 3 arguments
//
//
// PHASE 5: CALL STACK
// Step 1: [main()]                          → global code starts
// Step 2: Memory allocated for testName, steps, passed
// Step 3: Values assigned: "Login Test", 3, true
// Step 4: [main(), console.log()]           → console.log pushed to stack
// Step 5: console.log reads testName="Login Test", steps=3, passed=true
// Step 6: Prints "Login Test 3 true" to terminal
// Step 7: [main()]                          → console.log popped from stack
// Step 8: []                                → main() finishes, stack empty
//
//
// PHASE 6: OUTPUT
// Login Test 3 true
//
//
// PHASE 7: TURBOFAN OPTIMIZATION
// Will TurboFan optimize this? NO.
// Why? Because this code runs only ONCE. There are no loops,
// no repeated function calls, and no hot code paths.
// The Profiler sees no benefit in optimizing it.
// Ignition's bytecode is sufficient for a one-time execution.
//
//
// ===== SUMMARY =====
// Source Code → Parser (26 tokens) → AST (4 nodes) → Ignition (~12 bytecodes)
// → Call Stack (push/pop) → Output "Login Test 3 true" → No TurboFan needed
