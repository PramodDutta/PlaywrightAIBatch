// Exercise 5 Solution: See Real Bytecode
// Run: node --print-bytecode --print-bytecode-filter=runTest 05_bytecode_demo_solution.js

function runTest() {
    let url = "https://example.com";
    let status = 200;
    return status;
}

runTest();

// ANSWERS:
//
// 1. Yes — you can spot LdaSmi [200]
//    LdaSmi = "Load Small Integer" — loads the number 200 into the accumulator
//
// 2. Yes — you can spot Star rX (e.g., Star r0, Star r1)
//    Star = "Store Accumulator to Register" — stores the current value into a register
//
// 3. Approximate bytecode output (simplified):
//
//    LdaConstant [0]          // Load the string "https://example.com"
//    Star r0                  // Store it in register r0 (url)
//    LdaSmi [200]             // Load the small integer 200
//    Star r1                  // Store it in register r1 (status)
//    Ldar r1                  // Load register r1 (status) into accumulator
//    Return                   // Return the accumulator value (200)
//
// That's approximately 6 bytecode instructions.
//
// Key takeaways:
// - Ignition converts your JS into compact bytecode
// - Each bytecode instruction is very simple (load, store, return)
// - The accumulator is a temporary holding area for values
// - Registers (r0, r1, etc.) represent your local variables
