/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new TrieNode()  
};

function TrieNode () {
  this.children = new Map()
  this.word = ""
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root
  
  for (let i = 0; i < word.length; i++) {
  const char = word[i]
  if (!node.children.has(char)) {
    node.children = node.children.set(char, new TrieNode())
  }
  node = node.children.get(char)
  }
  
  node.word = word
  // console.log(this.root)
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root
  
  for (let i = 0; i < word.length; i++) {
  const char = word[i]
  if (!node.children.has(char)) {
    return false
  } else {
    node = node.children.get(char)
  }
  }
  
  // console.log(node, word)
  return node.word === word
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root
  
  for (let i = 0; i < prefix.length; i++) {
  const char = prefix[i]
  if (!node.children.has(char)) {
    return false
  } else {
    node = node.children.get(char)
  }
  }
  
  return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */