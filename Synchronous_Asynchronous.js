// example of synchronous function
let count = 0;
for (let i = 0; i < 100; i++) {
    count += i;
}                      // the code is going line by line,without dalaying in any function
console.log(count);


// example of Asynchrounous function

//(some Async. function are setTimeout,fs.readFile,fetch)
function sumOfAll() {
    let x = 0;
    for (let j = 0; j < 100; j++) {
        x += j;
    }
    console.log(x);
}

setTimeout(sumOfAll,1000);      //(however,hello world is after the settimeout function ,but hello world 
                                // //prints before it, because javascript ,goes on another work ,while ,
                                // //settime function doing their own work)
                               //<--THIS IS KNOWN AS DELIGATION IN javascript
console.log("hello wolrd")

/////////////////////////////////////



 
 

