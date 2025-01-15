function jsonMethods(jsonString){
    console.log("original String is:",jsonString);

    // convetring the  json string into javascript Object
    let parsedObject=JSON.parse(jsonString);
    console.log(parsedObject);

    //S tringify the javascript object into string
    console.log(JSON.stringify(parsedObject));

}

// example uses of json Methods
const samplejsonString='{"keys":"value","number":42,"nested":{"nestedkeys":"nestedValue"}}';

jsonMethods(samplejsonString);