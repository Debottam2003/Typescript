class ListNode {
  public data: number = 0;
  public next: ListNode | null = null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class customLinkedlist {
  public head: ListNode | null = null;
  public insert(data: number): void {
    let newNode: ListNode = new ListNode(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let prev: ListNode = this.head;
    while (prev.next != null) {
      prev = prev.next;
    }
    prev.next = newNode;
  }
  display(): void {
    if (this.head === null) {
      console.log("List is empty.");
      return;
    }
    let current: ListNode | null = this.head;
    let result = "";
    while (current !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }
    console.log(result + "null");
  }
  insertBegin(data: number): void {
    let newNode: ListNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}

(function main(): void {
  let list1 = new customLinkedlist();
  list1.insert(10);
  list1.insert(30);
  list1.insert(20);
  list1.display();
  let list2 = new customLinkedlist();
  list2.insert(7);
  list2.insert(8);
  list2.insert(9);
  list2.display();
  console.log(list1.head, list2.head);
  list1.insertBegin(50);
  list1.display();
})();
