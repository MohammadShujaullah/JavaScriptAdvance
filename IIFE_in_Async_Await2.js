//immideatly invoked function Expression

// used to directly access the await, without calling its async function
function api(data) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log("weather condition", data);
            resolve(200);
        }, 3000);

    });
}
(async function () {
    console.log("fetching weather1--> ")     // see its all format from apna college vidio /
                                               // not much important,only used for api
    await api(1);
    console.log("fetching weather2--> ")
    await api(2);
    console.log("fetching weather3--> ")
    await api(3)
}) ();

const fs=require("fs")
fs.readFile("a.text","UTF-8",(err,data)=>{
    console.log(data)
})

 