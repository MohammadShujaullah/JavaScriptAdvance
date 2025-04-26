

class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()          // same naam se return nahi kraate han, always change the name 
    }
    set password(value){
    this._password=value.toUpperCase();

    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(vslue){
        this._email=vslue
    }


}
const hetesh=new User("shuja@gmsil.com","123abdscs")
console.log(hetesh.password)
console.log(hetesh.email)