class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }

  add(value) {
    if (this.value === null) {
      this.value = value
      return
    }

    if (this.value < value) {
      const newNode = new Node(value)
      this.right = newNode
      return
    }

    if (this.value > value) {
      const newNode = new Node(value)
      this.left = newNode
      return
    }
  }
}

class Tree {
  constructor() {
    this.root = new Node(null)
  }

  add(value) {
    this.root.add(value)
  }

  remove(value) {
    this.root.remove(value)
  }

  find(value) {
    return this.root.find(value)
  }
}
