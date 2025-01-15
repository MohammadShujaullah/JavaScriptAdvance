function explainparseInt(value){
    console.log("original value:"+value)
    const result= parseInt(value);
    console.log(result);
}


explainparseInt("42");
explainparseInt("42px");
explainparseInt("3.14");


function explainparsefloat(value){
    console.log("original value:"+value);
    const result=parseFloat(value)
    console.log(result);
}
explainparsefloat("42");
explainparsefloat("3.14");
explainparsefloat("42px");
