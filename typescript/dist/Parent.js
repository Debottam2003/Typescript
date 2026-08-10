"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parent = void 0;
var Parent = /** @class */ (function () {
    function Parent(name, marks, age) {
        this.fullname = name;
        this.marks = marks;
        this.age = age;
    }
    Parent.prototype.show = function () {
        console.log(this.fullname);
        console.log(this.age);
        console.log(this.marks);
    };
    return Parent;
}());
exports.Parent = Parent;
