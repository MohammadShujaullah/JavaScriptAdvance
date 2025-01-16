//without the use of promises

// promise is Asynchronous fn. which is slightly more readble and MAKE CallBacks

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

const d= new Promise(function(resolve){
        resolve("hi everyone")
})


d.then(function (data){
    console.log(data);
});
