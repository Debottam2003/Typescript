"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number, string, bigint, boolean, array
// everything in js is already correct typescript
var username = "debottam";
var age = 22;
var phone = 7456461231n;
var isStudent = true;
// isStudent = "false" <- this is where we get type safety ...(1)
console.log(username, age, phone, isStudent);
var marks = [12, 56, 56.3];
var names = ["debottam", "rony"];
var random = ["sfgsj", true, 78798, "sbhsh"];
var tup = ["fgf", 23, true];
var arr = [23, "debottam"];
console.log(marks);
console.log(names);
console.log(random);
console.log(tup);
console.log(arr);
var user1 = {
    username: "debottam kar",
    fathername: "goutam kar",
    mothername: "soma kar",
    age: 22,
    //   isStudent: true,
    address: {
        city: "naihati",
        country: "india",
        zip: 743165,
    },
};
console.log(user1);
// ✅ Grab DOM elements with correct types
// const input = document.getElementById("nameInput") as HTMLInputElement;
// const button = document.getElementById("greetBtn") as HTMLButtonElement;
// const output = document.getElementById("output") as HTMLParagraphElement;
// // ✅ Add event listener with type safety
// button.addEventListener("click", () => {
//   const name = input.value.trim();
//   if (name) {
//     output.textContent = `Hello, ${name}! 👋`;
//   } else {
//     output.textContent = "Please enter your name.";
//   }
// });
// const el = document.getElementById("nameInput");
// if (el instanceof HTMLInputElement) {
//   console.log("Value:", el.value); // ✅ safe
// }
// const input = document.getElementById("nameInput");
// if (input instanceof HTMLInputElement) {
//   input.addEventListener("input", (event: Event) => {
//     const target = event.target as HTMLInputElement;
//     console.log("Current value:", target.value);
//   });
// }
// const button = document.querySelector<HTMLButtonElement>("#greetBtn");
// button?.addEventListener("click", () => {
//   console.log("Button clicked!");
// });
// const button = document.querySelector<HTMLButtonElement>("#greetBtn");
// button?.addEventListener("click", (event: MouseEvent) => {
//   console.log("Button clicked at:", event.clientX, event.clientY);
// });
// const form = document.querySelector<HTMLFormElement>("#userForm");
// form?.addEventListener("submit", (event: SubmitEvent) => {
//   event.preventDefault(); // ✅ Prevent page reload
//   const formData = new FormData(form);
//   console.log("Username:", formData.get("username"));
// });
// import React from "react";
// type GreetingProps = {
//   name: string;
//   age?: number; // optional prop
// };
// const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
//   return (
//     <div>
//       <h2>Hello, {name} 👋</h2>
//       {age && <p>You are {age} years old.</p>}
//     </div>
//   );
// };
// export default Greeting;
// import React, { useState } from "react";
// import Greeting from "./components/Greeting";
// const App: React.FC = () => {
//   const [count, setCount] = useState<number>(0);
//   return (
//     <div>
//       <Greeting name="Debottam" age={22} />
//       <button onClick={() => setCount(count + 1)}>
//         Clicked {count} times
//       </button>
//     </div>
//   );
// };
// export default App;
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log(e.target.value);
// };
function Add(a, b) {
    if (typeof a === "number" && typeof b === "number")
        console.log(a + b);
}
Add(5, 10);
function Sub(a, b) {
    return a - b;
}
var res = Sub(10, 5);
console.log(res);
console.log(typeof 10);
// primitive data type and reference data type same as java
// primitive -> number, string, boolean
// reference -> Number, String, Boolean
var uname = new String("deb kar");
console.log(uname);
// 🔹 Key Takeaway
// Always use string (lowercase) in TypeScript.
// Avoid String (uppercase), it refers to the object wrapper.
// Same rule applies for:
// number ✅ vs Number ❌
// boolean ✅ vs Boolean ❌
// higher order function: takes function as a argument or returns a function or both
// Type 1
// function callback(Sub: (a: number, b: number) => number) {
//   let res: number = Sub(20, 30);
//   console.log(res);
// }
// callback(Sub);
// this is not at all arrow function in js this is the type declaration of a function (a: number, b: number) => void
// Type 2
function callback() {
    return function (info) {
        return info + " this is very secret.";
    };
}
var newFunc = callback();
console.log(newFunc("Today is the day"));
