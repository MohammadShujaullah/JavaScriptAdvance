// here we have all about String in java

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// length
function findlength(str){
    console.log("the original string is :"+str);
    console.log("length of the string is:"+str.length);

}
findlength("hello world");

//indexof
function findindex(str,target){
    console.log("the original string is :"+str);
    console.log("index of the string is:"+str.indexOf(target));

}
findindex("hello world","world");

//Lastindexof
function findLastindex(str,target){      // when two or more similar words are present,and you want to find out the index of last word
    console.log("the original string is :"+str);
    console.log("index of the string is:"+str.lastIndexOf(target));

}
findLastindex("hello world world","world");

//slice
function getslice(str,start,end){        /// end is exclusive ***
    console.log("the original string is :"+str);
    console.log("after slice :"+str.slice(start,end));

}
getslice("hello world",2,7);

//substring
function getsubstring(str,start,end){
    console.log("the original string is :"+str);
    console.log("after substring :"+str.substring(start,end));

}
getsubstring("hello world",2,7);

//replace
function findreplace(str,target,replacement){
    console.log("the original string is :"+str);
    console.log("index of the string is:"+str.replace(target,replacement));

}
findreplace("hello world","world","javascript");

//split
function split(str,splitter){
    console.log("the original string is :"+str);
    console.log("after split:"+str.split(splitter));

}
split("hello world","o");    // the string is split at every letter which i passed ,for split

// trim
function trimString(str,target) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim(target));  // it is used to trim extra space prest at biggning and last of the string
  }
  trimString(" Hello World ","w");

  // toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");

  // toLowerCase
function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");




