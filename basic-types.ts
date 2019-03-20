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
