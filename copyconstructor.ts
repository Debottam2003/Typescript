console.log("This is copy constructor");
let print = console.log;
class Node {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  copy_constructor(node: Node) {
   this.x = node.x;
   this.y = node.y;
  }
}

let n1: Node = new Node(5,5);
let n2: Node = new Node(10,10);
print(n1);
print(n2);

n2.copy_constructor(n1);

print(n1);
print(n2);
