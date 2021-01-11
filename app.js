const person = {
  name: 'John',
  age: 33,
  hobbies: ['Sports', 'Music'],
  greeting() {
    console.log('Hello, I am ' + this.name)
  },
}

// console.log(person[0])
console.log(person['name'])
console.log(person.name)
//添加属性
person.sex = 'male'
//删除属性
delete person.age

//有方法，添加功能
person.greeting()
console.log(person)
