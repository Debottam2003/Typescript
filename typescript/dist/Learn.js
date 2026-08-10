var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(length) {
        this.length = 0;
        this.length = length;
    }
    Shape.prototype.show = function () {
        console.log("This is a Shape of any kind");
    };
    return Shape;
}());
var shape1 = new Shape(12);
shape1.show();
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, radius) || this;
        _this.radius = 0;
        return _this;
    }
    Circle.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("This is a Circle with radius " + this.length);
    };
    return Circle;
}(Shape));
var circle1 = new Circle(4);
circle1.show();
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, side) || this;
        _this.side = 0;
        return _this;
    }
    Square.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("This is a Square with side length " + this.length);
    };
    return Square;
}(Shape));
var square1 = new Circle(5);
square1.show();
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        var _this = _super.call(this, length) || this;
        _this.width = 0;
        _this.height = 0;
        _this.height = length;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("This is a Rectangle with length ".concat(this.height, " and width ").concat(this.width));
    };
    return Rectangle;
}(Shape));
var rectangle1 = new Rectangle(6, 3);
rectangle1.show();
