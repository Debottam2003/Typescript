class Shape {
  protected length: number = 0;
  constructor(length: number) {
    this.length = length;
  }
  show():void{
    console.log("This is a Shape of any kind");
  }
}
let shape1 = new Shape(12);
shape1.show();

class Circle extends Shape{
    private radius: number = 0;
    constructor(radius: number){
        super(radius);
    }
    override show(): void {
        super.show();
        console.log("This is a Circle with radius " + this.length);
    }
}
let circle1 = new Circle(4);
circle1.show();

class Square extends Shape{
    private side: number = 0;
    constructor(side: number) {
        super(side);
    }
    override show(): void {
        super.show();
        console.log("This is a Square with side length " + this.length);
    }
}
let square1 = new Circle(5);
square1.show();

class Rectangle extends Shape {
    private width: number = 0;
    private height: number = 0;
    constructor(length: number, width: number) {
        super(length);
        this.height = length;
        this.width = width;
    }
    override show(): void {
        super.show();
        console.log(`This is a Rectangle with length ${this.height} and width ${this.width}`);
    }
}
let rectangle1 = new Rectangle(6, 3);
rectangle1.show();
