// Classes and Prototypes solve the same problems

const myArray = [3, 6, 4, 5];

Array.prototype.sum = function () {
  return this.reduce((sum, currentValue) => {
    return currentValue + sum;
  }, 0);
};

Object.prototype.allValuesAreStrings = function () {
  return Object.values(this).reduce((allStrings, value) => {
    return allStrings && typeof value === String;
  }, true);
};

console.log(myArray.sum());

console.log([3, 6, 4, 6].sum());
