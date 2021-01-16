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
      if (this.right) {
        this.right.add(value)
        return
      }
      const newNode = new Node(value)
      this.right = newNode
      return
    }

    if (this.value > value) {
      if (this.left) {
        this.left.add(value)
        return
      }
      const newNode = new Node(value)
      this.left = newNode
      return
    }
  }

  find(value) {
    if (this.value === value) {
      return this
    }

    if (this.value < value && this.right) {
      return this.right.find(value)
    }

    if (this.value > value && this.left) {
      return this.left.find(value)
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

const tree = new Tree()

tree.add(10)
tree.add(5)
tree.add(2)
tree.add(7)
tree.add(15)
tree.add(25)
tree.add(30)

console.log(tree)
console.log(tree.find(7))
console.log(tree.find(30))
console.log(tree.find(11))
