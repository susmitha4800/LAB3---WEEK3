const calculator = require('../calculator');

describe('Calculator Functions', () => {
  
  // ==========================================
  // ADDITION TESTS
  // ==========================================
  describe('add() - Addition', () => {
    // Test basic addition with positive integers (2 + 3)
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    // Test addition with two negative numbers (-5 + -3)
    test('should add two negative numbers: -5 + -3 = -8', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    // Test addition with mixed positive and negative numbers (10 + -4)
    test('should add positive and negative numbers: 10 + -4 = 6', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    // Test addition with zero (identity element) - 5 + 0
    test('should add zero to a number: 5 + 0 = 5', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    // Test adding zero to zero edge case - 0 + 0
    test('should add two zeros: 0 + 0 = 0', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    // Test addition with decimal/floating-point numbers (2.5 + 1.5)
    test('should handle decimal numbers: 2.5 + 1.5 = 4', () => {
      expect(calculator.add(2.5, 1.5)).toBe(4);
    });

    // Test addition with large numbers (1000000 + 2000000)
    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ==========================================
  // SUBTRACTION TESTS
  // ==========================================
  describe('subtract() - Subtraction', () => {
    // Test basic subtraction with positive integers (10 - 4)
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    // Test subtraction resulting in negative number (5 - 10)
    test('should subtract and result in negative: 5 - 10 = -5', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    // Test subtraction with two negative numbers (-10 - (-3))
    test('should subtract two negative numbers: -10 - (-3) = -7', () => {
      expect(calculator.subtract(-10, -3)).toBe(-7);
    });

    // Test subtracting a negative number (10 - (-5)) equals addition
    test('should subtract negative from positive: 10 - (-5) = 15', () => {
      expect(calculator.subtract(10, -5)).toBe(15);
    });

    // Test subtraction with zero (identity element) - 5 - 0
    test('should subtract zero from a number: 5 - 0 = 5', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    // Test subtracting zero from zero edge case - 0 - 0
    test('should subtract two zeros: 0 - 0 = 0', () => {
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    // Test subtraction with decimal/floating-point numbers (10.5 - 2.5)
    test('should handle decimal numbers: 10.5 - 2.5 = 8', () => {
      expect(calculator.subtract(10.5, 2.5)).toBe(8);
    });

    // Test subtraction with large numbers (5000000 - 2000000)
    test('should subtract large numbers: 5000000 - 2000000 = 3000000', () => {
      expect(calculator.subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  // ==========================================
  // MULTIPLICATION TESTS
  // ==========================================
  describe('multiply() - Multiplication', () => {
    // Test basic multiplication with positive integers (45 * 2) from image
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    // Test multiplication with two negative numbers (-5 * -3) yields positive
    test('should multiply two negative numbers: -5 * -3 = 15', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    // Test multiplication with mixed positive and negative numbers (10 * -2)
    test('should multiply positive and negative numbers: 10 * -2 = -20', () => {
      expect(calculator.multiply(10, -2)).toBe(-20);
    });

    // Test multiplication with zero (absorbing element) - 5 * 0
    test('should multiply by zero: 5 * 0 = 0', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    // Test multiplication with one (identity element) - 5 * 1
    test('should multiply by one: 5 * 1 = 5', () => {
      expect(calculator.multiply(5, 1)).toBe(5);
    });

    // Test multiplication with decimal/floating-point numbers (2.5 * 4)
    test('should handle decimal numbers: 2.5 * 4 = 10', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    // Test multiplication with large numbers (1000 * 2000)
    test('should multiply large numbers: 1000 * 2000 = 2000000', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });

    // Test multiplication with fractional/decimal numbers (0.5 * 0.5)
    test('should multiply fractional numbers: 0.5 * 0.5 = 0.25', () => {
      expect(calculator.multiply(0.5, 0.5)).toBe(0.25);
    });
  });

  // ==========================================
  // DIVISION TESTS
  // ==========================================
  describe('divide() - Division', () => {
    // Test basic division with positive integers (20 / 5) from image
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    // Test division with two negative numbers (-20 / -4) yields positive
    test('should divide two negative numbers: -20 / -4 = 5', () => {
      expect(calculator.divide(-20, -4)).toBe(5);
    });

    // Test division with mixed positive and negative numbers (20 / -4)
    test('should divide positive by negative: 20 / -4 = -5', () => {
      expect(calculator.divide(20, -4)).toBe(-5);
    });

    // Test division of zero by a positive number (0 / 5)
    test('should divide zero by a number: 0 / 5 = 0', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    // Test division with decimal divisor (10 / 2.5)
    test('should handle decimal numbers: 10 / 2.5 = 4', () => {
      expect(calculator.divide(10, 2.5)).toBe(4);
    });

    // Test division that results in a decimal quotient (5 / 2)
    test('should divide resulting in decimal: 5 / 2 = 2.5', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    // Test division with large numbers (1000000 / 1000)
    test('should divide large numbers: 1000000 / 1000 = 1000', () => {
      expect(calculator.divide(1000000, 1000)).toBe(1000);
    });

    // Test division by one (identity element) - 42 / 1
    test('should handle division by one: 42 / 1 = 42', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });
  });

  // ==========================================
  // MODULO TESTS
  // ==========================================
  describe('modulo() - Modulo/Remainder', () => {
    // Test basic modulo with positive integers (5 % 2) from image
    test('should return remainder: 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    // Test modulo with larger numbers (10 % 3)
    test('should calculate modulo: 10 % 3 = 1', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
    });

    // Test modulo resulting in zero (10 % 5)
    test('should return zero when evenly divisible: 10 % 5 = 0', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    // Test modulo with negative dividend (-10 % 3)
    test('should handle negative dividend: -10 % 3 = -1', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    // Test modulo with negative divisor (10 % -3)
    test('should handle negative divisor: 10 % -3 = 1', () => {
      expect(calculator.modulo(10, -3)).toBe(1);
    });

    // Test modulo with two negative numbers (-10 % -3)
    test('should handle two negative numbers: -10 % -3 = -1', () => {
      expect(calculator.modulo(-10, -3)).toBe(-1);
    });

    // Test modulo with one (any number % 1 = 0)
    test('should return zero for modulo with one: 42 % 1 = 0', () => {
      expect(calculator.modulo(42, 1)).toBe(0);
    });

    // Test modulo with decimal numbers (7.5 % 2)
    test('should handle decimal numbers: 7.5 % 2 = 1.5', () => {
      expect(calculator.modulo(7.5, 2)).toBe(1.5);
    });
  });

  // ==========================================
  // POWER TESTS
  // ==========================================
  describe('power() - Exponentiation', () => {
    // Test basic power operation (2 ^ 3) from image
    test('should raise to power: 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    // Test power operation (5 ^ 2)
    test('should raise to power: 5 ^ 2 = 25', () => {
      expect(calculator.power(5, 2)).toBe(25);
    });

    // Test any number to power of zero equals one (5 ^ 0)
    test('should return one when exponent is zero: 5 ^ 0 = 1', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    // Test any number to power of one equals itself (5 ^ 1)
    test('should return base when exponent is one: 5 ^ 1 = 5', () => {
      expect(calculator.power(5, 1)).toBe(5);
    });

    // Test zero to any positive power (0 ^ 3)
    test('should return zero when base is zero: 0 ^ 3 = 0', () => {
      expect(calculator.power(0, 3)).toBe(0);
    });

    // Test one to any power (1 ^ 10)
    test('should return one when base is one: 1 ^ 10 = 1', () => {
      expect(calculator.power(1, 10)).toBe(1);
    });

    // Test negative base with positive exponent (-2 ^ 3)
    test('should handle negative base: -2 ^ 3 = -8', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    // Test negative base with even exponent (-2 ^ 4)
    test('should handle negative base with even exponent: -2 ^ 4 = 16', () => {
      expect(calculator.power(-2, 4)).toBe(16);
    });

    // Test negative exponent (2 ^ -2)
    test('should handle negative exponent: 2 ^ -2 = 0.25', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    // Test fractional exponent (4 ^ 0.5)
    test('should handle fractional exponent: 4 ^ 0.5 = 2', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    // Test large numbers (10 ^ 6)
    test('should handle large results: 10 ^ 6 = 1000000', () => {
      expect(calculator.power(10, 6)).toBe(1000000);
    });
  });

  // ==========================================
  // SQUARE ROOT TESTS
  // ==========================================
  describe('squareRoot() - Square Root', () => {
    // Test basic square root (√16) from image
    test('should calculate square root: √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    // Test square root (√25)
    test('should calculate square root: √25 = 5', () => {
      expect(calculator.squareRoot(25)).toBe(5);
    });

    // Test square root of zero (√0)
    test('should return zero for square root of zero: √0 = 0', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    // Test square root of one (√1)
    test('should return one for square root of one: √1 = 1', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    // Test square root of decimal (√2)
    test('should calculate square root of decimal: √2 ≈ 1.414', () => {
      const result = calculator.squareRoot(2);
      expect(result).toBeCloseTo(1.414, 2);
    });

    // Test square root of decimal number (√6.25)
    test('should handle decimal input: √6.25 = 2.5', () => {
      expect(calculator.squareRoot(6.25)).toBe(2.5);
    });

    // Test square root of large number (√1000000)
    test('should handle large numbers: √1000000 = 1000', () => {
      expect(calculator.squareRoot(1000000)).toBe(1000);
    });

    // Test square root of small decimal (√0.25)
    test('should handle small decimals: √0.25 = 0.5', () => {
      expect(calculator.squareRoot(0.25)).toBe(0.5);
    });
  });

  // ==========================================
  // EDGE CASES & ERROR HANDLING
  // ==========================================
  describe('Edge Cases & Error Handling', () => {
    // Test division by zero throws an error with correct message
    test('should throw error when dividing by zero: 10 / 0', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Cannot divide by zero');
    });

    // Test division of zero by zero also throws an error
    test('should throw error when dividing zero by zero: 0 / 0', () => {
      expect(() => {
        calculator.divide(0, 0);
      }).toThrow('Cannot divide by zero');
    });

    // Test that division by zero throws an Error type (for error type checking)
    test('should throw error with specific message type', () => {
      expect(() => {
        calculator.divide(100, 0);
      }).toThrow(Error);
    });

    // Test modulo by zero throws an error
    test('should throw error when modulo by zero: 10 % 0', () => {
      expect(() => {
        calculator.modulo(10, 0);
      }).toThrow('Cannot perform modulo by zero');
    });

    // Test square root of negative number throws an error
    test('should throw error for square root of negative number: √-5', () => {
      expect(() => {
        calculator.squareRoot(-5);
      }).toThrow('Cannot calculate square root of negative number');
    });

    // Test square root of zero should not throw error
    test('should not throw error for square root of zero: √0', () => {
      expect(() => {
        calculator.squareRoot(0);
      }).not.toThrow();
    });

    // Test square root of large negative number
    test('should throw error for large negative number: √-1000', () => {
      expect(() => {
        calculator.squareRoot(-1000);
      }).toThrow('Cannot calculate square root of negative number');
    });
  });

  // ==========================================
  // CHAINED OPERATIONS TESTS
  // ==========================================
  describe('Chained Operations', () => {
    // Test complex multi-step calculation: (2 + 3) * 2 - 4 / 2 = 8
    test('should handle complex calculations: (2 + 3) * 2 - 4 / 2 = 8', () => {
      const step1 = calculator.add(2, 3);        // 5
      const step2 = calculator.multiply(step1, 2); // 10
      const step3 = calculator.divide(4, 2);     // 2
      const result = calculator.subtract(step2, step3); // 8
      expect(result).toBe(8);
    });

    // Test sequential operations: 100 / 5 - 3 * 2 = 14
    test('should handle sequential operations: 100 / 5 - 3 * 2 = 14', () => {
      const step1 = calculator.divide(100, 5);   // 20
      const step2 = calculator.multiply(3, 2);   // 6
      const result = calculator.subtract(step1, step2); // 14
      expect(result).toBe(14);
    });
  });
});
