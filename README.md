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

This repository contains hands-on materials for mastering **AI-Powered Test Automation** in both **Java (Selenium)** and **JavaScript (Playwright)** tracks. Learn how to leverage Large Language Models (LLMs) for intelligent test case generation, automation framework development, and enterprise QA practices.

---

## 🎯 Learning Tracks

This course offers **two parallel tracks** to accommodate different technology stacks:

| Track | Technology | Framework | Best For |
|-------|------------|-----------|----------|
| **01_learnai** | Java | Selenium + TestNG | Enterprise Java teams, traditional QA |
| **02_javascript** | JavaScript/TypeScript | Playwright | Modern web teams, full-stack developers |

**Choose your track** based on your team's technology stack, or learn both to become a versatile QA engineer!

---

## 📚 Table of Contents

| Chapter | Java Track (01_learnai) | JavaScript Track (02_javascript) |
|---------|-------------------------|----------------------------------|
| **Chapter 1** | [Foundation Model](#chapter-1-foundation-model-java-track) | [Foundation Model](#chapter-1-foundation-model-javascript-track) |
| **Chapter 2** | [Prompt Engineering](#chapter-2-prompt-engineering-java-track) | Coming Soon |

---

## 📁 Repository Structure

```
PlaywrightAIBatch/
├── README.md
│
├── 01_learnai/                       # Java + Selenium Track
│   ├── chapter1/                     # AI/ML Fundamentals (Java)
│   │   ├── README.md
│   │   ├── ch_01_ml_ai_deep_learning.md
│   │   ├── ch_01_llm_comparisons.md
│   │   ├── ch_01_anti_hallucination_rule.md
│   │   └── practical_guides/
│   │       └── ch_01_local_llm_setup_ollama.md
│   │
│   └── chapter2/                     # Prompt Engineering (Java)
│       ├── RICEPOT.md
│       ├── Prompt_Frameworks.md
│       ├── anti_hallucinations_rules.md
│       └── SeleniumFramework/        # Enterprise Selenium Framework
│           ├── pom.xml
│           ├── testng.xml
│           └── src/
│               ├── main/java/com/salesforce/
│               │   ├── base/BaseTest.java
│               │   └── pages/LoginPage.java
│               └── test/java/com/salesforce/tests/
│                   ├── ValidLoginTest.java
│                   └── InvalidLoginTest.java
│
└── 02_javascript/                    # JavaScript + Playwright Track
    ├── chapter1/                     # AI/ML Fundamentals (JavaScript)
    │   ├── README.md
    │   ├── ch_01_ml_ai_deep_learning.md
    │   ├── ch_01_llm_comparisons.md
    │   ├── ch_01_anti_hallucination_rule.md
    │   └── practical_guides/
    │       └── ch_01_local_llm_setup_ollama.md
    │
    └── chapter2/                     # Prompt Engineering (JavaScript)
        └── [Coming Soon]
```

---

## 📗 Chapter 1: Foundation Model (Java Track)

**Location:** `01_learnai/chapter1/`

### 🎯 Learning Objectives

- Understand the difference between AI, ML, and Deep Learning
- Compare closed-source vs open-source LLMs
- Set up local LLMs for QA workflows
- Apply anti-hallucination rules for Java/Selenium

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `ch_01_ml_ai_deep_learning.md` | Comprehensive guide on AI → ML → Deep Learning → LLMs hierarchy |
| `ch_01_llm_comparisons.md` | Comparison of GPT-4, Claude, Llama, Mistral for Java QA |
| `ch_01_anti_hallucination_rule.md` | Rules to prevent AI from generating incorrect Selenium code |
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

## 📗 Chapter 1: Foundation Model (JavaScript Track)

**Location:** `02_javascript/chapter1/`

### 🎯 Learning Objectives

- Understand AI/ML/Deep Learning fundamentals for JavaScript QA
- Compare LLMs for Playwright/Cypress test automation
- Set up local LLMs with Ollama for privacy-first testing
- Apply anti-hallucination rules for JavaScript/TypeScript code

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `ch_01_ml_ai_deep_learning.md` | AI fundamentals with Playwright/JavaScript context |
| `ch_01_llm_comparisons.md` | LLM comparison for JavaScript test automation |
| `ch_01_anti_hallucination_rule.md` | 10 rules to prevent bad Playwright code generation |
| `ch_01_local_llm_setup_ollama.md` | Ollama setup with Node.js integration examples |

### 💡 JavaScript-Specific Features

- Playwright API verification techniques
- TypeScript type safety with AI-generated code
- Node.js integration with Ollama
- VS Code extension setup for AI assistance

---

## 📘 Chapter 2: Prompt Engineering (Java Track)

**Location:** `01_learnai/chapter2/`

### 🎯 Learning Objectives

- Master prompt engineering frameworks
- Generate enterprise-level Selenium automation code
- Build Page Object Model frameworks
- Implement robust test automation with TestNG

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

## 📘 Chapter 2: Prompt Engineering (JavaScript Track)

**Location:** `02_javascript/chapter2/`

### 🚧 Coming Soon

This chapter will cover:
- Prompt engineering for Playwright test generation
- Building enterprise Playwright frameworks with AI
- TypeScript Page Object Models
- Advanced prompting techniques for JavaScript QA

**Expected Release:** Q2 2024

---

## 🚀 Getting Started

### Prerequisites

**For Java Track (01_learnai):**
- Java 17+
- Maven 3.8+
- Chrome/Firefox browser
- Ollama (optional, for local LLMs)

**For JavaScript Track (02_javascript):**
- Node.js 18+
- npm or yarn
- Chrome/Firefox browser
- Ollama (optional, for local LLMs)

### Quick Start - Java Track

```bash
# Clone the repository
git clone https://github.com/PramodDutta/PlaywrightAIBatch.git
cd PlaywrightAIBatch

# Navigate to Java track
cd 01_learnai

# Read Chapter 1 materials
cat chapter1/README.md

# Run Selenium tests (Chapter 2)
cd chapter2/SeleniumFramework
mvn clean test
```

### Quick Start - JavaScript Track

```bash
# Clone the repository
git clone https://github.com/PramodDutta/PlaywrightAIBatch.git
cd PlaywrightAIBatch

# Navigate to JavaScript track
cd 02_javascript

# Read Chapter 1 materials
cat chapter1/README.md

# Chapter 2 coming soon!
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

### Java Track (01_learnai)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Selenium** | 4.18.1 | Browser automation |
| **TestNG** | 7.9.0 | Test framework |
| **Java** | 17 | Primary language |
| **Maven** | 3.8+ | Build tool |
| **Ollama** | Latest | Local LLM hosting |

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

### Java Track (01_learnai)

```
Week 1: Chapter 1 - Foundation Model
├── Day 1-2: AI/ML/Deep Learning fundamentals
├── Day 3-4: LLM comparisons and selection
├── Day 5-6: Set up Ollama locally
└── Day 7: Practice anti-hallucination rules

Week 2: Chapter 2 - Prompt Engineering
├── Day 1-2: Master RICEPOT framework
├── Day 3-4: Learn STAR, CLEAR, CRISP
├── Day 5-6: Generate Selenium code with prompts
└── Day 7: Build your own Selenium framework
```

### JavaScript Track (02_javascript)

```
Week 1: Chapter 1 - Foundation Model
├── Day 1-2: AI/ML/Deep Learning for JavaScript QA
├── Day 3-4: LLM comparisons for Playwright
├── Day 5-6: Set up Ollama with Node.js
└── Day 7: Practice anti-hallucination rules

Week 2: Chapter 2 - Prompt Engineering (Coming Soon)
├── Day 1-2: Prompt frameworks for Playwright
├── Day 3-4: TypeScript test generation
├── Day 5-6: Build Page Object Models with AI
└── Day 7: Create enterprise Playwright framework
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
