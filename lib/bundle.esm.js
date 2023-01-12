import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.array.at.js';
import 'core-js/modules/es.string.at-alternative.js';

var sum = function sum(a, b) {
  return a + b;
};
var promise = new Promise(function (resolve, reject) {
  console.log("Promise========");
  resolve();
});
promise.then(function () {
  console.log("resolved.");
});
var setArrays = function setArrays(arr) {
  return arr.at(-1);
};
console.log("Hi!");

export { sum as default, promise, setArrays };
