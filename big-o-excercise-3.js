// Build a feature that retrieves the most recent tweet and the oldest tweet
// Find 1st, find Nth...
const array = [
  { tweet: "hi", date: 2012 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2018 },
];
array[0]; // O(1), because retrieving from an array takes O(1)
array[array.length - 1]; // O(1)

// time complexity: O(1)

// compare the dates of tweets : O(n^2)

// what is the time complexity for the lenght of string?
"djkdjkdjdkjfkdjkd".length // it depends on the programming language, every language has its own implementation
                            // for javascript, length is simply a property, hence O(1)
