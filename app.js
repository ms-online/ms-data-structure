const resultData = new Map()

//添加键值对 set
resultData.set('average', 1.6)
resultData.set('lastResult', null)

const person = { name: 'John', age: 34 }

resultData.set(person, 1.24)

//for循环
for (const el of resultData) {
  console.log(el)
}

//key相同情况
resultData.set('average', 23)

//获取或者访问值
console.log(resultData.get('lastResult'))
console.log(resultData.lastResult) //undefined

//删除
console.log(resultData.delete('average'))

//删除key为对象的时候
resultData.delete({ name: 'John', age: 34 })

console.log(resultData)
