var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = 0;
        this.next = null;
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var customLinkedlist = /** @class */ (function () {
    function customLinkedlist() {
        this.head = null;
    }
    customLinkedlist.prototype.insert = function (data) {
        var newNode = new ListNode(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        var prev = this.head;
        while (prev.next != null) {
            prev = prev.next;
        }
        prev.next = newNode;
    };
    customLinkedlist.prototype.display = function () {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }
        var current = this.head;
        var result = "";
        while (current !== null) {
            result += "".concat(current.data, " -> ");
            current = current.next;
        }
        console.log(result + "null");
    };
    customLinkedlist.prototype.insertBegin = function (data) {
        var newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    };
    return customLinkedlist;
}());
(function main() {
    var list1 = new customLinkedlist();
    list1.insert(10);
    list1.insert(30);
    list1.insert(20);
    list1.display();
    var list2 = new customLinkedlist();
    list2.insert(7);
    list2.insert(8);
    list2.insert(9);
    list2.display();
    console.log(list1.head, list2.head);
    list1.insertBegin(50);
    list1.display();
})();
