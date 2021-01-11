const names = ['Summer', 'Henry', 'Lucy', 'Summer']

//索引值从0开始
console.log(names[1])
console.log(names.length)

//for循环遍历
for (const name of names) {
  console.log(name)
}

//添加元素
names.push('Lucy')
console.log(names.length)

//查询元素
const lucyIndex = names.findIndex((name) => name === 'Lucy')
console.log(lucyIndex)

//删除元素
names.splice(2, 1)
console.log(names)
