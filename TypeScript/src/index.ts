let a: number = 15;
let b: string = "debottam";
let arr: number[] = [7, 8, 9, 3, 2, 5];
let tup: [number, number] = [7, 8];
console.log(arr);

function type_func(a: number): number {
  console.log(a);
  return a + 1;
}
let num = type_func(10);

type val = string | number | boolean;

let value: val = true;

interface sign {
  name: string;
  password: string;
}

let func = (obj: sign): sign => {
  console.log(obj);
  return obj;
};

func({ name: "deb", password: "1234" });

export {};

function add(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}

let res = add(1, 2);
console.log(res);

let array_number: number[] = [7, 8, 9, 3, 10, 15];
