/*
Guess the number: Write a program that generates a random number between 1 and 100 and asks the user to guess the number. The program should give the user feedback on whether their guess is too high, too low, or correct. The user should have unlimited guesses. Use a loop to solve this exercise.
*/

let randNumber = Math.floor(Math.random()*100 + 1)

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

const result = prompt('Input something: ');
console.log('You entered: ' + result);
let i = true;
do {

    if (Number(result) == randNumber){
        console.log('You guessed correctly!');
    } else if (Number(result) > randNumber){
        console.log('Your guess is too high.');
    } else if (Number(result) < randNumber){
        console.log('Your guess is too low.')
    } 
    randNumber = Math.floor(Math.random()*100 + 1);
    prompt('Input another number: ');
} while (i);
console.log(randNumber);