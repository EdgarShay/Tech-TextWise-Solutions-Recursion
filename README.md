
# TextWise Solutions Recursion Interview Assignment
The project implements a recursive string reversal function using JavaScript and Node.js.
I explain my problem-solving approach, recursion logic, and project structure.
The video also includes unit testing using Jest, normal and edge test cases, and a walkthrough of time and space complexity.

The goal of this project is to demonstrate understanding of recursion, clean code design, and testing best practices.

## Overview
This project implements a recursive string reversal function as part of TextWise Solutions ContentOptimizer tool enhancement.

The goal is to demonstrate understanding of recursion, unit testing, and algorithm complexity analysis.

---

## Features
- Recursive string reversal
- Input validation
- Unit testing with Jest
- Complexity analysis
- Flow diagram explanation

---

## Technologies Used
- Node.js
- JavaScript (ES Modules)
- Jest Testing Framework

---

## How Recursion Works
Recursion solves problems by calling itself with smaller inputs until reaching a base case.

Example:
reverse("abc")

reverse("abc")
→ reverse("bc") + "a"

reverse("bc")
→ reverse("c") + "b"

reverse("c")
→ Base case

Result: "cba"

## Test Cases

### Normal Cases
- Standard word
- Sentence with spaces
- Numeric string

### Edge Cases
- Empty string
- Single character
- Null input
---
## Time Complexity
O(n)
Each character is processed once.
---
## Space Complexity
O(n)
Recursive call stack stores function calls.
---
## Optimization Discussion
An iterative solution can reduce memory usage, but recursion improves readability
and demonstrates algorithm fundamentals.
---
## Clarifying Questions Considered
- Should empty strings be supported?
- Should special characters be supported?
- Should invalid input throw errors?
