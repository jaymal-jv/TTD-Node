class StringCalculator {
    add(input) {
      if (input === '') return 0;
      return parseInt(input);
    }
  }
  
  module.exports = StringCalculator;