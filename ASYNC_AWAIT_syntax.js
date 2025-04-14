// with normal syntax

function shujaWriting() {
    let p = new Promise(function (resolve) {
        //promise ke ander we can do , all asynchronous tasks
        resolve("hi everyone") 
        
        //v.v.i(resolve ka kamm ye ha ki, wo promise
        //  ko .then se connect krta ha, agr resollve nahi lgaaenge to , niiche wala function
        //  main() nahi chlegaa )
        
    })
    return p;
}

function Main() {
    shujaWriting().then(function (answer) {
        console.log(answer)
        
    })
}
Main()
console.log("hi everyone111")


//****************************important concept ******************************/
//<---------------async/await syntax--------------->\\

function shujawrite() {
    let p = new Promise(function (resolve) {
        setTimeout(resolve("hi everyone with async and await"),5000)
    })
    return p;
}

async function main() {
    let value = await shujawrite();  // no callbacks,.then(),  and we use this with, aASYNCHRONOUS  function

    console.log(value)
    console.log("hi everyone 22")

}
main()
