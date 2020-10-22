class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  size() {
    let { length: size } = Object.keys(this.storage);
    return size;
  }

  enqueue(value) {
    let key = this.count += 1;
    key = this.size() + key;
    return this.storage[key] = value;
  }

  dequeue() {
    let firstItem = Object.keys(this.storage)[0];
    let deletedItem = this.storage[firstItem];
    delete this.storage[firstItem];
    return deletedItem;
  }
}
