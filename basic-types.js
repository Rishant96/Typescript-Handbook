// Boolean
var isDone = false;
// Number - all numbers are floating point values
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = "red";
//     template strings (surrounded by ticks, `) can span multiple lines
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//     equivalent to,
var sentenceOld = "Hello, my name is " + fullName + "./n/n"
    + "I'll be " + (age + 1) + " years old next month.";
// Array
//     method #1:
var list1 = [1, 2, 3];
//     method #2:
var list2 = [1, 2, 3];
// Tuples
//     tuples allow you to express an array where the type of a fixed number of elements is known,
//     but need not be the same.
//     declare a tuple type
var x;
//     initialize it
x = ["hello", 10]; // OK
//     initialize it incorrectly
// x = [10, "hello"];  // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
