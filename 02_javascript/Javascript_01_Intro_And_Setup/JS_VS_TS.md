# JavaScript vs TypeScript

## What's the Difference?

```
JavaScript  → Dynamic, no type checking, runs directly
TypeScript  → JavaScript + Types, catches errors before running
```

TypeScript was created by **Microsoft in 2012**. It's a **superset** of JavaScript — meaning every JS code is valid TS code, but not vice versa.

---

## Side-by-Side Comparison

### 1. Variables

```javascript
// JavaScript
let name = "Pramod";
let age = 25;
age = "twenty five";  // ✅ No error — JS allows this
```

```typescript
// TypeScript
let name: string = "Pramod";
let age: number = 25;
age = "twenty five";  // ❌ Error: Type 'string' is not assignable to type 'number'
```

---

### 2. Functions

```javascript
// JavaScript
function add(a, b) {
  return a + b;
}

add(5, 10);          // 15 ✅
add("hello", 10);   // "hello10" ✅ — No warning, just wrong result
```

```typescript
// TypeScript
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10);          // 15 ✅
add("hello", 10);   // ❌ Error: Argument of type 'string' is not assignable to 'number'
```

---

### 3. Objects

```javascript
// JavaScript
let user = {
  name: "Pramod",
  age: 25
};

user.email = "test@mail.com";  // ✅ No error — adds new property freely
user.age = "twenty five";      // ✅ No error — type changed silently
```

```typescript
// TypeScript
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Pramod",
  age: 25
};

user.email = "test@mail.com";  // ❌ Error: Property 'email' does not exist on type 'User'
user.age = "twenty five";      // ❌ Error: Type 'string' is not assignable to type 'number'
```

---

### 4. Arrays

```javascript
// JavaScript
let scores = [10, 20, 30];
scores.push("forty");  // ✅ No error — mixed types allowed
```

```typescript
// TypeScript
let scores: number[] = [10, 20, 30];
scores.push("forty");  // ❌ Error: Argument of type 'string' is not assignable to 'number'
```

---

### 5. API Response Handling

```javascript
// JavaScript — No safety, hope for the best
fetch("/api/user")
  .then(res => res.json())
  .then(data => {
    console.log(data.nme);  // ✅ No error — typo goes unnoticed (should be data.name)
  });
```

```typescript
// TypeScript — Type-safe
interface ApiResponse {
  name: string;
  age: number;
}

fetch("/api/user")
  .then(res => res.json())
  .then((data: ApiResponse) => {
    console.log(data.nme);  // ❌ Error: Property 'nme' does not exist. Did you mean 'name'?
  });
```

---

## How TypeScript Works

```
  TypeScript Code (.ts)
        ↓
  TSC Compiler (type checking + transpiling)
        ↓
  JavaScript Code (.js)
        ↓
  Runs in Browser / Node.js
```

TypeScript **never runs directly**. It always compiles down to JavaScript first.

---

## Quick Comparison Table

| **Feature** | **JavaScript** | **TypeScript** |
|---|---|---|
| Typing | Dynamic (no types) | Static (types required) |
| Error Detection | At runtime | At compile time (before running) |
| File Extension | `.js` | `.ts` |
| Runs Directly | Yes (browser/Node) | No (needs compilation to JS) |
| Learning Curve | Easy | Slightly harder |
| Created By | Brendan Eich (1995) | Microsoft (2012) |
| Tooling | Good | Excellent (autocomplete, refactoring) |
| Used For | Small to medium projects | Medium to large projects |
| Superset | — | Superset of JavaScript |

---

### ✅ One Line Summary:
> **TypeScript = JavaScript + Type Safety**. It catches bugs at compile time that JavaScript would only catch at runtime, making your code more reliable and maintainable.