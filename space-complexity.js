// function booooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     // i = 0, is the only variable that we are creating: O(1)
//     console.log("booooo!");
//   }
// }

// booooo([1, 2, 3, 4, 5]); // O(1) --> constant space


// Example 2: Space complexity

function arrayOfHiNTimes(n){
    let hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = "hi";
    }
    return hiArray;
}

console.log(arrayOfHiNTimes(6));