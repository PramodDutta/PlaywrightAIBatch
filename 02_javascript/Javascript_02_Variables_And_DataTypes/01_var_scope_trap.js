// Exercise 1: var Scope Trap in Test Functions
// Run: node 01_var_scope_trap.js
//
// Predict the output FIRST, then run!
//
// Questions:
// 1. What is the value after the if block? Why?
// 2. Did the if block change the function-level variable?
// 3. Why is this dangerous in test automation?

var testUrl = "https://staging.example.com";

function runLoginTest() {
    var testUrl = "https://dev.example.com";
    console.log("Inside function:", testUrl);

    if (true) {
        var testUrl = "https://prod.example.com";
        console.log("Inside if block:", testUrl);
    }

    console.log("After if block:", testUrl);
}

runLoginTest();
console.log("Global:", testUrl);
