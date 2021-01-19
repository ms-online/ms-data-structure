class Heap {
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
}
const heap = new Heap()

heap.insert(54)
heap.insert(230)
heap.insert(180)
heap.insert(100)
heap.insert(98)
heap.insert(260)
heap.insert(280)

console.log(heap)
