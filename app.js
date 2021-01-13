class Queue {
  constructor() {
    this.items = []
  }

  enqueue(value) {
    this.items.unshift(value)
  }

  dequeue() {
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }

  toArray() {
    return this.items.slice()
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
