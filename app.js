class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class PriorityQueue {
  constructor() {
    this.first = null
  }
  //3,4,5
  insert(value) {
    const newNode = new Node(value)

    if (!this.first) {
      this.first = newNode
    } else {
      let currentNode = this.first

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = newNode
    }
  }
}

const priorityQueue = new PriorityQueue()

priorityQueue.insert(3)
priorityQueue.insert(4)
priorityQueue.insert(5)

console.log(priorityQueue)
