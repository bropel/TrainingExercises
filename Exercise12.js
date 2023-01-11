/*
Summation loop: Write a program that asks the user to enter a positive integer n and calculates the sum of the numbers from 1 to n. Use a loop to solve this exercise.
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

let result = prompt('Input a positive integer: ');
console.log('You entered: ' + result);
result = Number(result);

let num = Number(result);
let sum = 0;
for (let i = 1; i <= num; i++){
   sum = sum + i;
}

console.log(sum);
