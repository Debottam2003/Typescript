//? Basic Arithmetic Operators in TypeScript
let num: number = 10 + 20;
num = num - 5;
num = num * 2;
num = num / 5;
num = num % 3;
console.log("Final value of num:", num);

//? Assignment Operators
let a: number = 10;
a += 5;
a -= 3;
a *= 2;
a /= 4;
a %= 3;
console.log("Final value of a:", a);

//? Comparison Operators
let x: number = 10;
let y: number = 20;
console.log("x == y:", x == y);// compares only value
console.log("x != y:", x != y);
console.log("x === y:", x === y);// strict comparison compares both data type and value
console.log("x !== y:", x !== y);
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);

//? Logical Operators
let p: boolean = true;
let q: boolean = false;
console.log("p && q:", p && q);
console.log("p || q:", p || q);
console.log("!p:", !p);

//? String Concatenation
let str1: string = "Hello, ";
let str2: string = "World!";
let greeting: string = str1 + str2;
console.log(greeting);

//? Ternary Operator
let age: number = 18;
let canVote: string = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);
