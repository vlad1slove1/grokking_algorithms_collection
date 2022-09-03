class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  // basic hash function
  hashFunction(value) {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash + value.charCodeAt(i) * i) % this.table.length;
    }

    return hash;
  }

  // add elements to the hash table
  set(key, value) {
    const memoryLocation = this.hashFunction(key);
    if (!this.table[memoryLocation]) {
      this.table[memoryLocation] = [];
    }
    this.table[memoryLocation].push([key, value]);

    return this.table;
  }

  // getting element value by the key
  get(key) {
    const memoryLocation = this.hashFunction(key);
    if (!this.table[memoryLocation]) return null;

    return this.table[memoryLocation].find((x) => x[0] === key)[1];
  }
}

const hashTable = new HashTable(4);
hashTable.set('Vlad', 27);
hashTable.set('Nastya', 27);
hashTable.set('Olya', 21);
console.log(hashTable);
console.log('____________________________________');
console.log(hashTable.table);
console.log('____________________________________');
console.log(hashTable.get('Vlad'));
console.log(hashTable.get('Nastya'));
console.log(hashTable.get('Olya'));
console.log(hashTable.get('Vitaliy'));
