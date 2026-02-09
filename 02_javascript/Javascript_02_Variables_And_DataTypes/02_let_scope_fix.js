// Exercise 2: let Fixes the Scope Problem
// Run: node 02_let_scope_fix.js
//
// Predict the output FIRST, then run!
//
// Questions:
// 1. What changed in the output compared to Exercise 1?
// 2. Which value does "After if block" print now? Why?
// 3. As a tester, which keyword (var or let) would you prefer? Why?

let testUrl = "https://staging.example.com";

function runLoginTest() {
    let testUrl = "https://dev.example.com";
    console.log("Inside function:", testUrl);

    if (true) {
        let testUrl = "https://prod.example.com";
        console.log("Inside if block:", testUrl);
    }

    console.log("After if block:", testUrl);
}

runLoginTest();
console.log("Global:", testUrl);
