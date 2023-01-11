/*
State of water: Write a program that asks the user to enter a temperature in degrees Celsius. Use an if-else if-else statement to print a message indicating the state of water at the entered temperature: "The water is frozen" if the temperature is below freezing (below 0 degrees Celsius), "The water is boiling" if the temperature is above boiling (above 100 degrees Celsius), and "The water is neither frozen nor boiling" otherwise.
*/

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

let result = prompt('Input a temperature (degrees Celsius): ');
console.log('You entered: ' + result);
result = Number(result);

if (result < 0){
    console.log('The water is frozen.')
} else if (result > 100){
    console.log('The water is boiling.')
} else {
    console.log('The water is neither frozen nor boiling.');
}
