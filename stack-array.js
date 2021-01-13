class Stack {
  constructor() {
    this.items = []
  }
  push(value) {
    this.items.push(value)
  }

  pop() {
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }

  toArray() {
    return this.items.slice()
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
