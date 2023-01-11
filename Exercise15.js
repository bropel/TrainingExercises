/*
FizzBuzz: Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For multiples of both 3 and 5, print "FizzBuzz" instead of the number. Use a loop to solve this exercise.
*/

const num = 100;
for (let i = 0; i <= num; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
    } else if (i%3 == 0){
        console.log('Fizz');
    } else if (i%5 == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}