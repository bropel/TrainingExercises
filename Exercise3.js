/* 
Write a program that keeps track of a running total and asks the user to enter a number. Each time the user enters a number, add it to the total and print the result to the console. Use the += operator to update the total.
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

let result = prompt('Input number: ');
console.log('You entered: ' + result);

result = Number(result);
let total = Number(result);
console.log(`The total is ${total}.`);


/*do {
    let counter = 0;
    counter = prompt('Input another number: ');
    console.log('You entered: ' + counter);
    counter = Number(counter);

    //total += counter;
    console.log('The new total is: ' + total);
    //break;
} while (1>0);*/