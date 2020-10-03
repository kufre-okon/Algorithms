class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    getFirst() {
        return this.head;
    }
    addFirst(value) {
        let newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(value) {
        let newNode = new ListNode(value);
        let lastNode = this.getLast();
        lastNode.next = newNode;
    }
    deleteAt(index) {
        let inc = 0;
        let prevNode = null;
        if (index === 0)
            this.head = null;
        let curr = this.head
        while (curr != null) {
            if (inc === index)
                prevNode.next = curr.next;
            prevNode = curr;
            inc++;
            curr = curr.next;
        }
    }

    insert(index, value) {
        let self = this;
        let curr = self.head;
        let inc = 0;
        let newNode = new ListNode(value);
        let prevNode = null;
        while (curr != null) {
            if (inc === index) {
                newNode.next = curr;
                if (prevNode == null)
                    self.head = newNode;
                else
                    prevNode.next = newNode;
                return;
            }
            prevNode = curr;
            inc++;
            curr = curr.next;
        }
        prevNode.next = newNode;
    }
    getElementAt(index) {
        let curr = this.head;
        let inc = 0;
        while (curr != null) {
            if (inc == index)
                return curr;
            curr = curr.next;
            inc++;
        }
        return null;
    }
    getLast() {
        let node = null;
        let curr = this.head;
        while (curr != null) {
            node = curr;
            curr = curr.next;
        }
        return node;
    }
}

var node1 = new ListNode('Kufre');
var node2 = new ListNode('Kufre Okon');
var node3 = new ListNode('Paul Usoro');

node1.next = node2;
node2.next = node3;

let linkedList = new LinkedList(node1);

linkedList.addFirst("Imabong Inyang");
console.log(linkedList)
linkedList.deleteAt(3);
console.log(linkedList)