// jQuery("h1").click(function() {
//   alert("This is a header.");
// });
//
// jQuery("p").click(function() {
//   alert("This is a paragraph.");
// });
//
// jQuery("img").click(function() {
//   alert("This is an image.");
// });

// var originalsentence = prompt("Enter the sentence:");
//
// alert("The original sentence is: " + originalsentence);



// var captial = function(originalsentence)
//  {
//   var first, last, first-last, length;
//   var first= originalsentence.charAt(0);
//   length= originalsentence.length;
//   last= originalsentence.charAt(length-1);
//   first= first.toUpperCase();
//    first= first.toUpperCase();
//   result1= first-letter + last-letter;
//   return result;
//   var reverse;
//   reverse= last-letter + first-letter;
//   };
//
//   alert("First and last lettle in Captial: " + captial(originalsentence));
//

//
// var reversefn = function(originalsentence)
//  {
//     var first-letter, last-letter, first-last, length, result1;
//     first-letter= charAt(originalsentence);
//     length= originalsentence.length;
//     last-letter= charAt(length-1);
//     first-letter= first-letter.toUpperCase();
//     last-letter= flast-letter.toUpperCase();
//     var reverse;
//     reverse= last-letter + first-letter;
//   };
// var call12= function(){
//   var bothfn= (Captial(originalsentence) +reversefn(originalsentence));
//   return bothfn;
// }


var originalsentence = prompt("Enter the sentence:");

alert("The original sentence is: " + originalsentence);
var first= originalsentence.charAt(0);
alert("The first letter is: " + first);
var length= originalsentence.length;
var last= originalsentence.charAt(length-1);
alert("The last letter is: " + last);
first= first.toUpperCase();
last= last.toUpperCase();
alert("The first letter in captial is: " + first);
alert("The last letter in captial is: " + last);
var firstlast= first + last;
alert("combining the letter in captial is: " + firstlast);
var lastfirst = last + first;
alert("reversing the combination of first and last letter in captial is: " + lastfirst);
alert("combination of function1 and function2 : " + firstlast + lastfirst);
alert("combination of original sentence and function2 : " + originalsentence + lastfirst);
alert("No. of letters in original sentence is: " + length);
var divide= (length/2);
divide= divide.toFixed();
alert("No. of letters after divide by 2 and round-off in original sentence is: " + divide);
var nletter= originalsentence.charAt(divide-1);
alert("letters n th position : " + nletter);
originalsentence = nletter + originalsentence;
alert("finally combination : " + originalsentence);

function reverseString(str) {
    return str.split("").reverse().join("");
}
alert("reversinf the letters : " + reverseString(originalsentence));
