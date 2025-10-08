// interface Users {
//     name: string,
//     age: number
// };

// let response = await fetch("http://localhost:3333/api/home");
// let data = await response.json();
// console.log(data);

let promise = fetch("http://google.com");
let response = await promise;
let data = await response.text();
console.log(data.length);
console.log(data.slice(0, 100));