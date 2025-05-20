class StringCalculator {
    add(input) {
      if (input === '') return 0;
      const numbers = input.split(',').map(num => parseInt(num, 10));
      return numbers.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;