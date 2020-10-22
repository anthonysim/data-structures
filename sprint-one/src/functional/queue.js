//  FIFO
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // items coming in
  let count = 0;
  someInstance.enqueue = function(value) {
    let key = count += 1;
    return storage[key] = value;
  };

  // first items coming out
  someInstance.dequeue = function() {
    let firstKey = Object.keys(storage)[0];
    let deletedItem = storage[firstKey];
    delete storage[firstKey];
    return deletedItem;
  };

  someInstance.size = function() {
    let { length: size } = Object.keys(storage);
    return size;
  };

  return someInstance;
};
