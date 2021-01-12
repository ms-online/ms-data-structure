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
}

const linkedList1 = new LinkedList()
