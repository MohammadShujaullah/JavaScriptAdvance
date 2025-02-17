const { rejects } = require("assert");

function asynchfun1() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")             /// better than call back function , and act like that also
        }, 4000)
    })
}

function asynchfun2() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")


        }, 4000)
    })


}
console.log("fetching data1")
asynchfun1().then((res) => {
    console.log("fetching data2")
    asynchfun2().then((res) = {})    // it will run after 8 sec
})
/////////////////////example2//////////

function getdata(data) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {                     // best killer of call back hell 
            console.log("data", data)
            resolve("success")
        }, 2000)
    })
}
getdata(22222).then((res)=>{
    console.log(res)
    getdata(3333).then((res)=>{
        console.log(res)
        getdata(4444).then((res)=>{
            console.log(res)

        })

    })
})
 

 