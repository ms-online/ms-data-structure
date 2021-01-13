const words = 'ehehlloworld'

//双重for循环
// function findFirst(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return str[i]
//       }
//     }
//   }
// }
//大O符号：O(n^2)
// console.log(findFirst(words))

//通过对象（哈希表）
function findFirstRep(str) {
  const table = {}
  for (const word of str) {
    if (table[word]) {
      return word
    }
    table[word] = 1
  }
}

//大O符号：O(n)
console.log(findFirstRep(words))
