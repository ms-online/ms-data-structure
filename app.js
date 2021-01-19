class MaxHeap {
  constructor() {
    this.heapElements = []
  }

  insert(value) {
    this.heapElements.push(value)
    let currentElementIndex = this.heapElements.length - 1
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1

    while (
      this.heapElements[currentElementIndex] >
        this.heapElements[parentElementIndex] &&
      parentElementIndex >= 0
    ) {
      const parentElement = this.heapElements[parentElementIndex]
      this.heapElements[parentElementIndex] = value
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
      this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex] <=
        this.heapElements[childElementIndex]
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
        this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex
    }

    return topElement
  }
}
const heap = new MaxHeap()

heap.insert(101)
heap.insert(197)
heap.insert(40)
heap.insert(12)
heap.insert(15)
heap.insert(85)
heap.insert(250)
heap.insert(6)
heap.insert(54)
heap.insert(32)
heap.insert(20)
heap.insert(3)
heap.insert(1)
heap.insert(5)

console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap.process())
console.log(heap)
