function getdata(value, getnextdata) {
    setTimeout(() => {
        console.log("data", value)
        if (getnextdata()) {
            getnextdata();
        }
    }, 2000)

}
getdata(1, () => {
    getdata(2, () => {
        getdata(3, () => {         // this is callback hell 
            getdata(4);
        })
    });
});