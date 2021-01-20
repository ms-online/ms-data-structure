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
    if (
      this.edges[startNode] &&
      this.edges[startNode].indexOf(endNode) === -1
    ) {
      this.edges[startNode].push(endNode)
    } else {
      this.edges[startNode] = [endNode]
    }
  }

  hasEdge(startNode, endNode) {
    if (!this.edges[startNode]) {
      return false
    }
    return this.edges[startNode].indexOf(endNode) > -1
  }

  getAllEdges(node) {
    return this.edges[node]
  }
}

const graph = new Graph()

graph.addNode(1, '张三')
graph.addNode(2, '李四')
graph.addNode(3, '王五')
// graph.addNode(1, '赵六')

graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(3, 2)

console.log(graph.hasEdge(1, 2))
console.log(graph.hasEdge(2, 3))

console.log(graph.getAllEdges(1))
console.log(graph.getAllEdges(2))
console.log(graph.getAllEdges(3))

console.log(graph)
