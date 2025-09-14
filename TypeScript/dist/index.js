// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var a = 15;
// var b = "debottam";
// var arr = [7, 8, 9, 3, 2, 5];
// var tup = [7, 8];
// console.log(arr);
// function type_func(a) {
//     console.log(a);
//     return a + 1;
// }
// var num = type_func(10);
// var value = true;
// var func = function (obj) {
//     console.log(obj);
//     return obj;
// };
// func({ name: "deb", password: "1234" });
// function add(a, b) {
//     console.log(a + b);
//     return a + b;
// }
// var res = add(1, 2);
// console.log(res);
// var array_number = [7, 8, 9, 3, 10, 15];
let movies_name = "debottam kar";
function title(movies_name) {
    let m_name = movies_name
        .split(" ")
        .map((element) => (
            element[0].toUpperCase() + element.slice(1).toLowerCase()
        ))
        .join(" ");
    return m_name;
}
console.log(title(movies_name));