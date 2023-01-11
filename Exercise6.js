/*
Write a program that asks the user to enter their age and whether they are a citizen of the United States. Use the && operator to check whether the user is at least 18 years old and a citizen of the United States. If the user is at least 18 years old and a citizen of the United States, print a message saying "You are eligible to vote." If the user is not at least 18 years old or is not a citizen of the United States, print a message saying "You are not eligible to vote." This exercise requires the user to use the && operator to check whether two conditions are true: that the user is at least 18 years old and a citizen of the United States.
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

let result = prompt('Input your age (years) and US citizenship (y/n) separated by a comma: ');
console.log('You entered: ' + result);

let info = result.split(',');

let age = info[0];
let citizenship = info[1];

if (age >= 18 && citizenship == 'y'){
    console.log('You are eligible to vote.')
} else {
    console.log('You are not eligible to vote.');
}