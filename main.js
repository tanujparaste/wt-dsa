const large = new Array(100000).fill("nemo");
function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === "nemo"){
            console.log("Found NEMO"); // O(n)
        }
    }
    console.log(`Call to findNemo() took ${t1 - t0} millis.`); // O(1)
}

findNemo(large); // O(n + 1) = O(n)