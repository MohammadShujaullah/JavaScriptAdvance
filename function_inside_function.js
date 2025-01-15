function calculatearithmatic (a,b,finalarithmaticfunction){
    let ans=finalarithmaticfunction(a,b);
    return ans;
}
function sum(a,b){
    return(a+b); 
}
let ans= calculatearithmatic(1,2,sum);
console.log(ans);   
// we can pass the fuction inside another function as an argument