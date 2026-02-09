# JS_02: var, let, const, Hoisting, DataTypes, typeof, SizeOfData

## var, let and const

The main difference is **scope**.

---

## var — Function Scoped

`var` is **function-scoped**, NOT block-scoped. It leaks out of `if`/`for` blocks.

```js
var a = 10; // global variable
function test() {
    var a = 20;
    console.log(a); // 20
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log(a); // 30 (leaked from if block!)
}

test();
console.log(a); // 10 (global unchanged)
```

`var` also allows **re-declaration**:

```js
var number = 10;
var number = 20;
console.log(number); // 20 — no error!
```

---

## Hoisting

**Hoisting** = using a variable before it is declared.

```js
console.log(x); // undefined (var is hoisted with value undefined)
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization (TDZ)
let y = 5;
```

- `var` is hoisted and initialized to `undefined`
- `let` and `const` are hoisted but stay in the **Temporal Dead Zone (TDZ)** until declaration

---

## let — Block Scoped

`let` is **block-scoped**. It stays within `if`/`for`/`{}` blocks.

```js
let b = 20; // global variable
function rest() {
    let b = 30;
    console.log(b); // 30
    if (true) {
        let b = 40;
        console.log(b); // 40 (stays inside if block)
    }
    console.log(b); // 30 (not affected by if block)
}

rest();
console.log(b); // 20 (global unchanged)
```

- `let` does NOT allow re-declaration in the same scope
- `let` allows reassignment

---

## const — Block Scoped, No Reassignment

- Block-scoped like `let`
- Must be initialized at declaration
- Cannot be reassigned

---

## Comparison Table

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Re-declaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |

---

## Data Types in JavaScript

### 1. Primitive Data Types

`number`, `string`, `boolean`, `undefined`, `symbol`, `null`, `BigInt`

### 2. Non-Primitive Data Types (Reference Types)

`object`, `class`, `interface`, `array`, `function`, `enum`

---

## typeof Examples

### String, Number

```js
let empname = "John";
let lang = "JavaScript";
let num = 100;

console.log(typeof(empname)); // "string"
console.log(typeof(lang));    // "string"
console.log(typeof(num));     // "number"
```

### Boolean

```js
let flag = true;
let isActive = false;
console.log(typeof(flag));     // "boolean"
console.log(typeof(isActive)); // "boolean"
```

### Undefined

```js
let p;
let q = undefined;

console.log(p);          // undefined
console.log(typeof(p));  // "undefined"

console.log(q);          // undefined
console.log(typeof(q));  // "undefined"
```

### Null

```js
let driver = null;
console.log(driver);          // null
console.log(typeof(driver));  // "object" — existing bug in JS!
```

> `typeof null` returns `"object"` — this is a known legacy bug in JavaScript that was never fixed for backward compatibility.
