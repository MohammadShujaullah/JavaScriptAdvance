function dateMethods(){
    const currentdate= new Date();
    console.log("current date:",currentdate);

    //getting various component of the date
    console.log("current date:",currentdate.getDate());
    console.log("current month:",currentdate.getMonth()+1); // month is started with zero index,so +1
    console.log("current year:",currentdate.getFullYear());
    console.log("current hours:",currentdate.getHours());
    console.log("current minute:",currentdate.getMinutes());
    console.log("current second:",currentdate.getSeconds());


    //setting the components of the date
    currentdate.setFullYear(2005);
    console.log("after setting year",currentdate);
    
    // setting the month of the date
    currentdate.setMonth(10);   // month is zero index so, for november we have to pass 10
    console.log("after setting the month",currentdate);
//<-----------------------------v.v.i------------------------------------>//
    //getting and setting time in millisecond since 1970
    console.log("time in millisecond sice 1970",currentdate.getTime());
  // the above time shwing how maney time is passed after 1970 ,till now

//<------------------------------------------------------------------->//
    //creating a new date 
    const newdate= new Date(2005,10,15);
    console.log(" new saet date is:",newdate);


}
dateMethods();