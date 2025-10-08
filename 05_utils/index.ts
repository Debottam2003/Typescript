//? Utils on array
let filledArr: number[] = new Array(5).fill(0);
console.log(filledArr); // [0, 0, 0, 0, 0]

let sortedArr: number[] = [3, 1, 4, 1, 5].sort((a, b) => a - b);
console.log(sortedArr); // [1, 1, 3, 4, 5]

let reversedArr: number[] = [1, 2, 3, 4, 5].reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]

let joinedArr: string = ['Hello', 'World'].join(' ');
console.log(joinedArr); // "Hello World"

let splitArr: string[] = 'Hello World'.split(' ');
console.log(splitArr); // ["Hello", "World"]

let slicedArr: number[] = [1, 2, 3, 4, 5].slice(1, 4);
console.log(slicedArr); // [2, 3, 4]

let splicedArr: number[] = [1, 2, 3, 4, 5];
splicedArr.splice(2, 1, 99);
console.log(splicedArr); // [1, 2, 99, 4, 5]

let arrA: number[] = [1, 2];
let arrB: number[] = [3, 4];
let combined = arrA.concat(arrB);
console.log(combined); // [1, 2, 3, 4]

let nested: number[][] = [[1, 2], [3, 4]];

console.log(nested.flat(1));// 1 is passed as depth
// Output: [1, 2, 3, 4]

let colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.indexOf("blue")); // 2
console.log(colors.lastIndexOf("red")); // 0

let arr: number[] = [10, 20, 30, 40, 50];

let squaredArr = arr.map((val) => val * val);
console.log(squaredArr); // [100, 400, 900, 1600, 2500]

let filteredArr = arr.filter((val) => val > 25);
console.log(filteredArr); // [30, 40, 50]

let sum = arr.reduce((acc, val) => { return acc + val }, 0);
console.log(sum); // 150

console.log(colors.find(color => color.startsWith("b"))); // "blue"

let hasEven = arr.some(val => val % 2 === 0);
console.log(hasEven); // true (because 2 and 4 are even)

let allPositive = arr.every(val => val > 0);
console.log(allPositive); // true

//? Utils on Object
let user: { id: number, name: string } = {
    id: 1,
    name: "debottam"
};
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//? Utils on String
//? Utils on String
let greeting: string = '  Hello, World!  ';
console.log(greeting.length); // 16 (includes leading/trailing spaces)
console.log(greeting.trim()); // "Hello, World!"
console.log(greeting.trimStart()); // "Hello, World!  "
console.log(greeting.trimEnd()); // "  Hello, World!"

console.log(greeting.toUpperCase()); // "  HELLO, WORLD!  "
console.log(greeting.toLowerCase()); // "  hello, world!  "

console.log(greeting.includes('Hello')); // true
console.log(greeting.startsWith('  He')); // true
console.log(greeting.endsWith('!  ')); // true

console.log(greeting.slice(2, 7)); // "Hello"
console.log(greeting.substring(2, 7)); // "Hello"

console.log(greeting.replace('World', 'TypeScript')); // "  Hello, TypeScript!  "
console.log('foo foo'.replaceAll('foo', 'bar')); // "bar bar"
console.log('bananas'.replace(/a/g, 'A')); // "bAnAnAs"

console.log('a,b,c'.split(',')); // ["a","b","c"]
console.log('x'.repeat(3)); // "xxx"

console.log('5'.padStart(3, '0')); // "005"
console.log('5'.padEnd(3, '-')); // "5--"

console.log('abc'.charAt(1)); // "b"
console.log('abc'.charCodeAt(1)); // 98

console.log('one,two,three'.indexOf('two')); // 4
console.log('bananas'.lastIndexOf('a')); // 5

console.log(String.fromCharCode(65));// A

let date: Date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(Date.now());