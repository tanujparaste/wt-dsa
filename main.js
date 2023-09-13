const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100).fill("nemo");
function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === "nemo"){
            console.log("Found NEMO");
            break;
        }
    }
}

// const compressFirstBox = (boxes) => {
//     console.log(boxes[0]); // O(1)
// }

// compressFirstBox([1, 2, 3, 4, 5]); // Big O: O(1)