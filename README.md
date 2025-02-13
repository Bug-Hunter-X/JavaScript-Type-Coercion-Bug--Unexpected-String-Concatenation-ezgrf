# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion during arithmetic operations.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition. This can lead to unexpected results and errors in your code.

## Bug Description
The `foo` function is intended to add two numbers. However, if one of the arguments is a string, JavaScript converts the number to a string and concatenates them.

## Solution
The solution involves explicit type checking and conversion to ensure that both operands are numbers before performing addition.  This prevents unexpected type coercion.