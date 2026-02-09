// Exercise 9 Solution: Variable Declaration — What Works, What Breaks?
// Run: node 09_declaration_quiz_solution.js

// --- 1. var re-declaration ---
var a = 10;
var a = 20;
console.log("1. var re-declaration:", a);
// WORKS — prints 20. var allows re-declaration.

// --- 2. let re-declaration ---
// let b = 10;
// let b = 20;
// BREAKS — SyntaxError: Identifier 'b' has already been declared
console.log("2. let re-declaration: SyntaxError (won't run)");

// --- 3. const reassignment ---
// const c = 10;
// c = 20;
// BREAKS — TypeError: Assignment to constant variable.
console.log("3. const reassignment: TypeError (won't run)");

// --- 4. const without initialization ---
// const d;
// d = 10;
// BREAKS — SyntaxError: Missing initializer in const declaration
// const MUST be initialized at declaration.
console.log("4. const without init: SyntaxError (won't run)");

// --- 5. let without initialization ---
let e;
e = 10;
console.log("5. let without init:", e);
// WORKS — prints 10. let can be declared without a value (starts as undefined).

// --- 6. var without initialization ---
var f;
f = 10;
console.log("6. var without init:", f);
// WORKS — prints 10. var can be declared without a value (starts as undefined).

// SCORECARD:
// | # | Statement         | Result       | Error Type     |
// |---|-------------------|--------------|----------------|
// | 1 | var re-declare    | WORKS (20)   | —              |
// | 2 | let re-declare    | BREAKS       | SyntaxError    |
// | 3 | const reassign    | BREAKS       | TypeError      |
// | 4 | const no init     | BREAKS       | SyntaxError    |
// | 5 | let no init       | WORKS (10)   | —              |
// | 6 | var no init       | WORKS (10)   | —              |
//
// Score: ___/6 — How many did you predict correctly?
