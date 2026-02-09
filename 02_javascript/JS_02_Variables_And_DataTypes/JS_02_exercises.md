# JS_02: In-Class Exercises (10 Exercises)

> Context: QA engineers / SDETs learning JavaScript foundations for Playwright automation.
> All exercises use testing-related scenarios.

---

## Exercise 1: var Scope Trap in Test Functions

Predict the output FIRST, then run:

```js
var testUrl = "https://staging.example.com";

function runLoginTest() {
    var testUrl = "https://dev.example.com";
    console.log("Inside function:", testUrl);

    if (true) {
        var testUrl = "https://prod.example.com";
        console.log("Inside if block:", testUrl);
    }

    console.log("After if block:", testUrl);
}

runLoginTest();
console.log("Global:", testUrl);
```

**Questions:**

1. What is the value after the if block? Why?
2. Did the if block change the function-level variable?
3. Why is this dangerous in test automation?

---

## Exercise 2: let Fixes the Scope Problem

Rewrite Exercise 1 replacing all `var` with `let`. Predict the output first:

```js
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
```

**Questions:**

1. What changed in the output compared to Exercise 1?
2. Which value does "After if block" print now? Why?
3. As a tester, which keyword would you prefer? Why?

---

## Exercise 3: var Allows Re-declaration

Predict and run:

```js
var browser = "chromium";
console.log("First:", browser);

var browser = "firefox";
console.log("Second:", browser);

var browser = "webkit";
console.log("Third:", browser);
```

Now try the same with `let`:

```js
let browser = "chromium";
let browser = "firefox"; // What happens?
```

**Question:** Why is re-declaration with `var` risky in a large test file?

---

## Exercise 4: const for Test Configuration

```js
const BASE_URL = "https://app.example.com";
const TIMEOUT = 30000;
const BROWSER = "chromium";

console.log(BASE_URL, TIMEOUT, BROWSER);

// Uncomment one at a time and run:
// BASE_URL = "https://other.com";     // What happens?
// const BASE_URL = "https://new.com"; // What happens?
```

**Bonus — const with objects:**

```js
const config = { browser: "chromium", headless: true };
config.headless = false;
console.log(config); // Does this work? Why?
```

**Question:** Why is `const` ideal for test config values?

---

## Exercise 5: Hoisting — The Silent Bug

Predict the output for each block (run them one at a time):

```js
// Block A
console.log(browserName);
var browserName = "chrome";
```

```js
// Block B
console.log(timeout);
let timeout = 5000;
```

```js
// Block C
greet();
function greet() {
    console.log("Test suite starting...");
}
```

```js
// Block D
startTest();
var startTest = function () {
    console.log("Running tests...");
};
```

**Questions:**

1. Which blocks throw errors? Which print `undefined`?
2. Why does Block C work but Block D doesn't?
3. What rule should you follow to avoid hoisting bugs?

---

## Exercise 6: Temporal Dead Zone (TDZ)

```js
// What happens with each? Predict first.

// Scenario 1
console.log(a);
var a = "Playwright";

// Scenario 2
console.log(b);
let b = "Playwright";

// Scenario 3
console.log(c);
const c = "Playwright";
```

**Tasks:**

1. Run each scenario separately
2. For Scenario 2 and 3, identify the TDZ — from which line to which line?
3. Write a one-line rule: "To avoid TDZ errors, always..."

---

## Exercise 7: typeof — Validating Test Data

```js
let testCaseName = "Verify Login";
let stepCount = 5;
let isPassed = true;
let startTime;
let endTime = undefined;
let bugId = null;
let testId = BigInt(9007199254740991);

console.log("testCaseName:", typeof testCaseName);
console.log("stepCount:", typeof stepCount);
console.log("isPassed:", typeof isPassed);
console.log("startTime:", typeof startTime);
console.log("endTime:", typeof endTime);
console.log("bugId:", typeof bugId);
console.log("testId:", typeof testId);
```

**Questions:**

1. What does `typeof bugId` return? Is it what you expected?
2. Is there any difference between `startTime` and `endTime` in typeof?
3. When would you use `BigInt` in testing?

---

## Exercise 8: Primitive vs Reference Types

```js
// Primitive — copies the value
let browser1 = "chromium";
let browser2 = browser1;
browser2 = "firefox";

console.log("browser1:", browser1);
console.log("browser2:", browser2);

// Reference — copies the reference
let config1 = { browser: "chromium", headless: true };
let config2 = config1;
config2.browser = "firefox";

console.log("config1:", config1);
console.log("config2:", config2);
```

**Questions:**

1. Did changing `browser2` affect `browser1`?
2. Did changing `config2.browser` affect `config1`? Why?
3. Why is this important when sharing test config objects between test functions?

---

## Exercise 9: Variable Declaration — What Works, What Breaks?

For each block, predict: works or throws error? Then run each separately:

```js
// 1. var re-declaration
var a = 10;
var a = 20;
console.log(a);

// 2. let re-declaration
let b = 10;
let b = 20;

// 3. const reassignment
const c = 10;
c = 20;

// 4. const without initialization
const d;
d = 10;

// 5. let without initialization
let e;
e = 10;
console.log(e);

// 6. var without initialization
var f;
f = 10;
console.log(f);
```

Score yourself: how many did you get right out of 6?

---

## Exercise 10: Build a Test Summary

Fill in the blanks — replace `______` with `var`, `let`, or `const`:

```js
______ TEST_SUITE = "Smoke Tests";
______ BASE_URL = "https://staging.example.com";
______ BROWSER = "chromium";
______ totalTests = 0;
______ passedTests = 0;
______ failedTests = 0;
______ isComplete = false;

// Simulate running 3 tests
totalTests = 3;
passedTests = 2;
failedTests = 1;
isComplete = true;

// Print summary
console.log("Suite:", TEST_SUITE);
console.log("URL:", BASE_URL);
console.log("Browser:", BROWSER);
console.log("Total:", totalTests, "(type:", typeof totalTests + ")");
console.log("Passed:", passedTests, "(type:", typeof passedTests + ")");
console.log("Failed:", failedTests, "(type:", typeof failedTests + ")");
console.log("Complete:", isComplete, "(type:", typeof isComplete + ")");
```

**Justify each choice:** Why did you pick `const` or `let` for each variable?
