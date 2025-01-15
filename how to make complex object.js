//** */ first choice as individual

let person1="shujaullah";
let age1=18;

let person2= "shuja";
let age2=20;

//** */ second choice as an array

// const personarray=["shujaullah","shuja","mustafa"];             // important
// const gender=["male","female","male"]; 

// for(let i=0;i<personarray.length;i++){
//     if(gender[i]=="male"){
//         console.log(personarray[i]);
//     }
// }                 

//** */ third choice  as

// const user1={
//     firstname :"shujaullah",
//     gender:"male"

// }
// console.log(user1["firstname"])
// console.log(user1["gender"])




//** */ the 4th one which is most** important 
const alluser=[{
    firstname:"shujaullah",   // in javascript we said it Object
    gender:"male",
    metadata:{
        age:18,
        address:" i live in  patna "
    }
    
},{
    firstname:"shuja",
    gender:"female"
},{
    firstname:"kasim",
    gender:"male"
}
]
for(let i=0;i<alluser.length;i++){
    if(alluser[i]["gender"]=="male"){
        console.log(alluser[i]["firstname"]);

    }
}

