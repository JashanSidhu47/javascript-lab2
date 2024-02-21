// Importing the other JavaScript file (utilities.js) that contains the functions
import { printWelcomeMessage, convertTemperature, calculateFactorial, calculateSquareRoot } from './utilities';

// Calling/invoke the functions from the utilities file
printWelcomeMessage("John", "Doe");
console.log("Temperature in Fahrenheit:", convertTemperature(25));
console.log("Factorial of 5:", calculateFactorial(5));
console.log("Square root of 16:", calculateSquareRoot(16));
