# JS_01: JavaScript Intro, Lifecycle of JS Code, V8 Engine Architecture, VSC Setup, NodeJS Installation, Project Setup

## What is JavaScript?

A website is built with three core technologies:

```
                    ┌──────────────────┐
                    │   Your Website   │
                    └───────┬──────────┘
            ┌───────────────┼───────────────┐
            │               │               │
      ┌─────┴─────┐  ┌─────┴─────┐  ┌──────┴──────┐
      │   HTML     │  │   CSS     │  │ JavaScript  │
      └─────┬─────┘  └─────┬─────┘  └──────┬──────┘
            │               │               │
    What do you want  How do you want  What do you want
    on your website?  it to look?      it to do?
```

- **HTML** — Structure / Content
- **CSS** — Styling / Appearance
- **JavaScript** — Behavior / Interactivity

---

## JavaScript is a Runtime Language?

JavaScript is an **interpreted language with JIT compilation** at runtime.

---

## Step-by-Step Execution in V8 Engine

How this code runs in the V8 JavaScript engine:

```js
let a = 10;
console.log(a);
```

### 1. Source Code Input

The JavaScript program (text) is given to the V8 engine.

### 2. Parsing / Tokenization

V8 starts by breaking code into **tokens** like keywords, identifiers, operators, values.

Example token output:

| Token | Type |
| --- | --- |
| `let` | keyword |
| `a` | identifier |
| `=` | operator |
| `10` | number literal |
| `;` | punctuation |
| `console` | identifier |
| `.` | punctuation |
| `log` | identifier |
| `(` | punctuation |
| `a` | identifier |
| `)` | punctuation |

### 3. Create AST (Abstract Syntax Tree)

The tokens are converted into a structured tree representing the logic.

Simplified AST example:

```
Program
 ├── VariableDeclaration (let)
 │     └── Identifier: a
 │     └── Literal: 10
 └── ExpressionStatement
       └── CallExpression: console.log
             └── Identifier: a
```

### 4. Interpreter (Ignition) Converts AST to Bytecode

Ignition creates lightweight bytecode from AST and starts executing immediately.

Bytecode might look like:

```
LdaSmi [10]      // Load immediate small integer 10
Star <a>         // Store into variable a
LdaGlobal console
LdaNamedProperty log
Lda <a>          // Load value of a
CallProperty1    // Call log with 1 argument
```

### 5. Execution (Runtime with Call Stack)

The **Call Stack** executes bytecode line-by-line:

| Step | Action |
| --- | --- |
| 1 | Allocate memory for `a` |
| 2 | Store value `10` in memory |
| 3 | Evaluate `console.log(a)` |
| 4 | Fetch value `10` from memory |
| 5 | Send value to console output |
| 6 | Prints **10** in terminal/browser console |

Output:

```
10
```

### 6. Profiler + JIT Optimization

Since this code is very small and not repeated, the **Profiler sees no benefit**, so **TurboFan (JIT Compiler) does NOT optimize**.

> If we had a loop with thousands of executions, V8 would compile that part into machine code.

---

## Memory and Scope Explanation

During execution, memory creation happens in two phases:

### Memory Creation Phase

| Identifier | Value |
| --- | --- |
| `a` | `undefined` initially (TDZ for let) |

### Execution Phase

| Identifier | Value |
| --- | --- |
| `a` | `10` after assignment |

Then `console.log(a)` prints 10.

---

## Interview One-Liner

> The code is parsed into tokens, converted to an AST, interpreted into bytecode by Ignition, stored in memory, and executed on the call stack. If code is repeatedly executed, TurboFan optimizes it into machine code.

---

## V8 Engine - JS Code Execution Flow

JavaScript code in V8 is parsed into an AST, interpreted into bytecode by Ignition, and optimized by TurboFan into machine code for repeated/hot code paths. This gives both fast startup and high performance.

```
  ┌────┐      ┌────────┐      ┌─────────────────┐
  │ JS │─────>│ Parser │─────>│ AST             │
  └────┘      └────────┘      │ Abstract Syntax │
              Parses the      │ Tree            │
              code            └────────┬────────┘
                                       │
                    Separates the code based on
                    types and structure.
                    Ex: variables, functions etc
                                       │
                                       v
                              ┌─────────────────┐     Binary     ┌───────┐
                              │  Interpreter    │────  Code  ───>│       │
                              │  (Ignition)     │                │       │
                              └────────┬────────┘                │  CPU  │
                                       │                         │       │
                              ┌────────┴────────┐                │       │
                              │    Profiler     │                │       │
                              └────────┬────────┘                │       │
                              Monitors code and                  │       │
                              pushes repeated                    │       │
                              code to compiler                   │       │
                                       │                         │       │
                                       v                         │       │
                              ┌─────────────────┐               │       │
                              │   Compiler      │               │       │
                              │  (TurboFan)     │               │       │
                              └────────┬────────┘               │       │
                              Converts code to                   │       │
                              optimized machine code             │       │
                                       │                         │       │
                                       v                         │       │
                              ┌─────────────────┐    Binary     │       │
                              │  Optimizing     │────  Code ───>│       │
                              │  Code           │               │       │
                              └─────────────────┘               └───────┘
```

AST Visualizer: https://www.jointjs.com/demos/abstract-syntax-tree

---

## V8 Engine Components (Short Notes)

### 1. Parser / Tokenizer

Breaks JavaScript source code into smaller pieces called tokens.
Then builds an **Abstract Syntax Tree (AST)** that represents the structure and meaning of the code.

### 2. AST (Abstract Syntax Tree)

A tree-like representation of code logic created from tokens.
Helps the interpreter understand the program structure and execution order.

### 3. Interpreter (Ignition)

Converts AST into **bytecode** and begins execution immediately.
Ensures fast startup by running code quickly without waiting for full compilation.

### 4. Profiler

Monitors which pieces of code run repeatedly or are performance-critical.
Identifies "hot" code sections suitable for further optimization.

### 5. JIT Compiler (TurboFan)

Takes hot bytecode and converts it into highly optimized **machine code**.
Improves performance dramatically for long-running or repeated code.

### 6. Garbage Collector

Automatically frees memory by removing unused or unreachable objects.
Prevents memory leaks and keeps performance efficient.

### 7. Machine Code Execution

The final optimized code is executed directly by the **CPU**.
This gives the best performance at runtime.

AST Visualizer (alternative): https://viswesh.github.io/astVisualizer/index.html

---

## Compilation Comparison

| Language | Compilation Type |
| --- | --- |
| Java | AOT + JIT |
| JavaScript | JIT |
| TypeScript | AOT + JIT |

---

## How to See the Bytecode

```js
function test() {
  let a = 10;
  return a;
}

test();
```

Save it as `test.js`, then run:

```bash
node --print-bytecode test.js
```
