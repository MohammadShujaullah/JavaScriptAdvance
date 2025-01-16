 //<-----example1----------\\\\
 const fs=require("fs")
 fs.readFile("a.text","utf-8",function(err,data){    // async. function,it read the file from another.
    console.log(data);
 })
 console.log("hello world")


///<------example2--------\\\
 
 console.log("hello world22")

 setTimeout(function(){
    console.log("hi there")
 },2000);
 setTimeout(function(){
    console.log("hi there2")
 },1000);
 let a=0;
 for(let i=0;i<10;i++){
    a=a+i;

 }
 console.log(a);