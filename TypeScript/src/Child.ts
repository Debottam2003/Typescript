import { Parent } from "./Parent";
import { Human } from "./Human";

export class Child extends Parent implements Human{
    public nickname: string = "";
    constructor(name: string, marks: number, age: number, nickname: string){
        super(name, marks, age);
        this.nickname = nickname;
    }
    override show(): void{
        console.log(`I am a child my nick name is ${this.nickname}`);
        super.show();
    }
    work():void{
        console.log("this is the use of interface...and child is working.")
    }
}