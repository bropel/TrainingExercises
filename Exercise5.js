/*
Write a program that asks the user to enter two numbers and checks whether they are equal. Use the === operator to compare the numbers. If the numbers are equal, print a message saying "The numbers are equal." If the numbers are not equal, print a message saying "The numbers are not equal."
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

let result = prompt('Input two numbers separated by a comma: ');
console.log('You entered: ' + result);

let numbers = result.split(',');
//console.log(numbers);

let num1 = numbers[0];
let num2 = numbers[1];

if (num1 === num2){
    console.log('The numbers are equal!');
} else {
    console.log('The numbers are not equal.');
}

