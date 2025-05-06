class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class DoubleNode {
    constructor(value) {
        this.prev = null
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    find(value) {
        let curr = this.head

        while (curr) {
            if (curr.value === value) {
                return curr
            }
            curr = curr.next
        }
    }

    contains(value) {
        return this.find(value) ? true : false
    }

    toArray() {
        if (!this.head) return []
        let outArr = []

        let curr = this.head        
        while(curr) {
            outArr.push(curr.value)
            curr = curr.next
        }

        return outArr
    }

    reverse() {
        const array = this.toArray().reverse()
        this.head = null

        array.forEach(item => this.insertAtHead(item))
    }

    insertAtHead(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    insertAtTail(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    delete(value) {
        if (!this.head) {
            return
        }

        if (this.head.value = value) {
            this.head = this.head.next
            return
        }

        let curr = this.head
        while (curr.next && curr.next.value != value) {
            curr = curr.next
        }

        if (current.next) {
            current.next = current.next.next
        }
    }

    print() {
        let curr = this.head
        let outString = '[ '
        while (curr) {
            curr.next ? outString += ` ${curr.value} ->`: outString += ` ${curr.value} -> ${null} ]`
            curr = curr.next
        }
        console.log(outString)
    }
}

class DoubleLinkedList {
    constructor () {
        this.head = null
    }

    insertAtHead(value) {
        const newNode = new DoubleNode(value)
        newNode.next = this.head
        if (this.head) this.head.prev = newNode
        this.head = newNode
    }

    insertAtTail(value) {
        const newNode = new DoubleNode(value)
        if (!this.head) {
            this.head = newNode
            return
        }
        
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        newNode.prev = curr
        curr.next = newNode
    }

    delete(value) {
        /* This is the original Implementation */
        if (this.head.value === value) {
            this.head = this.head.next
            this.head.prev = null
            return
        }

        let curr = this.head
        while (curr.next) {
            if (curr.next.value === value) {

                if (!curr.next.next) {
                    curr.next.prev = null
                    curr.next = null
                    return
                }

                curr.next = curr.next.next
                curr.next.prev = curr
                return
            }
            curr = curr.next
        }



    }

    print() {
        let outString = '['

        let curr = this.head
        while(curr) {
            curr.next ? outString += `${curr.value} <=> `: outString += `${curr.value}]`
            curr = curr.next
        }

        console.log(outString)
    }
}


const list = new DoubleLinkedList
list.insertAtHead(12)
list.insertAtHead(16)
list.insertAtTail(14)
list.insertAtTail('Tail')
list.print()
list.delete(16)
list.delete('Tail')
list.print()