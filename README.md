# 🤖 Playwright AI Batch - AI-Powered QA Automation

<p align="center">
  <img src="https://img.shields.io/badge/AI-Powered%20QA-blueviolet?style=for-the-badge" alt="AI Powered QA">
  <img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" alt="Selenium">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

**Author:** Pramod Dutta
**Role:** Principal SDET
**Website:** [The Testing Academy](https://thetestingacademy.com/)
**LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

## 📖 Course Overview

This repository contains hands-on materials for mastering **AI-Powered Test Automation**. Start with **AI/ML fundamentals and prompt engineering**, then dive into **JavaScript and Playwright** for modern test automation. Learn how to leverage Large Language Models (LLMs) for intelligent test case generation, automation framework development, and enterprise QA practices.

---

## 🎯 Learning Tracks

This course is structured in **two modules**:

| Module | Focus | Topics |
|--------|-------|--------|
| **01_learnai** | AI/ML Basics & Prompt Engineering | AI fundamentals, LLM comparisons, prompt frameworks, anti-hallucination rules |
| **02_javascript** | JavaScript + Playwright | JS fundamentals, variables, data types, and building toward Playwright automation |

**Start with 01_learnai** to build your AI foundation, then move to **02_javascript** for hands-on coding and automation!

---

## 📚 Table of Contents

| Chapter | Learn AI Basics (01_learnai) | JavaScript Track (02_javascript) |
|---------|-------------------------------|----------------------------------|
| **Chapter 1** | [AI/ML Foundation](#chapter-1-aiml-foundation) | [JS Intro & V8 Engine](#js_01-javascript-intro--v8-engine-architecture) |
| **Chapter 2** | [Prompt Engineering](#chapter-2-prompt-engineering) | [Variables & Data Types](#js_02-variables--data-types) |

---

## 📁 Repository Structure

```
PlaywrightAIBatch/
├── README.md
│
├── 01_learnai/                       # Learn AI Basics
│   ├── chapter1/                     # AI/ML Fundamentals
│   │   ├── README.md
│   │   ├── ch_01_ml_ai_deep_learning.md
│   │   ├── ch_01_llm_comparisons.md
│   │   ├── ch_01_anti_hallucination_rule.md
│   │   └── practical_guides/
│   │       └── ch_01_local_llm_setup_ollama.md
│   │
│   └── chapter2/                     # Prompt Engineering
│       ├── RICEPOT.md
│       ├── Prompt_Frameworks.md
│       ├── anti_hallucinations_rules.md
│       └── SeleniumFramework/        # Example Selenium Framework
│           ├── pom.xml
│           ├── testng.xml
│           └── src/
│
└── 02_javascript/                         # JavaScript + Playwright Track
    ├── Javascript_01_Intro_And_Setup/     # JS Intro, V8 Engine, Node.js Setup
    │   ├── JS_01_notes.md                 # Class notes
    │   ├── JS_01_exercises.md             # 10 in-class exercises
    │   ├── JS_01_homework.md              # 5 homework exercises
    │   ├── 01_verify_setup.js ... 10_v8_pipeline_trace.js  # Exercise files
    │   └── solutions/                     # All 10 solutions with explanations
    │
    └── Javascript_02_Variables_And_DataTypes/  # var, let, const, Hoisting, typeof
        ├── JS_02_notes.md                 # Class notes
        ├── JS_02_exercises.md             # 10 in-class exercises
        ├── JS_02_homework.md              # 5 homework exercises
        ├── 01_var_scope_trap.js ... 10_test_summary.js  # Exercise files
        └── solutions/                     # All 10 solutions with explanations
```

---

## 📗 Chapter 1: AI/ML Foundation

**Location:** `01_learnai/chapter1/`

### 🎯 Learning Objectives

- Understand the difference between AI, ML, and Deep Learning
- Compare closed-source vs open-source LLMs
- Set up local LLMs for QA workflows
- Apply anti-hallucination rules for AI-generated code

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `ch_01_ml_ai_deep_learning.md` | Comprehensive guide on AI → ML → Deep Learning → LLMs hierarchy |
| `ch_01_llm_comparisons.md` | Comparison of GPT-4, Claude, Llama, Mistral for QA |
| `ch_01_anti_hallucination_rule.md` | Rules to prevent AI from generating incorrect automation code |
| `ch_01_local_llm_setup_ollama.md` | Step-by-step Ollama installation and configuration |

### 🧠 Key Concepts

```
┌─────────────────────────────────────────────────────────┐
│                ARTIFICIAL INTELLIGENCE                   │
│    ┌─────────────────────────────────────────────┐     │
│    │           MACHINE LEARNING                   │     │
│    │    ┌─────────────────────────────────┐     │     │
│    │    │       DEEP LEARNING             │     │     │
│    │    │   ┌─────────────────────┐      │     │     │
│    │    │   │   LLMs (GPT, etc.) │      │     │     │
│    │    │   └─────────────────────┘      │     │     │
│    │    └─────────────────────────────────┘     │     │
│    └─────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
```

### 📊 LLM Decision Matrix

| Scenario | Recommended Model |
|----------|-------------------|
| Confidential data | Open-Source (Ollama) |
| Best accuracy needed | GPT-4 / Claude Opus |
| Budget constrained | Open-Source / GPT-3.5 |
| High volume generation | Open-Source |
| Code-heavy testing | DeepSeek / CodeLlama |

---

## 📗 JS_01: JavaScript Intro & V8 Engine Architecture

**Location:** `02_javascript/Javascript_01_Intro_And_Setup/`

### 🎯 Learning Objectives

- Understand what JavaScript is and its role in web development (HTML / CSS / JS)
- Learn how JS code executes in the V8 engine (parsing, AST, bytecode, machine code)
- Understand the V8 components: Parser, Ignition, Profiler, TurboFan, Garbage Collector
- Set up VSCode and Node.js for JavaScript development

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `JS_01_notes.md` | V8 engine architecture, tokenization, AST, bytecode, call stack, memory phases |
| `JS_01_exercises.md` | 10 hands-on exercises: setup verification, AST drawing, bytecode analysis, call stack tracing |
| `JS_01_homework.md` | 5 homework exercises: Node REPL, AST Explorer, bytecode analysis, optimization experiments |

### 🧠 Key Concepts

- JS is an **interpreted language with JIT compilation**
- V8 Pipeline: Source Code → Parser → AST → Ignition (Bytecode) → TurboFan (Machine Code) → CPU
- Compilation types: Java (AOT + JIT), JavaScript (JIT), TypeScript (AOT + JIT)

---

## 📗 JS_02: Variables & Data Types

**Location:** `02_javascript/Javascript_02_Variables_And_DataTypes/`

### 🎯 Learning Objectives

- Understand `var`, `let`, `const` and their scope differences
- Learn hoisting and the Temporal Dead Zone (TDZ)
- Master JavaScript data types (primitive and non-primitive)
- Use `typeof` to validate data types

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `JS_02_notes.md` | var/let/const comparison, hoisting, TDZ, data types, typeof quirks |
| `JS_02_exercises.md` | 10 hands-on exercises: scope traps, hoisting bugs, typeof validation, test summaries |
| `JS_02_homework.md` | 5 homework exercises: loop variable bugs, type validator function, Playwright patterns preview |

### 🧠 Key Concepts

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Re-declaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |

---

## 📘 Chapter 2: Prompt Engineering

**Location:** `01_learnai/chapter2/`

### 🎯 Learning Objectives

- Master prompt engineering frameworks (RICEPOT, STAR, CLEAR, CRISP)
- Generate automation code using structured prompts
- Understand anti-hallucination guidelines for AI-generated test code
- Apply prompt frameworks to real QA scenarios

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `RICEPOT.md` | Role, Intent, Context, Expected, Persona, Output, Task framework |
| `Prompt_Frameworks.md` | STAR, CLEAR, CRISP frameworks comparison |
| `anti_hallucinations_rules.md` | Additional anti-hallucination guidelines |
| `SeleniumFramework/` | Complete enterprise Selenium + Java automation framework |

### 🔧 Prompt Frameworks Quick Reference

```
RICE POT = Role + Intent + Context + Expected + Persona + Output + Task
STAR     = Situation + Task + Action + Result
CLEAR    = Context + Language + Examples + Audience + Result
CRISP    = Context + Request + Input + Scope + Parameters
```

### 🏗️ Enterprise Selenium Framework

The `SeleniumFramework` folder contains a production-ready automation framework:

**Technologies:**
- Java 17
- Selenium 4.18.1
- TestNG 7.9.0
- Maven
- WebDriverManager

**Features:**
- ✅ Page Object Model with PageFactory
- ✅ XPath-only locators
- ✅ WebDriverWait (no Thread.sleep)
- ✅ Robust exception handling
- ✅ 10 valid login test cases
- ✅ 15 invalid login test cases (including security tests)

**Running the Tests:**

```bash
cd 01_learnai/chapter2/SeleniumFramework
mvn clean test
```

---

## 🚀 Getting Started

### Prerequisites

**For Learn AI Basics (01_learnai):**
- Ollama (optional, for local LLMs)
- Any browser for testing AI-generated code

**For JavaScript Track (02_javascript):**
- Node.js 18+
- npm or yarn
- VSCode
- Chrome/Firefox browser

### Quick Start - Learn AI Basics

```bash
# Clone the repository
git clone https://github.com/PramodDutta/PlaywrightAIBatch.git
cd PlaywrightAIBatch

# Navigate to AI basics
cd 01_learnai

# Read Chapter 1 materials
cat chapter1/README.md

# Read prompt engineering frameworks
cat chapter2/RICEPOT.md
```

### Quick Start - JavaScript Track

```bash
# Clone the repository
git clone https://github.com/PramodDutta/PlaywrightAIBatch.git
cd PlaywrightAIBatch

# Navigate to JavaScript track
cd 02_javascript

# Start with JS_01 notes
cat Javascript_01_Intro_And_Setup/JS_01_notes.md

# Practice exercises
cat Javascript_01_Intro_And_Setup/JS_01_exercises.md
```

### Install Ollama (Both Tracks)

```bash
# macOS
brew install ollama

# Pull Llama 3 model
ollama pull llama3

# Start using
ollama run llama3
```

---

## 🛠️ Technology Stack

### Learn AI Basics (01_learnai)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Ollama** | Latest | Local LLM hosting |
| **GPT-4 / Claude** | Latest | AI code generation |

### JavaScript Track (02_javascript)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Playwright** | Latest | Modern browser automation |
| **TypeScript** | 5.3+ | Type-safe JavaScript |
| **Node.js** | 18+ | Runtime environment |
| **npm/yarn** | Latest | Package management |
| **Ollama** | Latest | Local LLM hosting |

---

## 📖 Recommended Learning Path

### Learn AI Basics (01_learnai)

```
Session 1: Chapter 1 - AI/ML Foundation
├── AI/ML/Deep Learning fundamentals
├── LLM comparisons and selection
├── Set up Ollama locally
└── Anti-hallucination rules

Session 2: Chapter 2 - Prompt Engineering
├── Master RICEPOT framework
├── Learn STAR, CLEAR, CRISP
├── Generate automation code with structured prompts
└── Apply anti-hallucination guidelines
```

### JavaScript Track (02_javascript)

```
Session 1: JS_01 - JavaScript Intro & V8 Engine
├── What is JavaScript (HTML/CSS/JS)
├── V8 Engine Architecture (Parser, AST, Ignition, TurboFan)
├── VSCode + Node.js Setup
├── 10 In-Class Exercises
└── 5 Homework Exercises

Session 2: JS_02 - Variables & Data Types
├── var, let, const (scope differences)
├── Hoisting & Temporal Dead Zone (TDZ)
├── Data Types (primitive vs non-primitive)
├── typeof operator and quirks
├── 10 In-Class Exercises
└── 5 Homework Exercises
```

---

## 🎓 About the Author

**Pramod Dutta** is a Principal SDET with 15+ years of experience in QA automation. He specializes in:

- Enterprise automation frameworks
- AI-powered testing
- CRM testing (Salesforce)
- Training and mentoring QA professionals

📧 Connect: [The Testing Academy](https://thetestingacademy.com/)

---

## 📜 License

This project is for educational purposes as part of The Testing Academy curriculum.

---

## ⭐ Star This Repo

If you find this helpful, please ⭐ star this repository to support the project!

---

<p align="center">
  Made with ❤️ by <a href="https://thetestingacademy.com/">The Testing Academy</a>
</p>
