import { LinkedList } from './linked-list.js'

class Stack {
  constructor() {
    this.list = new LinkedList()
  }

  push(value) {
    this.list.prepend(value)
  }

  pop() {
    return this.list.deleteHead()
  }

  isEmpty() {
    return !this.list.head
  }

  toArray() {
    return this.list.toArray()
  }
}

const stack = new Stack()

stack.push('关冰箱门！')
stack.push('推入大象')
stack.push('开冰箱门！')

console.log(stack.toArray())

console.log(stack.pop())
console.log(stack.toArray())
console.log(stack.pop())
console.log(stack.toArray())
console.log(stack.pop())
console.log(stack.toArray())
