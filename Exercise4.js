/*
Write a program that asks the user to enter a number and checks whether it is positive, negative, or zero. Use the >, <, and == operators to compare the number to 0.
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

let result = prompt('Input something: ');
console.log('You entered: ' + result);

result = Number(result);

if (result == 0){
    console.log('The number is 0!');
} else if (result > 0){
    console.log('The number is positive!');
} else {
    console.log('The number is negative!');
}