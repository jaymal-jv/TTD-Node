const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('should return the number for a single number string', () => {
    expect(calculator.add('1')).toBe(1);
  });

  test('should return sum of two numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  test('should handle multiple numbers', () => {
    expect(calculator.add('1,2,3,4')).toBe(10);
  });

  test('should handle new lines as separators', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should throw error for negative numbers', () => {
    expect(() => calculator.add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
  });
});