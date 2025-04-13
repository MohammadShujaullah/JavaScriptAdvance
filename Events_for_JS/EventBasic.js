console.log('SHUJAULLAH');
setTimeout(function(){
   console.log("after")   // why the "after" is print , just after "before", because it goes inside Task queue, and then further
},0)
console.log("before")