// Given 2 arrays, create a function that lets a user know (true/false) whether these two array contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//-----------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// How to approach?
// 2 parameters - arrays - no size limit
// return true or false

// Brute force: O(n^2) - coding may not be required
function hasCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

console.log(hasCommonItems(array1, array2));
