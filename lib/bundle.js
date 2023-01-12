(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.promise.js'), require('core-js/modules/es.array.at.js'), require('core-js/modules/es.string.at-alternative.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.promise.js', 'core-js/modules/es.array.at.js', 'core-js/modules/es.string.at-alternative.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bundle = {}));
})(this, (function (exports) { 'use strict';

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

  exports.default = sum;
  exports.promise = promise;
  exports.setArrays = setArrays;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
