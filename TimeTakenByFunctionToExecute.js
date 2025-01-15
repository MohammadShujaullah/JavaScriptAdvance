// best use of settime

function calculateSum(n){let count=0;
for(let i=0;i<n;i++){
    count+=i;
}}

const beforeDate= new Date();
const beforetimems=beforeDate.getTime();

calculateSum(100000);

const afterDate= new Date();
const aftertimems=afterDate.getTime();




console.log(aftertimems- beforetimems); // if n=100000, the time it takes is 2ms
//


//<------------------------------------------------------------->//

//making a roww Stop watch
function currenttimeprint(){
    console.log(new Date().getTime());
}
setInterval(currenttimeprint,1000);