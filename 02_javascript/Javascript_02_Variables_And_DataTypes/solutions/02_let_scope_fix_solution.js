// Exercise 2 Solution: let Fixes the Scope Problem
// Run: node 02_let_scope_fix_solution.js

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

// OUTPUT:
// Inside function: https://dev.example.com
// Inside if block: https://prod.example.com
// After if block: https://dev.example.com     <-- FIXED! Block scope works!
// Global: https://staging.example.com
//
// ANSWERS:
//
// 1. What changed: "After if block" now prints "dev" instead of "prod".
//    The if block's `let testUrl` is a SEPARATE variable that only exists
//    inside the if block. It does NOT overwrite the function-level variable.
//
// 2. "After if block" prints "https://dev.example.com" because:
//    let is BLOCK-SCOPED. The testUrl inside if {} is a different variable.
//    When the if block ends, that variable is destroyed.
//    The function-level testUrl was never touched.
//
// 3. As a tester, you should prefer `let` because:
//    - Block scope prevents accidental overwrites
//    - Each if/for/while block has its own isolated variables
//    - Bugs are easier to find — variables don't leak
//    - Modern best practice: use `let` for variables, `const` for constants
//    - NEVER use `var` in new code
