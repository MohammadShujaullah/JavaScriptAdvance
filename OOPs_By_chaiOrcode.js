

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

function user(username, logincount, islogin, greeting) {
    this.username = username;
    this.logincount = logincount;
    this.islogin = islogin;
    this.greeting = function () {
        console.log(`WLCOME${username}`)
    }
    return this

}

const user1 = new user("shuja", 12, true)
const user2 = new user("chai", 13, false)
console.log(user1)     //this showing that user2 is overridding the whole ,so we use 
// the (new) key word 
console.log(user1.greeting)
console.log(user1.constructor)





/////////////////////////////////////another lecture of classes and object of chai or code 
class User {

    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }


}

User.prototype.encryptpassword = function () {  /// ek function ko dusre ke saath merge
                                             //   krne main help krta ha PROTOTYPE
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}


const shuja1 = new User("shujauualh", "mdshuja@gmail.com", "shuja2789")

console.log(shuja1.encryptpassword())
console.log(shuja1.changeUsername())


///////////////// next example 

class UUSER{
    constructor(username){
        this.username=username
    }
    static college(){     // static lgaane ke baad , app uss function ko accsess nahi kr skte
        console.log(`my name is :${this.username}`)
    }
}

class Teacher extends UUSER{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
}
const tea= new Teacher("shuja","sr@gmail.com",12234)

console.log(tea.college())












