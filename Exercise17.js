/*
Prime number checker: Write a program that asks the user to enter a positive integer and checks whether it is a prime number. A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself. For example, 2, 3, 5, and 7 are prime numbers, but 4, 6, 8, and 9 are not. Use a loop to solve this exercise.
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

const result = prompt('Input a positive integer: ');
console.log('You entered: ' + result);

let isPrime;
let n = Number(result);
for (let i = 2; i < n; i++){
    if (n%i == 0) {
        isPrime = false;
        break;
    }
}  
if (isPrime){
        console.log('This is a prime number.');
    } else {
        console.log('This is not a prime number.');
    }


