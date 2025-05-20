class StringCalculator {
    add(input) {
      if (input === '') return 0;
      const delimiters = [',', '\n'];
      const numbers = input.split(new RegExp(`[${delimiters.join('')}]`)).map(num => parseInt(num, 10));
      return numbers.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;