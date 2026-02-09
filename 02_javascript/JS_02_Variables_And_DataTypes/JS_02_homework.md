# JS_02: Homework (5 Exercises)

> Do these on your own after class. These connect JS variables and data types to real Playwright patterns.

---

## Homework 1: Scope Challenge — Loop Variables

This is a classic bug that catches even experienced developers:

```js
// Version A: using var
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("var - Test case:", i);
    }, 100);
}

// Version B: using let
for (let j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log("let - Test case:", j);
    }, 100);
}
```

**Tasks:**

1. Run the code. What does Version A print? What does Version B print?
2. Why does `var` print `3` three times?
3. In Playwright, when you loop through test data, which keyword should you use?
4. Write a comment explaining this bug to a junior QA team member

---

## Homework 2: Data Type Validator Function

Create `type_checker.js` — build a function that validates test data types:

```js
function validateTestData(testCase) {
    // Check that testCase has the correct types:
    // - name should be "string"
    // - steps should be "number"
    // - isAutomated should be "boolean"
    // - bugId can be "string" or null
    //
    // Print PASS or FAIL for each check
    // Hint: typeof null is "object", so check null separately
}

// Test with valid data
validateTestData({
    name: "Login Test",
    steps: 5,
    isAutomated: true,
    bugId: null,
});

// Test with invalid data
validateTestData({
    name: 123,
    steps: "five",
    isAutomated: "yes",
    bugId: undefined,
});
```

**Expected Output:**

```
--- Validating Test Case ---
name: PASS (expected string, got string)
steps: PASS (expected number, got number)
isAutomated: PASS (expected boolean, got boolean)
bugId: PASS (expected string|null, got null)

--- Validating Test Case ---
name: FAIL (expected string, got number)
steps: FAIL (expected number, got string)
isAutomated: FAIL (expected boolean, got string)
bugId: FAIL (expected string|null, got undefined)
```

---

## Homework 3: Test Config File

Create `test_config.js` that stores test configuration:

```
- Base URL: https://the-internet.herokuapp.com
- Browser: chromium
- Headless mode: true
- Default timeout: 30000
- Retry count: 2
- Test environment: "staging"
```

**Requirements:**

1. Use `const` for values that should never change during a test run
2. Use `let` for values that might change
3. Print each value with its `typeof`
4. At the end, change `headless` to `false` and `environment` to `"production"`
5. Try changing the `BASE_URL` — what error do you get?
6. Write a comment on each line explaining why you chose `const` or `let`

---

## Homework 4: Real Playwright Variable Pattern (Preview)

You don't need Playwright installed yet. Just write the JavaScript structure:

```js
const BASE_URL = "https://the-internet.herokuapp.com";
const LOGIN_PATH = "/login";
const VALID_USERNAME = "tomsmith";
const VALID_PASSWORD = "SuperSecretPassword!";

let testResult = "not started";
let currentUrl = "";

function simulateLoginTest() {
    let fullUrl = BASE_URL + LOGIN_PATH;
    console.log("Step 1 - Navigating to:", fullUrl);

    let username = VALID_USERNAME;
    let password = VALID_PASSWORD;
    console.log("Step 2 - Entering credentials");

    let isLoggedIn = true;
    console.log("Step 3 - Login result:", isLoggedIn);

    if (isLoggedIn) {
        testResult = "PASSED";
        currentUrl = fullUrl + "/secure";
    } else {
        testResult = "FAILED";
    }
}

simulateLoginTest();

console.log("\n--- Test Summary ---");
console.log("Result:", testResult);
console.log("Final URL:", currentUrl);
```

**Tasks:**

1. Run the code and verify the output
2. Add a function `simulateLogoutTest()` that resets `testResult` to `"not started"` and `currentUrl` to `""`
3. Add a variable `executionTime` — which keyword would you use? Where would you declare it?
4. What would break if you changed `let testResult` to `const testResult`?
5. Notice the pattern: `const` for config, `let` for state. Write a comment explaining why this is a best practice

---

## Homework 5: typeof Cheat Sheet

Create a file `typeof_cheatsheet.js` that demonstrates every `typeof` result in JavaScript.

Create one variable of each type and print:

```
Type: string     | Example: "hello"         | typeof: string
Type: number     | Example: 42              | typeof: number
Type: boolean    | Example: true            | typeof: boolean
Type: undefined  | Example: undefined       | typeof: undefined
Type: null       | Example: null            | typeof: object (BUG!)
Type: bigint     | Example: 123n            | typeof: bigint
Type: symbol     | Example: Symbol("id")    | typeof: symbol
Type: object     | Example: {key: "value"}  | typeof: object
Type: array      | Example: [1, 2, 3]       | typeof: object (!)
Type: function   | Example: function(){}    | typeof: function
```

**Bonus Tasks:**

1. How do you correctly check if something is `null` (since typeof won't help)?
2. How do you correctly check if something is an array (since typeof says "object")?
3. Write a function `trueType(value)` that returns the correct type for ALL values, including `null` and arrays

Hint for bonus: Look up `Array.isArray()` and `=== null`
