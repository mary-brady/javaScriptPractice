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



