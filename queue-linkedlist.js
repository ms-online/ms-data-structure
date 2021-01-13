import { LinkedList } from './linked-list.js'

class Queue {
  constructor() {
    this.list = new LinkedList()
  }

  enqueue(value) {
    this.list.append(value)
  }

  dequeue() {
    return this.list.deleteHead()
  }

  isEmpty() {
    return !this.list.head
  }

  toArray() {
    return this.list.toArray()
  }
}

const queue = new Queue()

queue.enqueue('第1号')
queue.enqueue('第2号')
queue.enqueue('第3号')

console.log(queue.toArray())

console.log(queue.dequeue())
console.log(queue.toArray())
console.log(queue.dequeue())
console.log(queue.toArray())
console.log(queue.dequeue())
console.log(queue.toArray())
