function sum(num1,num2,fntocall){
    let result = num1+num2;
    fntocall(result);
}
function displayresult(data){
    console.log("reswult of the sum is :"+ data );
}
function displayresultpassive(data){
    console.log("sum's result is :"+data);

}

 


// ans of ther thisd sdoloutionn s -->
// is to change in the sum funvtion by passing an extra argument inside it , and calling the same function inside it 


// how will you display of a sum 
// you are only Allow to call one function  after this 
let ans=sum(1,2,displayresult);

 