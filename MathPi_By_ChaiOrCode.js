//concept of Object.getOwnPropertyDescriptor
// concept of Object.defineProperty


console.log(Math.ceil(Math.PI))
const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter)

const chai={
    name:"ginger chai",
    price:240,
    isAvailable:true,
    isChaiAvail:function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))



// 2nd concept 
// -- based on that , can we change the property like 
// writable, enumerable, configurable 

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))



// accessing the object using for loop 
for(let [key,value] of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log(`${key}:${value}`)       

    }

    //you can see that , name is not printting , because we false the writable
}


