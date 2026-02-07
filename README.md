# 🤖 Playwright AI Batch - AI-Powered QA Automation

<p align="center">
  <img src="https://img.shields.io/badge/AI-Powered%20QA-blueviolet?style=for-the-badge" alt="AI Powered QA">
  <img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" alt="Selenium">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
</p>

---

**Author:** Pramod Dutta  
**Role:** Principal SDET  
**Website:** [The Testing Academy](https://thetestingacademy.com/)  
**LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

## 📖 Course Overview

This repository contains hands-on materials for mastering **AI-Powered Test Automation**. Learn how to leverage Large Language Models (LLMs) for intelligent test case generation, automation framework development, and enterprise QA practices.

---

## 📚 Table of Contents

| Chapter | Title | Description |
|---------|-------|-------------|
| **Chapter 1** | [Foundation Model](#chapter-1-foundation-model) | AI/ML fundamentals, LLM comparisons, and setup guides |
| **Chapter 2** | [Prompt Engineering](#chapter-2-prompt-engineering) | Prompt frameworks and enterprise automation |

---

## 📁 Repository Structure

```
PlaywrightAIBatch/
├── README.md
├── chapter_01_foundations/           # AI/ML Fundamentals
│   ├── ch_01_ml_ai_deep_learning.md  # AI vs ML vs Deep Learning
│   ├── ch_01_llm_comparisons.md      # Model comparison guide
│   ├── ch_01_anti_hallucination_rule.md  # Anti-hallucination rules
│   └── practical_guides/
│       └── ch_01_local_llm_setup_ollama.md  # Ollama setup
│
└── chapter_02_prompts/               # Prompt Engineering
    ├── RICEPOT.md                    # RICEPOT framework example
    ├── Prompt_Frameworks.md          # STAR, CLEAR, CRISP frameworks
    └── SeleniumFramework/            # Enterprise Selenium Framework
        ├── pom.xml                   # Maven configuration
        ├── testng.xml                # TestNG suite
        └── src/
            ├── main/java/com/salesforce/
            │   ├── base/BaseTest.java    # Test base class
            │   └── pages/LoginPage.java  # Page Object Model
            └── test/java/com/salesforce/tests/
                ├── ValidLoginTest.java   # Positive test cases
                └── InvalidLoginTest.java # Negative test cases
```

---

## 📗 Chapter 1: Foundation Model

### 🎯 Learning Objectives

- Understand the difference between AI, ML, and Deep Learning
- Compare closed-source vs open-source LLMs
- Set up local LLMs for QA workflows
- Apply anti-hallucination rules

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `ch_01_ml_ai_deep_learning.md` | Comprehensive guide on AI → ML → Deep Learning → LLMs hierarchy |
| `ch_01_llm_comparisons.md` | Comparison of GPT-4, Claude, Llama, Mistral, and other models |
| `ch_01_anti_hallucination_rule.md` | Rules to prevent AI from making up information |
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

## 📘 Chapter 2: Prompt Engineering

### 🎯 Learning Objectives

- Master prompt engineering frameworks
- Generate enterprise-level automation code
- Build Page Object Model frameworks
- Implement robust test automation

### 📄 Topics Covered

| File | Description |
|------|-------------|
| `RICEPOT.md` | Role, Intent, Context, Expected, Persona, Output, Task framework |
| `Prompt_Frameworks.md` | STAR, CLEAR, CRISP frameworks comparison |
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
cd chapter_02_prompts/SeleniumFramework
mvn clean test
```

---

## 🚀 Getting Started

### Prerequisites

- Java 17+
- Maven 3.8+
- Node.js 18+ (for Playwright projects)
- Chrome/Firefox browser

### Quick Start

```bash
# Clone the repository
git clone https://github.com/PramodDutta/PlaywrightAIBatch.git
cd PlaywrightAIBatch

# Run Selenium tests
cd chapter_02_prompts/SeleniumFramework
mvn clean test
```

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Selenium** | 4.18.1 | Browser automation |
| **TestNG** | 7.9.0 | Test framework |
| **Playwright** | Latest | Modern automation |
| **Java** | 17 | Primary language |
| **Maven** | 3.8+ | Build tool |
| **Ollama** | Latest | Local LLM hosting |

---

## 📖 Recommended Learning Path

```
Week 1: Chapter 1 - Foundation Model
├── Day 1-2: AI/ML/Deep Learning fundamentals
├── Day 3-4: LLM comparisons and selection
├── Day 5-6: Set up Ollama locally
└── Day 7: Practice anti-hallucination rules

Week 2: Chapter 2 - Prompt Engineering
├── Day 1-2: Master RICEPOT framework
├── Day 3-4: Learn STAR, CLEAR, CRISP
├── Day 5-6: Generate automation code with prompts
└── Day 7: Build your own framework
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
