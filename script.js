
/**
* Filters out even numbers from the user input and updates the result on the page.
*/
function filterEvenNumbers() {
// Get the input value
const inputField = document.getElementById('numberInput');
const inputValue = inputField.value;

// Convert the input string to an array of numbers
const numbersArray = inputValue.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

// Function to get even numbers from an array
const getEvenNumbers = numbers => numbers.filter(number => number % 2 === 0);

// Get the even numbers
const evenNumbers = getEvenNumbers(numbersArray);

// Display the result
const resultElement = document.getElementById('result');
if (evenNumbers.length > 0) {
resultElement.textContent = `Even numbers: ${evenNumbers.join(', ')}`;
} else {
resultElement.textContent = 'No even numbers .';
}
}
