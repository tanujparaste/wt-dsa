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

function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]);
    let middleIndex = Math.floor(items.length / 2);
    let index = 0;
    
    while(index < middleIndex){
      console.log(items[index]);
      index++;
    }
  
    for(let i = 0; i < 100; i++){
      console.log("hi");
    }
  }
  
  printFirstItemThenFirstHalfThenSayHi100Times([1,2,3,4,5]);