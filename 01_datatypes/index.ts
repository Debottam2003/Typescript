let { log: print } = console;

//? Primitive data types in TypeScript
let name: string = "Debottam Kar";
let age: number = 25;
let isStudent: boolean = true;
let address: null = null;
let phoneNumber: undefined = undefined;
let bigIntNumber: bigint = 97199254741991n;
let symbolId: symbol = Symbol("id");
let anyType: any = "I can be anything";
anyType = 42;
anyType = true;
anyType = { key: "value" };
anyType = [1, 2, 3];
anyType = null;
anyType = undefined;
print(typeof name, name);
print(typeof age, age);
print(typeof isStudent, isStudent);
print(typeof address, address);
print(typeof phoneNumber, phoneNumber);
print(typeof bigIntNumber, bigIntNumber);
print(typeof symbolId, symbolId);
print(typeof anyType, anyType);
// not null assertion
let notNull: string = name!;// assert name is not null
// Compiler is happy because you promised notNull is not null
print(typeof notNull, notNull);// string Debottam Kar

//? Non-primitive or reference data types in TypeScript

//? Array
let hobbies: string[] = ["Reading", "Traveling", "Gaming"];
let scores: Array<number> = [95, 88, 76];
let mixedArray: (string | number)[] = ["Alice", 30, "Bob", 25];
let arr_of_arr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];
let anyArr: any[] = [1, "Two", true, null, undefined, { key: "value" }];

//? Object
let person: { name: string; age: number } = { name: "Alice", age: 30 };

//? Tuple
let tuple: [string, number] = ["Alice", 30];
const point: readonly [number, number] = [10, 20];

let unionType: string | number = "Hello";
unionType = 42; // Valid

//? Type
type Person = {
    name: string;
    age: number;
    isEmployed?: boolean; // Optional property
};
let employee: Person = { name: "Bob", age: 25, isEmployed: true };
let guest: Person = { name: "Charlie", age: 28 }; // isEmployed is optional

type Arr = (string | number)[];
let arr: Arr[] = [
    ["Alice", 30],
    [42, "Bob"],
];

type Integer = number;
let matrix: Integer[][] = [
    [1, 2, 3],
    [4, 5, 6],
];

//? Interface
interface Car {
    make: string;
    model: string;
    year: number;
    isElectric?: boolean; // Optional property
}

let myCar: Car = { make: "Tesla", model: "Model 3", year: 2020, isElectric: true };
let oldCar: Car = { make: "Toyota", model: "Corolla", year: 2010 }; // isElectric is optional

interface User {
    id: number;
    name: string;
    email: string;
    address?: { street: string; city: string; zipCode: string }; // Optional nested object
}
let user1: User = { id: 1, name: "Alice", email: "debottam@gmail.com" };
print(user1);

interface UserProfile {
    userDetails: User;
    hobbies: string[];
    isActive: boolean;
}
let userProfile: UserProfile = {
    userDetails: user1,
    hobbies: ["Reading", "Traveling"],
    isActive: true,
};
print(userProfile);

interface Profile extends User {
    hobbies: string[];
    isActive: boolean;
}
let profile: Profile = {
    id: 2,
    name: "debottam",
    email: "debottam@gmail.com",
    hobbies: ["Gaming", "Cooking"],
    isActive: false,
};
print(profile);

let x = 1, y = 2;
// Nullish coalescing assignment (??=) operator
// Assigns the right-hand side value to the left-hand side variable only if the left-hand side variable is null or undefined.
let z = x ??= y

// is equivalent to:

// if (x === null || x === undefined) {
//     x = y;
// }