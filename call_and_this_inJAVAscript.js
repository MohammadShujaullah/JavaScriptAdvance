
function setUserName(username){

    this.username=username;
    console.log("called")


}
function user(username,email,password){
    setUserName.call(this,username)     // for reference hold kra ke rakhne ke lie
    this.email=email
    this.password=password
}
const chai= new user("shuja","@gnfje",1234)
console.log(chai)