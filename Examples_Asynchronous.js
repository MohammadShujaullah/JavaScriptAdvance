 //<-----example1----------\\\\
 const fs=require("fs")
 fs.readFile("a.text","utf-8",function(err,data){    // async. function,it read the file from another.
    console.log(data);
    console.log(err);   // it gives null , beacuse  here err is nothing 
 })

 //////how to write in a file/////

 const content=" hello  i am adding the content in a.text"
 fs.writeFile("a.text",content,"utf-8",(err)=>{
   if(err){
      console.error("the errr voccured",err)
   }
   console.log("successfully write the operation")
 })
 //////////////////////////////////////////////


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


 // after all synchronous function run, then asynchronous  will be run