// ======== V EASY BOYS ========

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

// ======== EASY BOYS ========

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
function bitwiseAND(n1, n2) {
    return n1 & n2
}

function bitwiseOR(n1, n2) {
    return n1 | n2
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2
}

// Object decon
function objDecon() {
    const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }
    const str = `({ name, email, ...rest} = user ).toString()`
    //The important part of this was the ... operator
}

// Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    return str.includes(' ');
}

// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
function nSidedShape(n) {
    switch (n) {
        case n = 1:
            return 'circle';
        case n = 2:
            return 'semi-circle'
        case n = 3:
            return 'triangle';
        case n = 4:
            return 'square'
        case n = 5:
            return 'pentagon'
        case n = 6:
            return 'hexagon'
        case n = 7:
            return 'heptagon'
        case n = 8:
            return 'octagon'
        case n = 9:
            return 'nonagon'
        case n = 10:
            return 'decagon'
    }
}

// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
function addUpTo(n) {
    let total = 0;
    let newArr = [];
    for (let i = n; i > 0; i--) {
        newArr.push(i)
    }
    newArr.forEach(num => total += num)
    return total;
}

// Write a function that validates whether two strings are identical. Make it case insensitive.
function match(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}

// Create a function that takes an array of words and transforms it into an array of each word's length.
function wordLengths(arr) {
    let newArr = [];
    arr.forEach(ind => newArr.push(ind.length))
    return newArr;
}

// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {
    let newArr = [];
    arr.forEach(ind => newArr.push(ind * 2));
    return newArr;
}
//Write a function that takes an integer and:
// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
function helloWorld(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'Hello World'
    } else if (num % 5 == 0) {
        return 'World'
    } else if (num % 3 == 0) {
        return 'Hello'
    }
}

//Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
function countSyllables(str) {
    return str.length / 2;
}

// Create a function that returns true if the first array can be nested inside the second
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    if (Math.min(...arr1) > Math.min(...arr2)) {
        return true
    } else {
        return false
    }

    if (Math.max(...arr1) < Math.max(...arr2)) {
        return true
    } else {
        return false
    }
}

// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
function equalSlices(total, people, each) {
    if (people === 0) {
        return true
    }
    return people * each <= total
}

//Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(word) {
    return (word[word.length - 1] == "s");
}

//Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.

function isTriangle(a, b, c) {
    return (a + b > c && a + c > b && c + b > a)
}

//Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {
    return c.charCodeAt(0);
}

//Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
function addIndexes(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i + arr[i]
    }
    return arr;
}

