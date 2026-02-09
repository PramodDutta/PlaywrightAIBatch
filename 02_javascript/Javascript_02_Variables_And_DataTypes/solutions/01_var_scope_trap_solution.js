// Exercise 1 Solution: var Scope Trap in Test Functions
// Run: node 01_var_scope_trap_solution.js

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

// OUTPUT:
// Inside function: https://dev.example.com
// Inside if block: https://prod.example.com
// After if block: https://prod.example.com    <-- SURPRISE!
// Global: https://staging.example.com
//
// ANSWERS:
//
// 1. After the if block, testUrl = "https://prod.example.com"
//    Because var is FUNCTION-SCOPED, not block-scoped.
//    The `var testUrl` inside the if block is the SAME variable
//    as the one declared at the top of the function. It overwrites it.
//
// 2. YES — the if block changed the function-level variable.
//    With var, there is no separate block scope. The if block's
//    `var testUrl` is just a re-declaration of the same variable.
//
// 3. This is dangerous in test automation because:
//    - You might accidentally overwrite a test URL inside a conditional
//    - Your test could run against the wrong environment (prod vs staging!)
//    - The bug is silent — no error is thrown, just wrong behavior
//    - In a 200-line test file, this is very hard to debug
