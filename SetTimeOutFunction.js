function greet(){
    console.log("hello world");
}
function greetAlient(){
    console.log("Hello Alien")
}

setTimeout(greet,1*1000)   
// this function show the hello world ,just after 5 sec after running code
setInterval(greetAlient,1*1000)
//this function show the hello Alien ,just every 1 sec 