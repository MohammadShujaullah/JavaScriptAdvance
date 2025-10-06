
//1. Continuous   2 Holey (jismain Hole ho)


//SMI(small Element)

// packed Element 

//Double(float,String,function)


const ArrTwo=[1,2,3,4,5]   // this is  Packed SMI Element

ArrTwo.push(6.0)   // now it becomes Packed Double Element

ArrTwo.push('7')  ///  Packed Element

ArrTwo[11]=11   // array become Holey , because it contains string, double, holes etc


console.log(ArrTwo)
console.log(ArrTwo.length)
console.log(ArrTwo[15])
console.log(ArrTwo[9])

//bounc check 
hasOwnProperty(ArrTwo,9)

// Holes are expensive in JAVASCRIPT


//more optimised ...
//SMI>Double>Packed

const arrfour=new Array[3]
/// just 3 holes , HOLY SMI elements
arrfour[0]='1'   // Holy elements
arrfour[1]= '2'   // Holy elements

arrfour[2]='3'   // Holy elements

//instrad of doing above you can do
const arrfive=new Array[]

arrfive[0]='1'
arrfive[0]='12'
arrfive[0]='14'  // these are Packed elements

