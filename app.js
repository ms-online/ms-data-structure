class HashTable {
  constructor() {
    this.size = 100
    this.buckets = Array(100).fill(null)
  }

  hash(key) {
    let hash = 0
    for (const char of key) {
      hash += char.charCodeAt(0)
    }
    return hash % this.size
  }

  set(key, value) {
    let keyHash = this.hash(key)
    if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
      this.buckets[keyHash] = { key: key, val: value }
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++
      }
      this.buckets[keyHash] = { key: key, val: value }
    }
  }

  get(key) {
    const keyHash = this.hash(key)
    for (let i = keyHash; i < this.buckets.length; i++) {
      if (!this.buckets[i]) {
        continue
      }
      if (this.buckets[i].key === key) {
        return this.buckets[i].value
      }
    }
    return undefined
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key])
      }
    }
  }
}

const table = new HashTable()

for (const char of 'abcdee') {
  table.set(char, char)
}

for (const char of 'fghijk') {
  table.set(char, char)
}

for (const char of 'lmnopq') {
  table.set(char, char)
}

console.log(table.showInfo())
