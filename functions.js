// TODO: add your solutions here!
// 1
// function combine 2 strings
// function name = combineStrings
// variable parameters = string1, string 2
function combineStrings(string1, string2){
  return string1 + string2;
}
console.log (combineStrings("dog", "house"));
combineStrings ("dog", "house");

// 2
// function repeat phrase
// funtion name = repeatPhrase
// variable parameters = phrase, n number of times
// for loop showing nth times in console
function repeatPhrase(phrase, n){
  for (var i=0; i<n; i++){
console.log (phrase);
  }
return phrase;
}
repeatPhrase ("Hi.",5);

// 3
// function power x^nth
// function name = powerNth
// variable parameters = x, n, result
// for loop multiplying (x*x) by n times
function powerNth(x, n){
  var result = 1;
  for (var i=0; i < n; i++){
  result *= x;
  }
return result;
}
console.log (powerNth(4, 5));
powerNth (4, 5);

// 4
// function area of a circle given r
// function name = areaOfCircle
// variable parameters = r, result
// js pi cheat = Math.PI
// equation : Math.PI*r*r
function areaOfCircle(r){
  var areaC = Math.PI*r*r;
  return areaC;
}
console.log (areaOfCircle(4));
areaOfCircle (4);

//5
// function return c^2 given a^2 + b^2
// function name = pythagoreanTheorem
// variable paramenters = a, b, cSquared(result)
// equation: c*c = a*a + b*b
function pythagoreanTheorem(a, b){
  var cSquared = (a*a) + (b*b);
  return cSquared;
}
console.log (pythagoreanTheorem(2, 2));
pythagoreanTheorem (2, 2);

// 6
// function is x divisible by y evenly?
// function name = isDivisible
// variable parameters = x, y, result
// equation x % y === 0; true or false
function isDivisible(x, y){
  var evenResult = x % y;
  if(x % y === 0){
    return true;}
    if(x % y !== 0){
      return false;
    }
  }
console.log (isDivisible (10, 2));
isDivisible (10, 2);

// 7
// function count vowels in a word (a, e, i, o, u, y)
// function name = countVowels
// variable paramenters  = array vowels [a, e, i, o, u, y], word
// count number of matches in word with gi and length
function countVowels (word){
  // new concept: match
  return word.match(/[a,e,i,o,u,y]/gi).length;
}
console.log (countVowels ("julie"));
countVowels ("julie");

// 8
// function if array has string 'wdi', return true, otherwise false
// function name = inclWdi
// variable parameters = array
// return true or false if array has 'wdi' using include
function inclWdi (array){
  // new concept: includes
  if (array.includes('wdi')){
  return true;
  }
  // new concept: not include = !varName.includes()
  if (!array.includes('wdi')){
    return false;
  }
}
console.log (inclWdi ('wdi is cool'));
countVowels ('wdi is cool');

// 9
// function find longest word in sentence
// function name = longestWord
// variable parameters = sentence, words, longest length word (number)
// and longest length word (str) = (results)
// return the longest word of a sentence input using split and for loop to go through words until we find the longest word

//function name
function longestWord(sentence) {
  //define variables
  //new concept: split words out as individual strings
  var words = sentence.split(' ');
  var longestLength = 0;
  var longestWord;
  //for loop to pick out longest word among split out words by getting length of words
  //whichever has greatest value --> output
  for (var i=0; i<words.length; i++) {
    if (words[i].length > longestLength) {
       longestLength = words[i].length;
       longestWord = words[i];
    }
  }
  return longestWord;
}
console.log (longestWord ('is this word the longesssttt or this onnneeee?'));
longestWord ('is this word the longesssttt or this onnneeee?');

// function ASCII triangle
// function name = asciiTriangle
// function parameters = n (limit of lines), star
// remember we're not dealing with numbers but '* -- so loop needs to include '*'
// return loop of '*' adding one each line
function asciiTriangle(n){
  for (var star = '*'; star.length <= n; star += '*'){
    console.log (star);
  }
  return star;
}
asciiTriangle (7);

// function print pyramid
// function name = pyramid
// function parameters = n (limit of lines), centeredStar, star, space
// return loop within loop of '*' adding one each line but this time, centered by spaces directly around stars
// and to the right and left of the most left and most right stars
// i.e. 1 star has n-1 spaces (i star has n-i spaces)
function pyramid(n){
  for(var i=0;i<n;i++){
    //remove one space for every space (because we want n-1 spaces/2 on each side)
    var centeredStar = "";
    // spaces on the right and left of most left and most right stars
    for(var space=0;space < n-i;space++){
        centeredStar += " ";
    }
    // total stars seperated by spaces on the right per line
    for(var star=0;star<=i;star++){
       centeredStar += "* ";
    }
    console.log(centeredStar);
  }
  return centeredStar;
}
pyramid (7);
