var Queue = function() {
  let someInstance = {
    storage: {},
    count: 0
  };

  _.extend(someInstance, queueMethods);
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
    let firstKey = Object.keys(this.storage)[0];
    let deletedItem = this.storage[firstKey];
    delete this.storage[firstKey];
    return deletedItem;
  }
};