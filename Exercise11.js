/*
Counting loop: Write a program that uses a loop to count from 1 to 10 and print the numbers to the console. Use a for loop, a while loop, and a do-while loop to solve this exercise.
*/

for (let i = 1; i < 11; i++){
    console.log(i);
}

let i = 0;
while (i < 10){
    i++;
    console.log(i);
}

i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);