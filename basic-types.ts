// Boolean

let isDone: boolean = false;

// Number - all numbers are floating point values

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String

let color: string = "blue";
color = "red";

//     template strings (surrounded by ticks, `) can span multiple lines
let fullName: string = "Bob Bobbington";
let age: number = 37;
let sentence: string = `Hello my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//     equivalent to,
let sentenceOld: string = "Hello, my name is " + fullName + "./n/n"
    + "I'll be " + (age + 1) + " years old next month.";

// Array

//     method #1:
let list1: number[] = [1, 2, 3];

//     method #2:
let list2: Array<number> = [1, 2, 3];

// Tuples
//     tuples allow you to express an array where the type of a fixed number of elements is known,
//     but need not be the same.

//     declare a tuple type
let x: [string, number];
//     initialize it
x = ["hello", 10];  // OK
//     initialize it incorrectly
// x = [10, "hello"];  // Error
console.log(x[0].substr(1));  // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
