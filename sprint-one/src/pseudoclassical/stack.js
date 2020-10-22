// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor

var Stack = function() {
  this.storage = {};
};

Stack.prototype.size = function () {
  let { length: size } = Object.keys(this.storage);
  return size;
};

Stack.prototype.push = function (value) {
  let key = this.size() + 1;
  return this.storage[key] = value;
};

Stack.prototype.pop = function () {
  let lastItem = this.size();
  let deletedItem = this.storage[lastItem];
  delete this.storage[lastItem];
  return deletedItem;
};
