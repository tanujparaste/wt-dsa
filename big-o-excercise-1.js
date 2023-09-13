// What is the Big O of the function given below?

function functionfunChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// Big O:
// O(1 + 1 + n + n + n + 1)
// O(3 + 3n)
// O(3n)
// O(n) --> linear time