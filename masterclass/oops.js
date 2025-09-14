"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.eat = function () {
        console.log("I love healthyfy and chatujs...");
    };
    return Human;
}());
exports.Human = Human;
var person1 = new Human("gagan chatu", 23);
console.log(person1);
person1.eat();
// Inheritance
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(name, age, havePenis) {
        var _this = _super.call(this, name, age) || this;
        _this.havePenis = havePenis;
        return _this;
    }
    Male.prototype.eat = function () {
        console.log("I love js/java ...");
        _super.prototype.eat.call(this);
    };
    return Male;
}(Human));
var male1 = new Male("shub chatu", 22, true);
console.log(male1);
male1.eat();
