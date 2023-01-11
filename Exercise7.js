/*
Write a program that asks the user to enter their favorite color. If the user enters "red", "yellow", or "orange", print a message saying "Those are warm colors." If the user enters any other color, print a message saying "That is a cool color." Use the || operator to check whether the user's favorite color is red, yellow, or orange, else print out “that is a cool color”
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

const result = prompt('Input your favorite color: ');
console.log('You entered: ' + result);

if (result == 'red' || result == 'yellow' || result == 'orange'){
    console.log('That is a warm color.')
} else {
    console.log('That is a cool color.')
}