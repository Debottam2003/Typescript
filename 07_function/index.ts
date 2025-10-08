// Function (One Of the most import )

// 1. With out argument and with out return
function main1(): void {
    console.log("With out argument and with out return");
}
main1();

// 2. With argument and with out return
function Add(a: number, b: number): void {
    console.log(a + b);
}
Add(10, 5);

// 3. With out argument and with return
function main2(): string {
    return "With out argument and with return";
}
console.log(main2());

// 4. With argument and with return
function Sub(a: number, b: number): number {
    return a - b;
}
// Sub(15, 5);
let res: number = Sub(10, 5);
console.log(res);

// CallBack or Higher Order Function
// in js
// function func(cbk) {
//   console.log(cbk(100, 5));
// }
// func(Sub);

// in ts
// arrow function in js and same similar looking type declaration for function in ts both are completely different
function func1(callback: (arg1: number, arg2: number) => number): void {
    console.log(callback(100, 5));
}
func1(Sub);

// in js
// function func() {
//   return function () {
//     console.log("Hello world");
//   };
// }
// let newSub = func();
// newSub();

// in ts
function func2(): (str: string) => void {
    return function (str: string): void {
        console.log(`Hello world ${str}`);
    };
}
let newFunc: (str: string) => void = func2();
newFunc("gagan");

// in ts 
// Decorator Function
function Decorator(callback: (arg1: number, arg2: number) => number): (a: number, b: number) => void {
    return function (a: number, b: number): void {
        if (a > b) {
            console.log(callback(a, b));
        } else {
            console.log("I donot want negative value");
        }
    };
}
let WithMakeUpSub: (a: number, b: number) => void = Decorator(Sub);
WithMakeUpSub(100, 50);
WithMakeUpSub(5, 100);
