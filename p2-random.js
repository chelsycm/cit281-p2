/*
    CIT 281 Project 2
    Name: Chelsy Cortes
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/*const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
} */

//console.log(result);

// Returns a random letter in the alphabet 
function getRandomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
result += alphabet[getRandomInteger(1,alphabet.length-1)];
return result;
}

// Returns a random length string 
function getRandomString(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

console.log(getRandomString(10,20));

function getSortedString(string) {
  return string.split("").sort().join().replace(/,/g,""); //Jen helped me out with this

}

console.log(getSortedString("acbd"));
