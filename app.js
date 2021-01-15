class Node {
  constructor(value, parentNode = null) {
    this.children = []
    this.value = value
    this.parent = parentNode
  }

  addNode(value) {
    const node = new Node(value, this)
    this.children.push(node)
    return { node: node, index: this.children.length - 1 }
  }

  removeNode(index) {
    this.children.splice(index, 1)
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue)
  }
}

const filesystem = new Tree('/')
const pagesDocumentNode = filesystem.root.addNode('/pages文稿')
const deskTopNode = filesystem.root.addNode('/桌面')

pagesDocumentNode.node.addNode('/学习')
pagesDocumentNode.node.addNode('/工作')
deskTopNode.node.addNode('数据结构.key')

console.log(filesystem)
