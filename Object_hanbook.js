// examples for object methods

function ObjectMethods(obj){
    console.log("original object :",obj);

    let keys=Object.keys(obj);
    console.log("keys of the object",keys);

    let values=Object.values(obj);
    console.log("values of the object",values);


    let entries=Object.entries(obj);
    console.log(" the object is :",entries);

    // to know that the object contain this property or not  by using this
    let haspro=obj.hasOwnProperty("key1");
    console.log("the object contain property:",haspro);


    // writting thobject and adding  a property both are done by this
    let newobj=Object.assign({},obj,{newproperty:"newvalue"});
    console.log("the new object is :",newobj)

   
}
const sampleobject={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
ObjectMethods(sampleobject);