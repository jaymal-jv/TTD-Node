String Calculator
This is an implementation of the String Calculator kata for the Incubyte TDD assessment, built using Node.js and Jest following Test-Driven Development (TDD) principles.
Setup

Clone the repository:
git clone https://github.com/jaymal-jv/TTD-Node
cd string-calculator


Install dependencies:
npm install


Run tests:
npm test



TDD Process
The code was developed using the Red-Green-Refactor cycle:

Write a failing test (Red).
Write minimal code to pass the test (Green).
Refactor to improve code quality while ensuring tests pass.
Commits reflect each step of the TDD process.

Features

Handles empty strings (returns 0).
Handles single numbers (e.g., "1" returns 1).
Handles multiple numbers separated by commas (e.g., "1,2,3,4" returns 10).
Handles new lines as separators (e.g., "1\n2,3" returns 6).
Throws an error for negative numbers with a descriptive message (e.g., "1,-2,-3" throws "Negative numbers not allowed: -2, -3").

