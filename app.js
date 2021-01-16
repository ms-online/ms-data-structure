class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
    this.parent = null
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
      newNode.parent = this
      this.right = newNode
      return
    }

    if (this.value > value) {
      if (this.left) {
        this.left.add(value)
        return
      }
      const newNode = new Node(value)
      newNode.parent = this
      this.left = newNode
      return
    }
  }

  remove(value) {
    const identifiedNode = this.find(value)

    if (!identifiedNode) {
      throw new Error('无法找到匹配的结点值')
    }
    //删除的结点是树叶的情况
    if (!identifiedNode.left && !identifiedNode.right) {
      const identifiedParent = identifiedNode.parent
      identifiedParent.removeChild(identifiedNode)
      return
    }

    //删除的结点有子结点
    if (identifiedNode.left && !identifiedNode.right) {
    } else {
      const childNode = identifiedNode.left || identifiedNode.right

      identifiedNode.left = childNode.left
      identifiedNode.right = childNode.right
      identifiedNode.value = childNode.value
    }
  }
  removeChild(node) {
    if (this.left && this.left === node) {
      this.left = null
      return
    }
    if (this.right && this.right === node) {
      this.right = null
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
tree.add(26)
tree.add(28)
tree.add(30)
tree.remove(30)
tree.remove(25)

console.log(tree)
console.log(tree.find(7))
console.log(tree.find(30))
console.log(tree.find(11))
