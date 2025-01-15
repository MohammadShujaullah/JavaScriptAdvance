function mathsMethods(value){
   console.log("original value:",value);
   
   //round value
   console.log("round value :",Math.round(value));

   // floor value
   console.log("floor value",Math.floor(value));

   //ceil value
   console.log(" ceil value:",Math.ceil(value));

   // letting a random value
   let random=Math.random();
   console.log("random value:",random);


   //max value
   console.log("maximum value",Math.max(2,3,4));
   //min value
   console.log("minimum value",Math.min(2,3,4));

   //power of anumber
   console.log(Math.pow(value,2));

   //sqrt
   console.log(Math.sqrt(value));




}

mathsMethods(4.56);
mathsMethods(9);
mathsMethods(25);