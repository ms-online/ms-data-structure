const ids = new Set()

//添加元素
ids.add('a')
ids.add(1)
ids.add('b')
ids.add(1)

//集合遍历元素
for (const id of ids) {
  console.log(id)
}

//集合访问元素
console.log(ids.has('a'))

//集合删除元素
ids.delete('b')
console.log(ids)
console.log(ids[0])
