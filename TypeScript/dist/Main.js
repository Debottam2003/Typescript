"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parent_1 = require("./Parent");
var Child_1 = require("./Child");
const { resolve } = require("path");
(function Main() {
    var P1 = new Parent_1.Parent("Debottam", 8.143, 22);
    console.log(P1);
    var C1 = new Child_1.Child("Deb", 8.35, 22, "Rony");
    console.log(C1);
    C1.show();
    C1.work();
    //console.log(P1.marks);// Protected can be access if it is a derived class
    //console.log(P1.age);// Private can only be accessed with in the class
    var matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.table(matrix);
    var anotherMatrix = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ];
    console.table(anotherMatrix);
    let array = [7, 8 , 9 , 2 , 3 , 10];
    console.table(array);
    for(let i =1 ;i <= 10; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write("*");
        }
        console.log();
    }
    function promiseLearning(){
        return new Promise((resolve, reject)=>{
            console.log(1);
            setTimeout(()=>{
                resolve(2);
            }, 500);
        })
    }
    //console.log(promiseLearning());
    promiseLearning().then((response)=>{
        console.log("for '.then' :", response);
    })
    async function print() {
        let data = await promiseLearning();
        console.log("for 'aync await' :", data);  
    }
    print();
    console.log(3);
})();
