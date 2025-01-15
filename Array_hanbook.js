// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


//push
function pushExample(arr,target){
    console.log("original array:"+arr);
    arr.push(target);
    console.log("pushed array:"+arr);
}
pushExample([1,2,3],4);

//pop
function popExample(arr){
    console.log("original array:"+arr);
    arr.pop();
    console.log("poped array:"+arr);
}
popExample([1,2,3]);
//shift
function shiftExample(arr){
    console.log("original array:"+arr);
    arr.shift();
    console.log("shifted array:"+arr);
}
shiftExample([1,2,3]);

//unshift
function unshiftExample(arr,element){
    console.log("original array:"+arr);
    arr.unshift(element);
    console.log("unshifted array:"+arr);
}
unshiftExample([1,2,3],4);

//concat
function concatExample(arr1,arr2){
    console.log("original arrays:",arr1,arr2);//similar to push , as there we push element ,while in this array is pusehed 
    let arr3=arr1.concat(arr2);
    console.log("conmcatted array:"+arr3);
}
concatExample([1,2,3],[4,5,6]);
// concat may be  OR
arr1=[1,2,3];
arr2=[4,5,6];
for(let i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);

}
console.log(arr1);


/////////////////////\\\\\\\\\\\\\\\\\\\\\
// forEach()
function forEachExample(arr){
    console.log("original array:",arr);
    arr.forEach(function(item,index){
        console.log(item,index);
    })
}
forEachExample([1,2,3]);


//map()
function mapExample(arr){
    console.log("original array:",arr);
    let newarr=arr.map(function(item){
        return item*2;
    })
    console.log("mapped item",newarr);
}
mapExample([1,2,3]);

//find()
function findExample(arr){
    console.log("original array:",arr);
    let newarr=arr.find(function(item){
        return item>2;
    })
    console.log("mapped item",newarr);
}
findExample([1,2,3,4,5,6]);

// sort()
function sortExample(arr){
    console.log("original array:",arr);
    let newarr=arr.sort(function(a,b){
        return a-b;
    })
    console.log("sorted array:",newarr)
}
 sortExample([1,2,3,4,5,6]);