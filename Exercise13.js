/*
Factorial loop: Write a program that asks the user to enter a positive integer n and calculates the factorial of n. The factorial of a number n is the product of all the positive integers from 1 to n. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. Use a loop to solve this exercise.
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

product = 1;
for (let i = Number(result); i >= 1; i--){
    product *= i;
}

console.log(product);