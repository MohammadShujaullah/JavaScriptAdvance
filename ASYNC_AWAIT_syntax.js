// with normal syntax

function shujaWriting() {
    let p = new Promise(function (resolve) {
        resolve("hi everyone")
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
