 
var a=0;
a=9;  // we can write a="hello" also  
console.log(a);
let firstname ="shujaullah";
let age=89;
let ismarried=false;
console.log("the name of the male candidate is "+firstname+" and their age is "+age);
if(ismarried){
    console.log(firstname+"is married")
}
else{
    console.log(firstname+" not married yet ")
}

let answer=0;
for(let i=0;i<=1000;i++){ 
   answer+=i;
}
console.log(answer);
// even no. of all elemnetn  of all wlwment 
// const ages= [22,23,24,25,26,27,28];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }
let max=0;
const m= [22,23,24,25,26,27,28];
for(let i=0;i<m.length;i++){
    max=Math.max(max,m[i]);
}
console.log(max);
