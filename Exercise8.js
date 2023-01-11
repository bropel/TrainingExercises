/* 
Grade calculator: Write a program that asks the user to enter a percentage grade and prints the corresponding letter grade. Use the following grading scale:
90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F If the user enters a percentage grade below 0 or above 100, print an error message.
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

let result = prompt('Input your grade (%): ');
console.log('You entered: ' + result);

result = Number(result);

if (result >= 90){
    console.log('Your letter grade is A.')
} else if (result >= 80) {
    console.log('Your letter grade is B.')
} else if (result >= 70) {
    console.log('Your letter grade is C.')
} else if (result >= 60){
    console.log('Your letter grade is D.')
} else if (result < 60 && result >= 0){
    console.log('Your letter grade is F!')
} else {
    console.log('Error: You need to input a number between 0 and 100.')
}


