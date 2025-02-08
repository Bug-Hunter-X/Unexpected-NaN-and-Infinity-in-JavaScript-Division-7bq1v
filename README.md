# Unexpected NaN and Infinity in JavaScript Division

This repository demonstrates a common issue in JavaScript related to division by zero and zero divided by zero resulting in NaN (Not a Number) and Infinity.  The `bug.js` file shows the problem, while `bugSolution.js` presents a robust solution.

## Problem

In JavaScript, dividing by zero produces `Infinity` and dividing zero by zero produces `NaN`. This can lead to unexpected behavior in applications. The `bug.js` file illustrates this issue.

## Solution

The `bugSolution.js` file provides a solution that checks for zero values before performing the division.  This prevents the generation of `NaN` and `Infinity`, ensuring more predictable program behavior.

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Open both `bug.js` and `bugSolution.js` files in a text editor.
4. Run the JavaScript code using a JavaScript runtime environment (like Node.js).

This example highlights the importance of thorough input validation to prevent unexpected results when dealing with division in JavaScript.