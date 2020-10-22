var Stack = function () {
  let someInstance = {
    storage: {}
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};


var stackMethods = {
  size: function () {
    let { length: size } = Object.keys(this.storage);
    return size;
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