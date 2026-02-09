// Exercise 8 Solution: Compilation Comparison

// Q1: What compilation type does JavaScript use?
//     Answer: JIT (Just-In-Time) compilation
//     JavaScript is interpreted first, then hot code paths are compiled
//     to machine code at runtime by TurboFan.

// Q2: What compilation type does Java use?
//     Answer: AOT (Ahead-Of-Time) + JIT
//     Java compiles source code to bytecode (AOT via javac),
//     then the JVM's JIT compiler optimizes hot code at runtime.

// Q3: What compilation type does TypeScript use?
//     Answer: AOT + JIT
//     TypeScript is compiled to JavaScript (AOT via tsc compiler),
//     then the resulting JS is JIT compiled by V8 at runtime.

// Q4: What is the difference between AOT and JIT?
//     AOT: Code is compiled BEFORE execution (at build time).
//          Example: javac compiles .java to .class before you run it.
//          Pros: Catches errors early, optimized ahead of time.
//          Cons: Slower build step, less adaptive to runtime behavior.
//
//     JIT: Code is compiled DURING execution (at runtime).
//          Example: V8's TurboFan compiles hot JS to machine code while running.
//          Pros: Fast startup, adapts to actual runtime patterns.
//          Cons: Initial execution is slower (interpreted first).

// Q5: Why does JIT give JavaScript fast startup?
//     Answer: Because V8's Ignition interpreter starts executing bytecode
//     IMMEDIATELY without waiting for full compilation. The code runs right away.
//     Only later, when the Profiler identifies "hot" code (frequently executed),
//     does TurboFan compile it to optimized machine code in the background.
//     This means: fast start + fast execution for repeated code.
