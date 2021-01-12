class LinkedList {
  constructor() {
    this.head = null //链表中第一个节点
    this.tail = null //链表中最后一个节点
  }

  //append 追加节点(末尾添加)
  append(value) {
    const newNode = { value: value, next: null }
    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    if (!this.head) {
      this.head = newNode
    }
  }

  //prepend 前置节点（头部添加）
  prepend(value) {
    const newNode = { value: value, next: this.head }
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
  }

  //以数组方式输出节点
  toArray() {
    const elements = []
    let curNode = this.head
    while (curNode) {
      elements.push(curNode)
      curNode = curNode.next
    }
    return elements
  }
}

const linkedList1 = new LinkedList()

linkedList1.append(1)
linkedList1.append('Summer')
linkedList1.append('Hello')
linkedList1.append(5)
linkedList1.append(true)
linkedList1.prepend('第一个元素')

console.log(linkedList1.toArray())
