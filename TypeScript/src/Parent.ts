export class Parent{
    public fullname: string;
    protected marks: number;
    private age: number;
    constructor(name: string, marks: number, age: number){
        this.fullname = name;
        this.marks = marks;
        this.age = age;
    }   
    show(): void{
        console.log(this.fullname);
        console.log(this.age);
        console.log(this.marks);
    }
}
