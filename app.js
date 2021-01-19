class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.heapElements = []
  }

  insert(value, priority) {
    const newNode = new Node(value, priority)
    this.heapElements.push(newNode)
    let currentElementIndex = this.heapElements.length - 1
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1

    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex].priority >
        this.heapElements[parentElementIndex].priority
    ) {
      const parentElement = this.heapElements[parentElementIndex]
      this.heapElements[parentElementIndex] = newNode
      this.heapElements[currentElementIndex] = parentElement
      currentElementIndex = parentElementIndex
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1
    }
  }
  process() {
    if (this.heapElements.length === 0) {
      return null
    }

    if (this.heapElements.length === 1) {
      return this.heapElements.pop()
    }

    const topElement = this.heapElements[0]

    this.heapElements[0] = this.heapElements.pop()

    let currentElementIndex = 0
    let leftChildIndex = 2 * currentElementIndex + 1
    let rightChildIndex = 2 * currentElementIndex + 2

    let childElementIndex =
      this.heapElements[rightChildIndex] &&
      this.heapElements[rightChildIndex].priority >=
        this.heapElements[leftChildIndex].priority
        ? rightChildIndex
        : leftChildIndex

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex].priority <=
        this.heapElements[childElementIndex].priority
    ) {
      const currentNode = this.heapElements[currentElementIndex]
      const currentChildNode = this.heapElements[childElementIndex]

      this.heapElements[currentElementIndex] = currentChildNode
      this.heapElements[childElementIndex] = currentNode

      currentElementIndex = childElementIndex

      leftChildIndex = 2 * currentElementIndex + 1
      rightChildIndex = 2 * currentElementIndex + 2

      childElementIndex =
        this.heapElements[rightChildIndex] &&
        this.heapElements[rightChildIndex].priority >=
          this.heapElements[leftChildIndex].priority
          ? rightChildIndex
          : leftChildIndex
    }

    return topElement
  }
}
const heap = new PriorityQueue()

// heap.insert(101)
// heap.insert(197)
// heap.insert(40)
// heap.insert(12)
// heap.insert(15)
// heap.insert(85)
// heap.insert(250)
// heap.insert(6)
// heap.insert(54)
// heap.insert(32)
// heap.insert(20)
// heap.insert(3)
// heap.insert(1)
// heap.insert(5)

// console.log(heap.process())
// console.log(heap.process())
// console.log(heap.process())
// console.log(heap.process())
// console.log(heap.process())
// console.log(heap.process())
// console.log(heap.process())
// console.log(heap.process())
// console.log(heap.process())

heap.insert('打扫卫生', 5)
heap.insert('看书', 15)
heap.insert('做饭', 20)
heap.insert('学习', 10)
heap.insert('运动', 1)

console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap)
