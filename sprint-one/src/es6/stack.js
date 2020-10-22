class Stack {
  constructor() {
    this.storage = {};
  }

  size() {
    let { length: size } = Object.keys(this.storage);
    return size;
  }

  push(value) {
    let key = this.size() + 1;
    return this.storage[key] = value;
  }

  pop() {
    let lastItem = this.size();
    let deletedItem = this.storage[lastItem];
    delete this.storage[lastItem];
    return deletedItem;
  }
}