// First Function
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function
function convertTemperature(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Third Function
function calculateFactorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Fourth Function 
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}

// Exporting the functions to make them accessible in other files
export default {
    printWelcomeMessage,
    convertTemperature,
    calculateFactorial,
    calculateSquareRoot
};
