// --------------------------------------------
// Program 23: Sample example of do-while loop   
// --------------------------------------------
/*
document.write("<h2>Do while loop</h2>");

let i =10;

do {
    document.write(i+"<br>");
    i--;
}
while(i>=0);
// --------------------------------------------
// Program 24: sum of first 10 numbers 
// --------------------------------------------
let i = 0;
let sum = 0;
do{
    sum = sum +i;
    i++;
}
while(i<=10);
document.write(sum);
// --------------------------------------------
// Program 25: Print Multiplication table  
// --------------------------------------------
let number = Number (prompt("enter a number"));
let i = 1;
do {
    let result = number * i;
    document.write(number +"X"+i +"="+result+"<br>");
    i++;
}
while(i<=10);
// --------------------------------------------
// Program 26: sum of digits   
// --------------------------------------------
let number = Number(prompt("Enter a number"));
let sum = 0;

do {
    let digit = number % 10;// get last digit
    sum = sum + digit;  //sum the last digit 
    number = Math.floor(number / 10);//remove the last digit 
} while (number > 0);
document.write(sum);
// --------------------------------------------
// Program 27: reverse the digits    
// --------------------------------------------
let number = Number(prompt("Enter a number"));
let reverse = 0;
do {
    let digit = number % 10;// get last digit
    reverse = reverse*10 + digit;  //sum the last digit 
    number = Math.floor(number / 10) //remove the last digit
} while (number > 0);
document.write(reverse);

document.write("<h2>Patterns</h2>");
// --------------------------------------------
// Program 28: Print 5 stars horizontally      
// -------------------------------------------
for (let i=0;i<=5;i++){
    document.write("*");
}
// --------------------------------------------
// Program 29: Print 5 stars vertically     
// -------------------------------------------
for (let i=0;i<=5;i++){
    document.write("*"+"<br>");
}
for (let i=0;i<=5;i++){
    for (let j=0;j<=5;j++){
        document.write("*");
    }
    document.write("<br>");
}
for (let i=0;i<=5;i++){
    for(let j=0;j<=i;j++){
        document.write("*");
    }
    document.write("<br>");
}
for (let i=5;i>=0;i--){
    for(let j=0;j<=i;j++){
        document.write("*");
    }
    document.write("<br>");
}
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j);
    }

   document.write("<br>");
}
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write(j);
    }

   document.write("<br>");
}
for (let i = 1; i <= 5; i++) {
    // Print spaces
    for (let j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;");
    }
    // Print stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        document.write("*");
    }
    // Move to next line
    document.write("<br>");
}
for (let i = 5; i >= 1; i--) {
    // Print spaces
    for (let j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;");
    }
    // Print stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        document.write("*");
    }
    // Move to next line
    document.write("<br>");
}
for (let i = 5; i >= 1; i--) {
    // Print spaces
    for (let j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;");
    }
    // Print stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        document.write(j);
    }
    // Move to next line
    document.write("<br>");
}/*
let num = 1;
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        document.write(num);// print num
        num++;// increase num
    }

    document.write("<br>");
}
document.write("<h2> Factorial using for loop</h2>");
let number = Number(prompt("Enter a number"));
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial =factorial*i;// multiply factorial by i
}
document.write(factorial);
document.write("<h2> Factorial using while loop</h2>");
let number = Number(prompt("Enter a number"));
let factorial = 1;
let i = 1;
while (i <= number) {
    factorial =factorial*i;
    i++;
}
document.write(factorial);
let number = Number(prompt("Enter a number"));
let factorial = 1;
let i = 1;
do{
    factorial =factorial*i;
    i++;
}
while (i <= number) 
document.write(factorial);
// --------------------------------------------
// Program : Prime numbers   
// -------------------------------------------
document.write("<h2> checking the prime numbers</h2>");
let number1 = Number(prompt("Enter a number"));
let isPrime = true;
if (number1 <= 1) {
    isPrime = false;
} else {
    for (let k = 2; i < number1; k++) {
        if (number1 % k === 0) {
            isPrime = false;
            break;
        }
    }
}
// --------------------------------------------
// Program : Prime numbers from 1 to 100
// -------------------------------------------
if (isPrime) {
    document.write(number + " is a Prime Number");
} else {
    document.write(number + " is Not a Prime Number");
}*/
for (let number = 2; number <= 100; number++) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write(number + " ");
    }
}/*
// --------------------------------------------
// Program : Fibonacci series
// -------------------------------------------
let first = 0;
let second = 1;
for (let i = 1; i <= 10; i++) {
    document.write(first + " ");
    let next = first + second;
    first = second;
    second = next;
}*/