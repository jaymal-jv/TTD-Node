class StringCalculator {
    add(input) {
      if (input === '') return 0;
      const delimiters = [',', '\n'];
      const numbers = input.split(new RegExp(`[${delimiters.join('')}]`)).map(num => parseInt(num, 10));
      
      const negatives = numbers.filter(num => !isNaN(num) && num < 0);
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
      }
  
      return numbers.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
    }
  }
  
  module.exports = StringCalculator;