console.log("Hello via Bun!");

function returnClass(className: string) {
  return class {
    greet() {
      return "Hello from bun!";
    }
  };
}

let Users = returnClass("Users");
console.log(Users); // [class]
console.log(typeof Users); // function
console.log(new Users()); // Users {}
console.log(new Users().greet()); // Hello from Users!
console.log(returnClass);

export default returnClass;
