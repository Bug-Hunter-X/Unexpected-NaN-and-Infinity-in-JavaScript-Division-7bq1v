function foo(a, b) {
    if (b === 0) {
        if (a === 0) {
            return 0; // Or throw an error: throw new Error('Cannot divide zero by zero');
        } else {
            return Infinity; // Or throw an error: throw new Error('Division by zero');
        }
    }
    return a / b;
}

console.log(foo(0, 0)); // Output: 0
console.log(foo(1, 0)); // Output: Infinity or throws an error
console.log(foo(0, 1)); // Output: 0