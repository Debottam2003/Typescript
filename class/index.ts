console.log("Hello via Bun!");
function returnClass(className: string) {
    return class className {
        greet() {
            return "Hello from MyClass!";
        }
    }
}
let Users = returnClass("users");
console.log(Users);
console.log(typeof Users);
console.log(new Users());
console.log(new Users().greet());
console.log(returnClass);

export default returnClass;