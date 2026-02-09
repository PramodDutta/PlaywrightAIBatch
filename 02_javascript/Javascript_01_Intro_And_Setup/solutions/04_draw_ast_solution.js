// Exercise 4 Solution: Draw the AST

let browser = "chromium";
console.log(browser);

// ANSWER — AST Structure:
//
// Program
// ├── VariableDeclaration (kind: "let")
// │   └── VariableDeclarator
// │       ├── Identifier: "browser"       (id — variable name)
// │       └── Literal: "chromium"         (init — initial value)
// │
// └── ExpressionStatement
//     └── CallExpression
//         ├── MemberExpression            (callee)
//         │   ├── Identifier: "console"   (object)
//         │   └── Identifier: "log"       (property)
//         └── Arguments
//             └── Identifier: "browser"   (the argument passed)
//
// Key observations:
// 1. The Program node is the root — it contains all statements
// 2. VariableDeclaration has kind="let" (could also be var/const)
// 3. console.log is a MemberExpression (object.property)
// 4. The argument "browser" is an Identifier, NOT the value "chromium"
//    V8 will look up "browser" in memory at runtime to get "chromium"
//
// Verify at: https://www.jointjs.com/demos/abstract-syntax-tree
// Also try:  https://astexplorer.net (paste the code above)
