# JS_01: Homework (5 Exercises)

> Do these on your own after class. Focus on deeply understanding how JavaScript executes.

---

## Homework 1: Node.js REPL Exploration

Open terminal and type `node` (no file) to enter the REPL (Read-Eval-Print Loop).

**Tasks:**

1. Type `2 + 3` and press Enter — what happens?
2. Type `let x = 10` then `x * 5` — what prints?
3. Type `console.log("Hello QA")` — what prints?
4. Type `process.version` — note your version
5. Type `.exit` to quit

**Questions:**

- How is running code in REPL different from running a `.js` file?
- When would REPL be useful for a tester?

---

## Homework 2: AST Explorer Deep Dive

Go to https://astexplorer.net and paste this code:

```js
function loginTest(username, password) {
    let result = username === "admin" && password === "pass123";
    return result;
}
```

**Tasks:**

1. Take a screenshot of the AST tree
2. Find the `FunctionDeclaration` node — what children does it have?
3. Find the `BinaryExpression` for `===` — how is it represented?
4. Find the `LogicalExpression` for `&&` — what are its left and right sides?
5. Write down 3 things you learned about how JS code is structured internally

---

## Homework 3: Bytecode Analysis

Create `bytecode_hw.js`:

```js
function calculateTestMetrics(total, passed) {
    let failed = total - passed;
    let passRate = (passed / total) * 100;
    return passRate;
}

console.log(calculateTestMetrics(10, 8));
```

Run:

```bash
node --print-bytecode --print-bytecode-filter=calculateTestMetrics bytecode_hw.js
```

**Questions:**

1. How many bytecode instructions were generated?
2. Can you identify the instruction for subtraction (`Sub`)?
3. Can you identify the instruction for division (`Div`)?
4. Can you identify the instruction for multiplication (`Mul`)?
5. What instruction handles the `return` statement?

---

## Homework 4: V8 Optimization Experiment

Create `optimize_test.js`:

```js
function multiply(a, b) {
    return a * b;
}

// Part A: Call with same types (numbers)
for (let i = 0; i < 100000; i++) {
    multiply(10, 20);
}

// Part B: Call with mixed types
multiply(10, 20);
multiply("hello", 2);
multiply(true, 5);
multiply(null, 10);
```

Run:

```bash
node --trace-opt --trace-deopt optimize_test.js
```

**Questions:**

1. Does Part A get optimized by TurboFan? Look for "optimized" messages.
2. Does Part B cause deoptimization? Look for "deoptimized" messages.
3. Why do mixed types cause deoptimization?
4. As a SDET, what does this teach you about writing consistent code?

---

## Homework 5: Research — JavaScript Engines Beyond V8

Research and write short notes (3-4 lines each) about:

1. **V8** — Used in which browser and runtime?
2. **SpiderMonkey** — Used in which browser? Who created it?
3. **JavaScriptCore (Nitro)** — Used in which browser?
4. **Chakra** — Used in which browser? Is it still active?

**Bonus Question:**
When you run Playwright tests, which JS engine is executing your test code? Which engine runs inside the browser being tested? Are they the same?
