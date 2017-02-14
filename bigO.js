'use strict';
var testArr1 = [1, 2, 3];
var testArr2 = [4, 5, 6];
var testVal = 1;

console.log(oOfOne(testVal));
function oOfOne(val) {
  return val + 5;
}

console.log(oOfN(testArr1));
function oOfN(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] + 5);
  }
  return result;
}

console.log(oOfNSquared(testArr1, testArr2));
function oOfNSquared(arr1, arr2) {
  let result = [];
  for (let j = 0; j < arr1.length; j++) {
    for (let i = 0; i < arr2.length; i++) {
      result.push(arr2[i] + arr1[j]);
    }
  }
  return result;
}
