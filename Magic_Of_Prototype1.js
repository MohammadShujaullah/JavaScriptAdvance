  //1. saare function , saare array , saare string or 
 // sab kuch ultimalty  Object ha ,

// 2.prototype is same as to inheritance in the javascript , same in java 

// objects get their properties from the JS(prototype)  or in java(class)
 
 function multiplyBy5(num){   
  
    return num*5;
}

multiplyBy5.power=2;

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username,score){
       this.username=username;
       this.score=score;

}
createUser.prototype.increament=function(){
    this.score++;                               // this means jis (jisne bhi bulaya ha uske pass jaao) 

}
createUser.prototype.printMe=function(){
    console.log(`the score is ${this.score}`)
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)
tea.printMe()




///// reason in the magic prottype in the part 2 
function truelength(String){    
    let count=0;
    for(let i=0;i<String.length;i++){
        if(papa.charAt(i)!=" "){
            count++;
        }
    }
    return count;
}
const papa="length   "
console.log(truelength(papa))  // 