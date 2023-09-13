function booooo(n) {
  for (let i = 0; i < n.length; i++) {
    // i = 0, is the only variable that we are creating: O(1)
    console.log("booooo!");
  }
}

booooo([1, 2, 3, 4, 5]); // O(1) --> constant space
