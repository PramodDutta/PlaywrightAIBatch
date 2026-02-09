// Exercise 9: Variable Declaration — What Works, What Breaks?
// Run each block SEPARATELY (comment out the others)
// Run: node 09_declaration_quiz.js
//
// Predict: works or throws error? Then run each separately.
// Score yourself: how many did you get right out of 6?

// --- 1. var re-declaration ---
var a = 10;
var a = 20;
console.log("1. var re-declaration:", a);

// --- 2. let re-declaration (uncomment to test) ---
// let b = 10;
// let b = 20;

// --- 3. const reassignment (uncomment to test) ---
// const c = 10;
// c = 20;

// --- 4. const without initialization (uncomment to test) ---
// const d;
// d = 10;

// --- 5. let without initialization ---
let e;
e = 10;
console.log("5. let without init:", e);

// --- 6. var without initialization ---
var f;
f = 10;
console.log("6. var without init:", f);
