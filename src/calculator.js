/**
 * Node.js CLI Calculator App
 * Supports basic arithmetic operations
 */

/**
 * Addition (+): Adds two or more numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction (-): Subtracts one number from another
 * @param {number} a - First number (minuend)
 * @param {number} b - Second number (subtrahend)
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication (×): Multiplies two or more numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division (÷): Divides one number by another
 * @param {number} a - Dividend (numerator)
 * @param {number} b - Divisor (denominator)
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If attempting to divide by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Modulo (%): Returns the remainder of division
 * @param {number} a - Dividend (numerator)
 * @param {number} b - Divisor (denominator)
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If attempting modulo by zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

/**
 * Power (^): Raises a base to an exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent/power
 * @returns {number} base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square Root (√): Calculates the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If attempting to find square root of negative number
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

// Export the calculator functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};
