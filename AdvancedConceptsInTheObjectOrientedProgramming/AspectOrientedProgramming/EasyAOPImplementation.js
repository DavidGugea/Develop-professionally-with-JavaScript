class Calculator {
	sum(x, y) {
		return x + y;
	}
	prod(x, y) {
		return x * y;
	}
}

const calculator = new Calculator();
const originalSum = calculator.sum;
const originalProd = calculator.prod;

calculator.sum = (...args) => {
	// Implementing logging 
	console.log(`Calling sum() with ${args.join(', ')}`);
	// Return the return value of the original method
	return originalSum(...args);
};
calculator.prod = (...args) => {
	// Implementing logging
	console.log(`Calling prod() with ${args.join(", ")}`);
	// Return the return value of the original method
	return originalProd(...args);
};

console.log(calculator.sum(5, 6));
console.log(calculator.prod(5, 6));