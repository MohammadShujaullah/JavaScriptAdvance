 
 
//////////////notes 1/////////
 // const object={
//     username:"shujaullah",
//     password:12334,
//     userfunction:function(){
//         console.log(this.username)

//         console.log(this)
//     }

// }
// console.log(object.userfunction())

/////////////notes 2//////////

function user(username,logincount,islogin,greeting){
    this.username=username;
    this.logincount=logincount;
    this.islogin=islogin;
    this.greeting=function(){
        console.log( `WLCOME${username}`)
    }
    return this

}

const user1=new user("shuja",12,true)
const user2= new user("chai",13,false)   
console.log(user1)     //this showing that user2 is overridding the whole ,so we use 
// the (new) key word 
console.log(user1.greeting) 
console.log(user1.constructor)












 


