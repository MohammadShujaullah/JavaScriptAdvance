const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=true
       if(!error){
         resolve(username="sirji",password="123")
       }
       else{
        reject("somthing went wrong ")
       }
    },2000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username;

}).then((username)=>{
    console.log(username)
})
.catch((rejected)=>{       // when reject occure or error occures then .catch atta ha , saare then fir ht jaate han
    console.log(rejected)
})
.finally(console.log("the promise is either resolve or reject"))



// ***async and await doesnt handle the error , it only work  when resolve occures
const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=false
       if(!error){
         resolve(username="sirji",password="123")
       }
       else{
        reject("somthing went wrong ")
       }
    },2000)
})

async function asynchro(){
  try{  const x=await promisefive
    console.log(x);}
    catch(error){
        console.log(error)
    }
}
