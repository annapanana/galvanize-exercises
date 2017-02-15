'use strict';
var testArr = [1, 5, 8, 2, 6, 9]
console.log(bubbleSort(testArr));
function bubbleSort(arr) {
  let counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      // console.log(arr[i]);
      // console.log(arr[i+1]);
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      counter++;
    }
  }
  if (counter > 1) {
    return bubbleSort(arr);
  } else {
    return arr;
  }
}
