// if you are doing small projects do not use ts
// only if you are creating very large project then only ts
// Every correct js is correct ts
// import type { User } from "./types";
// import fs from "node:fs";
// console.log("hello world!");
// // then why we need ts ?
// // -> compile time type safety and
// // dev time warnings of errors
// // and few more extra features(Mostly best
// // oops syntax and good understanding of
// // function what are they doing just by seeing
// // the code...)
// // 1. Types
// // number string bigint boolean any
// // Primitive data types
// let age: number = 22;
// let username: string = "debottam";
// let phone_no: bigint = 9073850584n;
// let isStrudent: boolean = true;
// console.log(age, username, phone_no, isStrudent);
// // Reference data types
// // array and object
// // Array
// let arr: any[] = ["fgfg", 11, "dbgdbd", 123456];
// console.log(arr);
// let names: string[] = ["fgfg", "dbgdbd"];
// console.log(arr);
// let data: (string | number | boolean)[] = [
//   "hjfhdg",
//   4545,
//   true,
//   false,
//   "fhfjd",
// ];
// console.log(data);
// // Tuple or Immutable array
// let confidential: readonly [string, string, string] = ["gagan", "deb", "shub"];
// console.log(confidential);
// // confidential.push("hacker");
// // console.log(confidential);
// // Object
// // Custom data types
// // -> using type
// // -> using interface
// let user1: User = {
//   uname: "gagan",
//   age: 23,
// };
// console.log(user1);
// fs.writeFileSync("./hello.txt", "hello", "utf-8");
// interface ParentName {
//   fathername?: string;
//   mothername?: string;
// }
// interface Profile extends ParentName {
//   name?: string;
//   age?: number;
// }
// interface Admin extends ParentName, Profile {
//   phone?: number;
// }
// let a1: Admin = {
//   name: "deb",
//   phone: 743165,
// };
// console.log(a1);
// // Most used data type in js is Array of objects\
// // This is not very useful
// let arrOBJ: any[] = [
//   {},
//   { name: "debottam kar", age: 22 },
//   { papa: "nhi manega" },
//   "habi jabi",
//   123456,
//   true,
//   false,
//   null,
//   undefined,
// ];
// console.log(arrOBJ);
// // This is the most used type array of objects
// type User = {
//   uname: string;
//   age: number;
// };
// const users: Admin[] = [
//   {},
//   { name: "deb", age: 22 },
//   { name: "shub", phone: 7894564123 },
// ];
// console.log(users);
// Function (One Of the most import )
// 1. With out argument and with out return
// function main1(): void {
//   console.log("With out argument and with out return");
// }
// main1();
// 2. With argument and with out return
// function Add(a: number, b: number): void {
//   console.log(a + b);
// }
// Add(10, 5);
// 3. With out argument and with return
// function main2(): string {
//   return "With out argument and with return";
// }
// console.log(main2());
// 4. With argument and with return
function Sub(a, b) {
    return a - b;
}
// Sub(15, 5);
var res = Sub(10, 5);
console.log(res);
// CallBack or Higher Order Function
// in js
// function func(cbk) {
//   console.log(cbk(100, 5));
// }
// func(Sub);
// in ts
// arrow function in js and same similar type declaration for function in ts both are completely
// different
// function func(callback: (arg1: number, arg2: number) => number): void {
//   console.log(callback(100, 5));
// }
// func(Sub);
// in js
// function func() {
//   return function () {
//     console.log("Hello world");
//   };
// }
// let newSub = func();
// newSub();
// in ts
function func() {
    return function (str) {
        console.log("Hello world ".concat(str));
    };
}
var newSub = func();
newSub(69);
// in js Decorator
function Decorator(callback) {
    return function (a, b) {
        if (a > b) {
            console.log(callback(a, b));
        }
        else {
            console.log("I donot want negative value");
        }
    };
}
var WithMakeUpSub = Decorator(Sub);
WithMakeUpSub(100, 50);
WithMakeUpSub(5, 100);
WithMakeUpSub(100, 5);
// OPPS Next din
