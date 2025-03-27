const form =document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();    // to prevent it to submit in anywhere
    const height=parseInt(document.querySelector('#height').value);  // the value is in String , so we have to change it in integer
    const weight=parseInt(document.querySelector('#weight').value); // the value is in String , so we have to change it in integer
 
    const result=document.querySelector('#results');
   if(height==='' || height<0 || isNaN(height)){     // isNAN is to check weather height is number or not 
    result.innerHTML=` please give a valid height ${height}`;
   }

   else if(weight==='' || weight<0 || isNaN(weight)){     // isNAN is to check weather height is number or not 
    result.innerHTML=`please give avalid weight ${weight}`;
   }
   else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);

 

        if(bmi>24.9){
            console.log(   result.textContent=`BMI:${bmi}-Overweight`);
         
        }
        else if(18.6<bmi<24.9){
            console.log(   result.innerHTML=`${bmi}-normalweight`);
            
        }
        else{
            console.log(   result.innerHTML=`${bmi}-underweight`);
            
        }
    
}


})