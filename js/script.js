// JavaScript String Length

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = text.length;

// The length property returns the length of a string:






// 2)Extracting String Parts

// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length


// JavaScript String slice()
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13);
// document.getElementById("demo").innerHTML = part;


// JavaScript String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substring(7,13);


// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part
// let str = "manikandan";
// document.getElementById("demo").innerHTML = str.substr(3,10);








// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML =
//     text.replace("virat","Run Machine");
//   }










// STRING METHOD //
var s1 = "manikandan";
var s2 = "MANIKANDAN2009";
var s3 = "mani"
//charAt()
console.log(s1.charAt(6));
//charCodeAt()
console.log(s1.charCodeAt(1));
//concat()
console.log(s1.concat(s2));
//endsWith&starstWith
console.log(s1.startsWith("m"));
console.log(s2.endsWith("2009"));   
//fromCharCode
console.log(String.fromCharCode(103));
//indexOf()
console.log(s1.indexOf("manikandan"));
//lasIndexOf()
console.log(s1.lastIndexOf("manis"));  
//match()
console.log(s1.match(/"mani"/i));
//repeat()
console.log(s1.repeat(3));
//replace()
console.log(s1.replace(/mani/g,"MANI"));
console.log(s1.replace(/kandan/i,"KANDAN"));
//search()
console.log(s1.search("mani"));
//slice()
console.log(s1.slice(3,5));
//split()
console.log(s1.split(""));
//substr()
console.log(s1.substr(3,4));
//substring()
console.log(s1.substring(2,5));
//toUpperCase()  
console.log(s1.toUpperCase());
//toLowerCase()
console.log(s2.toLowerCase());
//trim()
console.log(s2.trim());











































