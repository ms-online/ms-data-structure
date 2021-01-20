class Graph {
  constructor() {
    this.nodes = {}
    this.edges = {}
  }

  addNode(identifier, value) {
    this.nodes[identifier] = value
  }
  // {
  // 1:[2]
  // }
  addEdge(startNode, endNode) {
    if (
      this.edges[startNode] &&
      this.edges[startNode].indexOf(endNode) === -1
    ) {
      this.edges[startNode].push(endNode)
    } else {
      this.edges[startNode] = [endNode]
    }
  }
}

const graph = new Graph()

graph.addNode(1, '张三')
graph.addNode(2, '李四')
graph.addNode(3, '王五')

graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(3, 2)

console.log(graph)
