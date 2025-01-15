function square(a){
    return a*a;
}function cube(a){
    return a*a*a;
}

function sumOfSquare(a,b){
    const var1= square(a);
    const var2= square(b);
    return var1+var2;
                                       
}
function sumOfCube(a,b){
    const var1= cube(a);
    const var2= cube(b);
    return var1+var2;

}
 // here you can see that func. sumof square and sum of cube both Are similar fn. ,so we easily use call back function

console.log(sumOfSquare(1,2));        
console.log(sumOfCube(1,2));
//<----------------------OR  best approch  ------------->//
/*

function square(a){
    return a*a;
}function cube(a){
    return a*a*a;
}
function sumOfsomthing(a,b,func){
    const var1= func(a);
    const var2= func(b);
    return var1+var2;

}
console.log(sumOfsomething(1,2,square));




*/