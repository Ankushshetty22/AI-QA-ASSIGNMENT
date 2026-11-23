# KnowQA: Knowledge-Base Document Question Answering System

**Web Reference**: [KnowQA (Vercel)](https://knowqa.vercel.app/)  
**Course Code & Title**: AID201A – Artificial Intelligence  
**Institution**: Ramaiah University of Applied Sciences (RUAS)  
**Faculty & Department**: Faculty of Engineering & Technology, Department of CSE  
**Course Leader**: M Tanushri &nbsp;|&nbsp; **Batch**: 3rd Sem / Batch 2025  
**Assignment**: Assignment – 1 (CET A Component, 15 Marks)  

---

## 🎯 System Overview

KnowQA is an explainable, deterministic, symbolic AI Document Question Answering system built in strict compliance with the **RUAS AID201A Assignment 1** brief.

### ⚠️ Strict Non-NLP & Non-RAG Compliance
- ❌ **Zero Statistical NLP**: No tokenizers, word embeddings, transformers, or probabilistic language models.
- ❌ **Zero Vector RAG**: No vector stores, cosine similarity searches, or ungrounded generative hallucinations.
- ✅ **Pure Classical Symbolic AI**:
  - **Knowledge Representation**: Semantic network of $(Subject, Predicate, Object)$ triples with explicit negation, plus Horn-style production rules with variables (`?x`, `?y`).
  - **Inference**: Forward chaining to a fixpoint closure (transitivity, symmetry, inverse relations, user Horn rules) and default inheritance with exceptions over the `is-a` taxonomy (nearest ancestor wins).
  - **Search**: Breadth-First Search (BFS) for shortest relational connection paths and exhaustive search for superlatives over numeric scales.
  - **Deterministic Proofs**: Every single answer is accompanied by an audit-ready, formal symbolic proof tree.

---

## 📋 Course Rubric & CO Fulfillment (15 / 15 Marks)

| Section | Assignment Component | Max Marks | Target COs | Implementation in KnowQA |
| :---: | :--- | :---: | :---: | :--- |
| **Part A - Sec 1** | **Document Processing & Knowledge Base Construction** | **3 Marks** | CO-1, CO-2 | Controlled Natural Language parser, directives (`@closed`, `@relation`, `@scale`), triples store, facts table with live filtering, and rule base. |
| **Part A - Sec 2** | **Question Processing and Information Retrieval** | **7 Marks** | CO-2, CO-3 | Pattern-directed question templates, nearest-ancestor inheritance reasoning, forward-chaining rules, and relation graph search (BFS). |
| **Part A - Sec 3** | **Answer Generation and Evaluation** | **5 Marks** | CO-4, CO-5 | Deterministic answer generation with formal proof trees, automated evaluation suite, 7 KPI metrics, and CSV export. |
| **Report** | **IEEE Format Academic Report** | Included | CO-1 to CO-5 | Full 6-page equivalent paper in `docs/IEEE_Assignment_Report.md`. |
| **Total** | **Component – CET A: Assignment** | **15 / 15** | | Complete working system. |

---

## 🔬 Benchmark Datasets Included

1. **IPL & Royal Challengers Bengaluru (RCB) (Default Primary Domain)**:
   - Full franchise intelligence, player roles (Virat Kohli, Faf du Plessis, Glenn Maxwell, Mohammed Siraj, Rajat Patidar, Dinesh Karthik, Will Jacks, Yash Dayal), home ground (M Chinnaswamy Stadium, Bengaluru), rules and bowling quotas.
2. **Animal Taxonomy**:
   - Class inheritance, exceptions (e.g. penguins cannot fly overriding birds can fly), and dietary carnivore rules.
3. **Solar System**:
   - Planetary diameters, orbits, moon definitions, superlatives (largest/smallest), and closed-world reasoning.
4. **Ramaiah University AID201A Academic Regulations**:
   - Faculty, course outcomes, assignment rubrics, prerequisites, and attendance rules.

---

## 🚀 Quick Launch

### Option 1: Double-Click (Zero Setup)
Double-click `index.html` or `start.bat` to launch the website instantly in your default web browser.

### Option 2: Python Local Server
```bash
python serve.py
```
Open `http://localhost:8000/index.html` in your browser.

---

## 🗂️ File Structure

```
doc-qa-ai-system/
├── index.html                   # Clean KnowQA Single-Page Application interface
├── engine.js                    # KnowQA symbolic reasoning engine (Parse, Infer, Query, Evaluate)
├── samples.js                   # Pre-loaded benchmark datasets (IPL & RCB, Animals, Solar, Academic)
├── app.js                       # UI controller, tab switching, and CSV export
├── serve.py                     # Zero-dependency Python HTTP server
├── start.bat                    # One-click Windows launcher
├── README.md                    # System documentation
└── docs/
    └── IEEE_Assignment_Report.md# Complete IEEE formatted academic report
```
