//without the use of promises

// promise is Asynchronous fn. which is slightly more readble and MAKE CallBacks

const { rejects } = require("assert");
const { promises } = require("dns");
const fs = require("fs")

function shujaWrite(loaded) {
    fs.readFile("a.text", "utf-8", function (err, data) {
        loaded(data)
    })

}

function upload(data) {
    console.log(data);

}
shujaWrite(upload);

// with the use of promises     ( new keywords for me--> promise,then,resolve)

const fss = require("fs")

function shujaWriting() {
    return new Promise(function (resolve) {
        fss.readFile("a.text", "utf-8", function (err, data) {
            resolve(data)
        })

    })

}

function uploading(data) {
    console.log(data);

}
shujaWriting().then(uploading);

// another example is use of promise-------------------------------

const d = new Promise(function (rejects) {        ///** vvi --> promises has 3 inbuiltfn. resolve,rejects,pending  // */
    rejects("some error occurred")
})


d.then(function (data) {
    console.log(data);
});

////////////////////////////////////
function getdata(value, getnextdata) {
    return new Promise((resolve,rejects)=>{
        setTimeout(() => {
            console.log("data", value)
            resolve("succes");
            if ((getnextdata())) {
                getnextdata();
            }
        }, 2000)
    })
    

}
getdata(99999);
