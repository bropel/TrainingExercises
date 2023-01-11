/*
Factorial calculator: Write a program that asks the user to enter a positive integer and calculates the factorial of that number. The factorial of a number n is the product of all the positive integers from 1 to n. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. If the user enters a number that is not positive, print an error message.
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



let num = result;

function fact(num){
        let product = num;  
        if (num == 0 || num == 1){
            return 1;
        }  
        
    while (num > 1){
        num--;    
        product = product * num;
    }
    return product;
}

if (result < 0){
    console.log("Error: please input a positive integer");
} else {
    
 console.log(fact(num));
}
