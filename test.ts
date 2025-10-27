//? Test1
let func: () => void = () => {
  console.log("hi");
  func = () => {
    console.log("hello");
  };
};
func();
func();
console.log(Date.now(),new Date().toLocaleString());