const sum = (a, b) => {
  return a + b;
};
export let promise = new Promise(function (resolve, reject) {
  console.log("Promise========");
  resolve();
});

promise.then(function () {
  console.log("resolved.");
});

export const setArrays = (arr) => {
  return arr.at(-1);
};

console.log("Hi!");

export default sum;
