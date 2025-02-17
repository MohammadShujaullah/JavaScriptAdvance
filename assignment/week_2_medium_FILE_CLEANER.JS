const fs= require("fs")
fs.readFile("a.text","UTF-8",(err,data)=>{

  if(err){
    console.error("the error is occuring",err)
  }
  console.log(" the data is -",data)
 
})

function somthingMoreExpensive(iteration){
  let sum=0
  for(let i=0;i<iteration;i++){
    sum+=Math.sqrt(i)*Math.log(i+1);

  }
  console.log("the result of expensive ",sum)
}
console.log("completing the expensive ")
somthingMoreExpensive(1e7)
console.log("completd the expensive")

// counter //////////////
let count=0
setInterval(()=>{
  console.log("counter",++count)
},1000)
////// counter using setTimeout   // not setInterval//////

let sum=0
 function interval(){
  console.log("counter",sum++)
   setTimeout(interval,1000)
 }
 interval()