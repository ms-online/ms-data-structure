class Graph {
  constructor() {
    this.nodes = {}
    this.edges = {}
  }

  addNode(identifier, value) {
    if (this.nodes[identifier]) {
      throw new Error('结点已经存在')
    }
    // delete this.edeges[identifier]
    this.nodes[identifier] = value
  }
  // {
  // 1:[2]
  // }
  addEdge(startNode, endNode) {
    if (!this.nodes[startNode] || !this.nodes[endNode]) {
      throw new Error('起点或者终点不存在结点')
    }
    if (this.edges[startNode] && !this.edges[startNode].has(endNode)) {
      this.edges[startNode].add(endNode)
    } else {
      this.edges[startNode] = new Set([endNode])
    }
  }

  removeNode(nodeIdentifier) {
    this.nodes[nodeIdentifier] = undefined
    Reflect.deleteProperty(this.edges, nodeIdentifier)

    for (const edgeIdentifier in this.edges) {
      this.edges[edgeIdentifier].delete(nodeIdentifier)
    }
  }

  removeEdge(startNode, endNode) {
    if (!this.edges[startNode] || !this.edges[startNode].has(endNode)) {
      throw new Error('链接不存在')
    }
    this.edges[startNode].delete(endNode)
  }

  hasEdge(startNode, endNode) {
    if (!this.edges[startNode]) {
      return false
    }
    return this.edges[startNode].has(endNode)
  }

  getAllEdges(node) {
    return this.edges[node]
  }
}

const netWork = new Graph()

netWork.addNode('张三', { name: '张三', age: 25 })
netWork.addNode('李四', { name: '李四', age: 32 })
netWork.addNode('王五', { name: '王五', age: 15 })
netWork.addNode('赵六', { name: '赵六', age: 26 })
netWork.addNode('孙七', { name: '孙七', age: 54 })
netWork.addNode('周八', { name: '周八', age: 47 })

netWork.addEdge('张三', '李四')
netWork.addEdge('李四', '张三')
netWork.addEdge('李四', '王五')
netWork.addEdge('王五', '李四')
netWork.addEdge('李四', '赵六')
netWork.addEdge('赵六', '王五')
netWork.addEdge('王五', '赵六')
netWork.addEdge('赵六', '孙七')
netWork.addEdge('孙七', '赵六')
netWork.addEdge('孙七', '周八')
netWork.addEdge('周八', '孙七')

console.log(netWork.hasEdge('张三', '周八'))
console.log(netWork.hasEdge('赵六', '王五'))

console.log(netWork.getAllEdges('赵六'))

netWork.removeNode('赵六')

// netWork.removeEdge('孙七', '李四')
netWork.removeEdge('张三', '李四')

console.log(netWork)
