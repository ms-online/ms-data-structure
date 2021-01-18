class Node {
  constructor(value, priority) {
    this.value = value
    this.next = null
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.first = null
  }
  //3(1),4(8),5(10)
  insert(value, priority) {
    const newNode = new Node(value, priority)

    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first
      this.first = newNode
    } else {
      let currentNode = this.first

      while (currentNode.next && priority < currentNode.next.priority) {
        currentNode = currentNode.next
      }
      //3(1),4(8), 6(9), 5(10)
      newNode.next = currentNode.next
      currentNode.next = newNode
    }
  }
  process() {
    const first = this.first
    this.first = this.first.next
    return first
  }
}

const priorityQueue = new PriorityQueue()

priorityQueue.insert('打扫卫生', 1)
priorityQueue.insert('做饭', 10)
priorityQueue.insert('学习', 100)

console.log(priorityQueue.process())
console.log(priorityQueue.process())
console.log(priorityQueue.process())
