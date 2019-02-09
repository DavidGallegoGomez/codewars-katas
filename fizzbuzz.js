/*

Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

*/


// Opción 1: 
var fizzbuzz = function(num) {
  var numbers = new Array(num).fill(); // Para rellenar el array
  
  return numbers.map(function(_, index) { // Para ignorar el valor (GENERADOR DE RANGOS)
    var i = index +1;
    
    if (i % 3 == 0 && i % 5 == 0) {
      return 'FizzBuzz';
    } else if (i % 3 == 0){
      return 'Fizz';
    } else if (i % 5 == 0){
      return 'Buzz';
    } else {
      return i;
    }
  })
};


// Opción 2: 
var fizzbuzz = num => {
  
  return new Array(num).fill().map((_, index) => { // Para ignorar el valor (GENERADOR DE RANGOS)
    var i = index + 1;
    
    return (i % 3 == 0 && i % 5 == 0) ? 'FizzBuzz' :  i % 3 == 0  ? 'Fizz' : i % 5 == 0 ? 'Buzz' : i

    });
  }

fizzbuzz(10);