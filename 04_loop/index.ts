//? While loop

let i: number = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//? Do-while loop

let j: number = 0;
do {
    console.log(j);// 0 1 2 3 4
    j++;
} while (j < 5);

//? For loop
for (let k: number = 0; k < 5; k++) {
    console.log(k);// 0 1 2 3 4
}

let arr: number[] = [10, 20, 30, 40, 50];

//? For-in loop
for (let index in arr) {
    console.log(index);// 0 1 2 3 4
}
for (let index in arr) {
    console.log(arr[index]);// 10 20 30 40 50
}

//? For-of loop
for (let value of arr) {
    console.log(value);// 10 20 30 40 50
}

//? Break and Continue
for (let m: number = 0; m < 10; m++) {
    if (m === 5) {
        break; // exit the loop when m is 5
    }
    console.log(m); // 0 1 2 3 4
}

for (let n: number = 0; n < 10; n++) {
    if (n % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(n); // 1 3 5 7 9
}

//? forEach loop/method
arr.forEach((val) => {
    console.log(val); // 10 20 30 40 50
});

//? Map, Filter, Reduce, find, some, every
let squaredArr = arr.map((val) => val * val);
console.log(squaredArr); // [100, 400, 900, 1600, 2500]

let filteredArr = arr.filter((val) => val > 25);
console.log(filteredArr); // [30, 40, 50]

let sum = arr.reduce((acc, val) => { return acc + val }, 0);
console.log(sum); // 150

let findVal = arr.find((val) => val > 25);
console.log(findVal);// 30 // Returns the first element that matches the condition.

let hasEven = arr.some(val => val % 2 === 0);
console.log(hasEven); // true (because 2 and 4 are even)

let allPositive = arr.every(val => val > 0);
console.log(allPositive); // true