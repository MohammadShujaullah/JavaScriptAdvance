// let count=0;
// for(let i=30;i>=0;i--){
//     console.log(i);   
// }
// function calculatearithmatic (a,b,finalarithmaticfunction){
//     let ans=finalarithmaticfunction(a,b);
//     return ans;
// }
// function sum(a,b){
//     return(a+b); 
// }


// let ans= calculatearithmatic(1,2,sum);
// console.log(ans);   
// // we can pass the fuction inside another function as an argument
// function displayClock() {
//     setInterval(() => {
//         const now = new Date();
//         const hours = String(now.getHours()).padStart(2, '0');
//         const minutes = String(now.getMinutes()).padStart(2, '0');
//         const seconds = String(now.getSeconds()).padStart(2, '0');

//         // Clear the terminal and print the clock
//         console.clear();
//         console.log(`${hours}:${minutes}:${seconds}`);
//     }, 1000);
// }
// // Run the clock
// displayClock();



// let user={
//     firstname: "shujaullah",
//     gender:"male",
//     address:{
//         streetno:12,
//         homeno:"12"

//     }

// }
// console.log(user.address.homeno)



function fetchdata(){
    console.log("requesting data from chatgpt server...")

    setTimeout(()=>{
        console.log("recieved data from chatgpt server.[]")
    },3000);
}
fetchdata();
 




function hello1(){
    console.log("hello world1");    //callbacking process
}
function hello2(){
    console.log("hello wolrd2");
}
function currentworld(fn){
    fn();
}
currentworld(hello1)