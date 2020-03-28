// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(n) {
    return (n % 5 === 0);
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
    return ((a + b) < 100);
}

// Implement a function that returns true if the parameters are equal, and false if they are different.
function checkEquality(a, b) {
    return a === b;
}

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    return num <= 0;
}

//Create a function to concatenate two integer arrays.
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(num) {
    return (num % 100 == 0);
}

// Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
    let str = ''
    return str += lastName + ', ' + firstName
}

// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
function search(arr, item) {
    return arr.indexOf(item);
}

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(a, b) {
    return (a % b == 0);
}

// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes) {
    //l * w * h
    return sizes.length * sizes.width * sizes.height;
}

// Write a function that returns the length of a string. Make your function recursive.
function findLength(str) {
    return str.length;
}

// Write a function to reverse an array.
function reverse(arr) {
    return arr.reverse();
}

// Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
    return s.length === 0;
}

// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
function moodToday(mood) {
    return "Today, I am feeling " + (mood ? mood : 'neutral');
}

// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
function cityFacts(city) {
    //X has a population of Y and is situated in Z
    return city.name + ' has a population of ' + city.population + ' and is situated in ' + city.continent
}

//Write a function to check if an array contains a particular number.
function check(arr, el) {
    return arr.includes(el);
}

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
function isLastCharacterN(word) {
    return word[word.length - 1] == 'n';
}

// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on... Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

//1 -> 1; 2 -> 4; 0 -> 0
function stackBoxes(n) {
    return n * n
}

// Create a function that returns the number of argument it was called with.
function numArgs() {
    return arguments.length;
}

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
function profitableGamble(prob, prize, pay) {
    return prob * prize > pay;
}



