var Queue = function() {
  let someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {
  size: function () {
    let { length: size } = Object.keys(this.storage);
    return size;
  },

  enqueue: function (value) {
    let key = this.count += 1;
    return this.storage[key] = value;
  },

  dequeue: function () {
    let firstItem = Object.keys(this.storage)[0];
    let deletedItem = this.storage[firstItem];
    delete this.storage[firstItem];
    return deletedItem;
  }
};


