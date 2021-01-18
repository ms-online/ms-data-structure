class TrieNode {
  constructor() {
    this.value = null
    this.children = Array(26)
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(key, value) {
    let node = this.root
    for (let i = 0; i < key.length; i++) {
      const letterIndext = key[i].charCodeAt(0) - 97
      if (!node.children[letterIndext]) {
        const newNode = new TrieNode()
        node.children[letterIndext] = newNode
      }
      node = node.children[letterIndext]
    }
    node.value = value
  }
}

const trie = new Trie()

trie.insert('age', 25)
trie.insert('name', 'summer')
trie.insert('names', ['summer', 'henry'])

console.log(trie)
