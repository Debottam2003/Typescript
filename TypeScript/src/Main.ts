import { Parent } from "./Parent";
import { Child } from "./Child";

(function Main(){
let P1 = new Parent("Debottam", 8.143, 22);
console.log(P1);
let C1 = new Child("Deb", 8.35, 22, "Rony");
console.log(C1);
C1.show();
C1.work();
//console.log(P1.marks);// Protected can be access if it is a derived class
//console.log(P1.age);// Private can only be accessed with in the class
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.table(matrix);
const anotherMatrix = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
console.table(anotherMatrix);
console.log(anotherMatrix);
})();