var Stack = function() {
  let someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  size: function () {
    let { length } = Object.keys(this.storage);
    return length;
  },

  push: function (value) {
    let key = this.size() + 1;
    return this.storage[key] = value;
  },

  pop: function () {
    let lastItem = this.size();
    let deletedItem = this.storage[lastItem];
    delete this.storage[lastItem];
    return deletedItem;
  }
};

