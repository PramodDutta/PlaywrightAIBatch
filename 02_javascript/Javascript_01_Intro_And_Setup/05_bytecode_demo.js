// Exercise 5: See Real Bytecode
// Run: node --print-bytecode --print-bytecode-filter=runTest 05_bytecode_demo.js
//
// Questions:
// 1. Can you spot LdaSmi (load small integer) for 200?
// 2. Can you find Star (store to register)?
// 3. How many bytecode instructions did Ignition generate?

function runTest() {
    let url = "https://example.com";
    let status = 200;
    return status;
}

runTest();
