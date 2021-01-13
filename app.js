class HashTable {
  constructor() {
    this.size = 1000
    this.buckets = Array(1000).fill(null)
  }

  hash(key) {
    let hash = 0
    for (const char of key) {
      hash += char.charCodeAt(0)
    }
    return hash % this.size
  }

  set(key, value) {
    const keyHash = this.hash(key)
    this.buckets[keyHash] = value
  }

  get(key) {
    const keyHash = this.hash(key)
    return this.buckets[keyHash]
  }
}

const words = 'helloworld'
function findFirstRep(str) {
  const table = new HashTable()
  for (const word of str) {
    if (table.get(word)) {
      return word
    }
    table.set(word, 1)
  }
}

//大O符号：O(n)
console.log(findFirstRep(words))
