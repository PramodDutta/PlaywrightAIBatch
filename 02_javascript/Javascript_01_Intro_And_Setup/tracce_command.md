
## `--trace-opt` — Shows when TurboFan optimizes a function

```javascript
// opt-example.js
function add(a, b) {
  return a + b;
}

for (let i = 0; i < 100000; i++) {
  add(i, i + 1);  // Called many times → becomes "hot" → optimized
}
```

**Run:**
```bash
node --trace-opt opt-example.js
```

**Output you'll see:**
```
[marking 0x... <JSFunction add> for optimization to turbofan]
[compiling method 0x... <JSFunction add> using TurboFan]
[completed optimizing 0x... <JSFunction add>]
```

---

## `--trace-deopt` — Shows when optimization is cancelled

```javascript
// deopt-example.js
function add(a, b) {
  return a + b;
}

// First: numbers → TurboFan optimizes for numbers
for (let i = 0; i < 100000; i++) {
  add(i, i + 1);
}

// Then: string! → Type changed → De-optimization!
add("hello", "world");
```

**Run:**
```bash
node --trace-deopt deopt-example.js
```

**Output you'll see:**
```
[deoptimizing (DEOPT eager): begin ... <JSFunction add>]
[deoptimizing: not a Smi]
```

This means V8 assumed `add` always receives numbers, but when a string came in, it **threw away** the optimized code.

---

## `--trace-ic` — Shows inline caching behavior

```javascript
// ic-example.js
function getX(obj) {
  return obj.x;
}

// Same shape → monomorphic IC (fast)
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 3, y: 4 };

for (let i = 0; i < 100000; i++) {
  getX(obj1);
  getX(obj2);
}

// Different shape → polymorphic IC (slower)
const obj3 = { x: 5, z: 6 };    // different property!
getX(obj3);
```

**Run:**
```bash
node --trace-ic ic-example.js
```

**Output you'll see:**
```
[LoadIC: ... x: monomorphic]     → Same shape, fast lookup
[LoadIC: ... x: polymorphic]     → Different shape, slower lookup
```

---

## All Flags Combined

```bash
node --trace-opt --trace-deopt --trace-ic yourfile.js
```

---

## Quick Reference

| **Flag** | **What it Shows** | **Look For** |
|---|---|---|
| `--trace-opt` | Functions being optimized by TurboFan | `marking for optimization`, `completed optimizing` |
| `--trace-deopt` | Optimized code being thrown away | `deoptimizing`, reason like `not a Smi`, `wrong map` |
| `--trace-ic` | Property access caching states | `monomorphic` (fast), `polymorphic` (ok), `megamorphic` (slow) |

---

## IC States Explained

```
Uninitialized → Monomorphic → Polymorphic → Megamorphic
   (no info)     (1 shape)    (2-4 shapes)  (5+ shapes)
    Slowest         Fastest       OK            Slow
```

**Tip:** Keep objects with the **same shape** (same properties in same order) to stay **monomorphic** for best performance.