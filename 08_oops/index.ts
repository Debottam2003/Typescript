// Encapsulation
export class Human {
    private name!: string;
    private age: number = 0;
    //   constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    //   }
    public setHuman(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public getHuman() {
        return this.name + " " + this.age;
    }
    eat(): void {
        console.log("I love healthyfy and chatujs...");
    }
}

let person1 = new Human();
person1.setHuman("shub chatu", 22);
console.log(person1.getHuman());
person1.eat();

// Inheritance
// class Male extends Human {
//   havePenis: boolean;
//   constructor(name: string, age: number, havePenis: boolean) {
//     super(name, age);
//     this.havePenis = havePenis;
//   }
//   eat(): void {
//     console.log("I love js/java ...");
//     super.eat();
//   }
// }

// let male1 = new Male("shub chatu", 22, true);
// console.log(male1);
// male1.eat();

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    start(): void {
        console.log("car has started...");
    }
    stop(): void {
        console.log("car has stopped...");
    }
}

console.log(new Car("bmw"));
new Car("Tesla").start();
