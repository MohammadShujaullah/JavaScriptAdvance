function getdata(data) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {                     // best killer of call back hell 
            console.log("data", data)
            resolve("success")
        }, 2000)
    })
}

getdata(1111).
    then(() => {
        return getdata(2222)
    }).then(() => {
         return getdata(3333)
    }).then(()=>{
        return getdata(44444)

    }).then((res)=>{
        console.log(res)
    })