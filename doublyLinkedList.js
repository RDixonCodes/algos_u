class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /* PUSH: Create a new node with the value passed to the function. 
    If the head property is null set the head and tail to be the newly created node.
    If not, set the next property on the tail to be that node. Set the previous property 
    on the newly created node. If not, set the next property on the tail to be that node.
    Set the previous property on the newly created node to be the tail.
    Set the tail to be the newly created node.
    Increment the length.
    Return the doubly linked list.*/

    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // creates the new tail
            newNode.prev = this.tail; // sets up the previous pointer to the old tail
            this.tail = newNode; // creates the new tail
        }
        this.length++;
        return this;
    }

    /* POP: If there's no head, return undefined.
    Stor the current tail in a variable to return later.
    If the lendth is 1, set the head and tail to be null.
    Update the tail to be the previous node.
    Set the newTail's next to null
    Decrement the length.
    Return the value removed.*/

    pop() {
        if(!this.head) return undefined;
        var currentTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }


}

list = new doublyLinkedList();

list.push(90);
list.push(95);
list.push(100);
list.pop();
// list.pop();

console.log(list)