function isPalindrom(str){
    str=str.toLowerCase();

    //compare the string with its rteverse version
    return str==str.split('').reverse().join('');

}

console.log(isPalindrom("na"))