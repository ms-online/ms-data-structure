//列表结构——数组
const shoppingList = ['Apple', 'Banana', 'Orange']

const thirdItem = shoppingList[2]

for (const item of shoppingList) {
  //得到每一项采购的水果名称
}

//表格结构——对象
const citizens = {
  123: {
    name: 'summer',
    age: 26,
    sex: 'female',
    address: 'xxxx',
    birthdate: 'xxx',
  },
  456: {},
}

const summerData = citizens['123'] // ==> summer相关的信息
