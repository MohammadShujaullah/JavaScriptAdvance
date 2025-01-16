//without the use of promises

const fs=require("fs")

function shujaWrite(loaded){
    fs.readFile("a.text","utf-8",function(err,data){
          loaded(data)
    })

}

function upload(data){
    console.log(data);

}
shujaWrite(upload);

// with the use of promises

const fss=require("fs")

function shujaWriting(loaded){
    fss.readFile("a.text","utf-8",function(err,data){
          loaded(data)
    })

}

function uploading(data){
    console.log(data);

}
shujaWriting(uploading);