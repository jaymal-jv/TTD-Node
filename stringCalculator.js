class StringCalculator {
    add(input) {
      if (input === '') return 0;
      if (!input.includes(',')) return parseInt(input, 10);
      const numbers = input.split(',').map(num => parseInt(num, 10));
      return numbers.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;