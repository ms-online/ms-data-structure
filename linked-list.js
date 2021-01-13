export class LinkedList {
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

  //find 节点查询
  find(value) {
    if (!this.head) {
      return null
    }

    let curNode = this.head
    while (curNode) {
      if (curNode.value === value) {
        return curNode
      }
      curNode = curNode.next
    }
    return null
  }
  //insertAfter 某个节点后面插入
  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue)
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next }
      existingNode.next = newNode
    }
  }
  //delete 删除节点
  delete(value) {
    if (!this.head) {
      return
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }
    let curNode = this.head
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next
      } else {
        curNode = curNode.next
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode
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
linkedList1.append('Summer')
linkedList1.append('Hello')
linkedList1.append(5)
linkedList1.append(true)
linkedList1.prepend('第一个元素')
linkedList1.prepend('第一个元素')

// console.log(linkedList1.toArray())

linkedList1.delete('Summer')
linkedList1.delete('第一个元素')
linkedList1.delete(5)

// console.log(linkedList1.toArray())
// console.log(linkedList1.find('Summer'))
// console.log(linkedList1.find(true))
