class Node {
  constructor(value, parentNode = null) {
    this.children = []
    this.value = value
    this.parent = parentNode
  }

  addNode(value) {
    const segments = value.split('/')
    if (segments.length === 0) {
      return
    }
    if (segments.length === 1) {
      const node = new Node(value, this)
      this.children.push(node)
      return { node: node, index: this.children.length - 1 }
    }

    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    )

    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join('/'))
    } else {
      const node = new Node(segments[0], this)
      node.addNode(segments.slice(1).join('/'))
      this.children.push(node)
      return { node: node, index: this.children.length - 1 }
    }
  }

  removeNode(value) {
    const segments = value.split('/')
    if (segments.length === 0) {
      return
    }
    if (segments.length === 1) {
      const existingChildNode = this.children.findIndex(
        (child) => child.value === segments[0]
      )
      if (existingChildNode < 0) {
        throw new Error('无法找到匹配的值！')
      }
      this.children.splice(existingChildNode, 1)
    }
    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      )
      if (!existingChildNode) {
        throw new Error('无法找到匹配的路径！路径为：' + segments[0])
      }
      existingChildNode.removeNode(segments.slice(1).join('/'))
    }
  }

  // find(value) {
  //   console.log(this)
  //   //深度优先搜索
  //   for (const child of this.children) {
  //     if (child.value === value) {
  //       return child
  //     }
  //     const nestedChildNode = child.find(value)
  //     if (nestedChildNode) {
  //       return nestedChildNode
  //     }
  //   }
  // }
  find(value) {
    console.log(this)
    //广度优先搜索
    for (const child of this.children) {
      if (child.value === value) {
        return child
      }
    }
    for (const child of this.children) {
      const nestedChildNode = child.find(value)
      if (nestedChildNode) {
        return nestedChildNode
      }
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue)
  }
  add(path) {
    this.root.addNode(path)
  }
  remove(path) {
    this.root.removeNode(path)
  }
  find(value) {
    if (this.root.value === value) {
      return this.root
    }

    return this.root.find(value)
  }
}

const filesystem = new Tree('/')
// const pagesDocumentNode = filesystem.root.addNode('/pages文稿')
// const deskTopNode = filesystem.root.addNode('/桌面')

// pagesDocumentNode.node.addNode('/学习')
// pagesDocumentNode.node.addNode('/工作')
// deskTopNode.node.addNode('数据结构.key')
filesystem.add('pages文稿/学习/前端学习路线.pdf')
filesystem.add('pages文稿/工作/code.js')
filesystem.add('下载/ps.dmg/ps.exe')
filesystem.add('下载/ps.dmg/ps.txt')
filesystem.remove('pages文稿/工作/code.js')
filesystem.remove('下载/ps.dmg/ps.txt')
// filesystem.remove('pages文稿/工作1/code.js')

console.log(filesystem.find('ps.exe'))

console.log(filesystem)
