// async   ---->           made any function ,which return promise
// await is used always inside the async function,    ye wait krta ha ke kab async function promise return kre, tab tk ye sabko rok kr rakhta ha 


function api(data) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log("weather condition", data);
            resolve(200);
        }, 3000);

    });
}
    console.log("fetching weather1--> ")
    await api(1);
    console.log("fetching weather2--> ")
    await api(2);
    console.log("fetching weather3--> ")
    await api(3)









