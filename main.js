// const nemo = ["nemo"];
// const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
// const large = new Array(100).fill("nemo");
// function findNemo(array){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === "nemo"){
//             console.log("Found NEMO");
//             break;
//         }
//     }
// }

// findNemo(large); // Big O: O(n)

// const compressFirstBox = (boxes) => {
//     console.log(boxes[0]); // O(1)
// }

// compressFirstBox([1, 2, 3, 4, 5]); // Big O: O(1)

// function printFirstItemThenFirstHalfThenSayHi100Times(items){
//     console.log(items[0]); // O(1)
//     let middleIndex = Math.floor(items.length / 2); // O(1)
//     let index = 0; // O(1)
    
//     while(index < middleIndex){ // O(n/2)
//       console.log(items[index]); 
//       index++;
//     }
  
//     for(let i = 0; i < 100; i++){ // O(100)
//       console.log("hi");
//     }
//   }
  
//   printFirstItemThenFirstHalfThenSayHi100Times([1,2,3,4,5]); // O(n) --> linear time

// // Big O:
// // O(1 + n/2 + 100)
// // the rule is to drop the constants
// // O(101 + n/2)
// // O(1 + n/2)
// // O(1 + n)
// // O(n)

// Big O rule 3: different terms for inputs

function compressBoxesTwice(boxes, boxes2){
    boxes.forEach(function(boxes){
      console.log(boxes); // O(m)
    });
  
    boxes2.forEach(function(boxes){
      console.log(boxes); // O(n)
    });
  }
  
  // Big O
  // O(m + n)