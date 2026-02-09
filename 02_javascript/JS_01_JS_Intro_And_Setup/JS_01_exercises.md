# JS_01: In-Class Exercises (10 Exercises)

> Context: QA engineers / SDETs learning JavaScript foundations for Playwright automation.

---

## Exercise 1: Verify Your Setup

Create `verify_setup.js` and run it:

```js
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Hello from JavaScript! Setup is working.");
```

```bash
node verify_setup.js
```

**Task:** Confirm you see the Node version and platform printed.

---

## Exercise 2: Your First JavaScript Program

Create `hello_test.js`:

```js
let testerName = "John";
let tool = "Playwright";
console.log(testerName + " is learning " + tool);
```

**Tasks:**

1. Run the file
2. Change `testerName` to your name and run again
3. Add a third variable `language` with value `"JavaScript"` and print all three together

---

## Exercise 3: Predict the Token Output

Without running anything, list all tokens for this code:

```js
let url = "https://example.com";
```

**Write down each token and its type** (keyword, identifier, operator, string literal, punctuation).

Compare your answer with the token table in the notes.

---

## Exercise 4: Draw the AST

For this code, draw the AST on paper:

```js
let browser = "chromium";
console.log(browser);
```

**Your tree should have:**

- A `Program` root node
- A `VariableDeclaration` node
- An `ExpressionStatement` node with a `CallExpression`

Verify your drawing using: https://www.jointjs.com/demos/abstract-syntax-tree

---

## Exercise 5: See Real Bytecode

Create `bytecode_demo.js`:

```js
function runTest() {
    let url = "https://example.com";
    let status = 200;
    return status;
}

runTest();
```

Run:

```bash
node --print-bytecode --print-bytecode-filter=runTest bytecode_demo.js
```

**Questions:**

1. Can you spot `LdaSmi` (load small integer) for `200`?
2. Can you find `Star` (store to register)?
3. How many bytecode instructions did Ignition generate?

---

## Exercise 6: Call Stack Tracing

Predict the order of console.log outputs, then run to verify:

```js
function step1() {
    console.log("Step 1: Open browser");
}

function step2() {
    console.log("Step 2: Navigate to URL");
}

function step3() {
    console.log("Step 3: Click login button");
}

function runTestSuite() {
    console.log("Test Suite: STARTED");
    step1();
    step2();
    step3();
    console.log("Test Suite: COMPLETED");
}

runTestSuite();
```

**Tasks:**

1. Write the output order before running
2. Draw the Call Stack at each step (what gets pushed/popped)
3. Run and verify

---

## Exercise 7: Multiple Script Files

Create two files:

**`config.js`:**

```js
console.log("Loading config...");
console.log("Base URL: https://staging.example.com");
console.log("Timeout: 30000ms");
```

**`runner.js`:**

```js
console.log("Starting test runner...");
console.log("Browser: chromium");
console.log("Headless: true");
```

**Tasks:**

1. Run each file separately with `node config.js` and `node runner.js`
2. Does running `config.js` affect `runner.js`? Why or why not?
3. What does this tell you about how V8 handles separate files?

---

## Exercise 8: Compilation Comparison

Answer these questions in comments inside a file `compilation.js`:

```js
// Q1: What compilation type does JavaScript use?
//     Answer:

// Q2: What compilation type does Java use?
//     Answer:

// Q3: What compilation type does TypeScript use?
//     Answer:

// Q4: What is the difference between AOT and JIT?
//     AOT:
//     JIT:

// Q5: Why does JIT give JavaScript fast startup?
//     Answer:
```

---

## Exercise 9: When Does TurboFan Kick In?

Create `hot_code.js`:

```js
function add(a, b) {
    return a + b;
}

// Version A: Call once
console.log("Single call:", add(5, 10));

// Version B: Call 10000 times
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);
```

**Questions:**

1. Which version will TurboFan optimize — A or B? Why?
2. What does the Profiler look for to decide what is "hot" code?
3. Run with `node --trace-opt hot_code.js` — can you spot optimization messages?

---

## Exercise 10: End-to-End V8 Pipeline Trace

For this code, write the complete V8 journey on paper:

```js
let testName = "Login Test";
let steps = 3;
let passed = true;
console.log(testName, steps, passed);
```

**Write down each phase:**

1. **Source Code** — the raw text
2. **Tokens** — list every token
3. **AST** — draw the tree
4. **Bytecode** — write approximate bytecode instructions
5. **Call Stack** — what gets pushed and popped
6. **Output** — what prints to console
7. **TurboFan** — will it optimize? Why/why not?

This is your complete mental model of how JavaScript runs.
