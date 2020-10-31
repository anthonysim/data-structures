var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.size = function () {
  let { length: size } = Object.keys(this.storage);
  return size;
};

Queue.prototype.enqueue = function (value) {
  let key = this.count += 1;
  return this.storage[key] = value;
};

Queue.prototype.dequeue = function () {
  let firstItem = Object.keys(this.storage)[0];
  let deletedItem = this.storage[firstItem];
  delete this.storage[firstItem];
  return deletedItem;
};