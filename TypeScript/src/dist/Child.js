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
exports.Child = void 0;
var Parent_1 = require("./Parent");
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, marks, age, nickname) {
        var _this = _super.call(this, name, marks, age) || this;
        _this.nickname = "";
        _this.nickname = nickname;
        return _this;
    }
    Child.prototype.show = function () {
        console.log("I am a child my nick name is ".concat(this.nickname));
        _super.prototype.show.call(this);
    };
    Child.prototype.work = function () {
        console.log("this is the use of interface...and child is working.");
    };
    return Child;
}(Parent_1.Parent));
exports.Child = Child;
