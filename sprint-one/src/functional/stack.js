// LIFO
var Stack = function() {
  // saves the methods below in an object?!
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let key = someInstance.size() + 1;
    return storage[key] = value;
  };

  someInstance.pop = function() {
    let lastItem = someInstance.size();
    let deletedItem = storage[lastItem];
    delete storage[lastItem];
    return deletedItem;
  };

  someInstance.size = function() {
    let { length: size } = Object.keys(storage);
    return size;
  };

  return someInstance;
};


