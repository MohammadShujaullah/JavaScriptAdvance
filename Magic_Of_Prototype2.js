
/*   string 
 *        -
 *         -
 *          - _ 
 * array-----_--  OBJECT ---null     prtotype is working with this 
 *         -
 *        -
 * function
 * 
 */




let heros=["thor","spiderman"]    // this is an aaray 


let heropower={
    thor:"hammer",      // this is an Object 
    spiderman:"string",
     getSpiderManPower: function(){
        console.log(`spiderman has a power of ${this.spiderman}`)
     }
}
Object.prototype.hetesh=function(){
    console.log('hetesh is now the lead ')
}

Array.prototype.heyhetesh=function(){
    console.log(`hey hetesh for the array `)
}


heropower.hetesh()   // object also workss with prototype
heros.heyhetesh()       // array also works with prototype




/// answer of the first part is (by use of protype)is 

let anotherUserName="chaiOrCode   "

String. prototype.truelength=function(){
    console.log(`the true length is the :${this.trim().length}`)
}


anotherUserName.truelength()

"shujaullahhh ".truelength()
