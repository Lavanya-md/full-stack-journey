// ============================================
// JavaScript Task 2
// Conditional Statements and Loops
// ============================================
// --------------------------------------------
// Program 1 : Positive, Negative or Zero
// --------------------------------------------
/*let number = Number(prompt("Enter a number"));
document.write("<h2>postive,negative/zero &even / odd programs</h2>")
if (number > 0) {
    document.write("The number is positive");
}
else if (number < 0) {
    document.write("The number is Negative");

}
else {
    document.write("The number is Zero");
}
// --------------------------------------------
// Program 2 : Check Even or Odd
// --------------------------------------------
let no = Number(prompt("Enter a number"));
if(no %2 ===0){
    document.write("<br>"+"The number is even");
}
else{
    document.write("<br>"+"The number is odd");
}
// --------------------------------------------
// Program 3 : Largest of 2 numbers
// --------------------------------------------
let no1 = Number(prompt("Enter the first number"));
let no2 = Number(prompt("Enter the Second number"));
document.write("<h2>Program 3: largest of two numbers</h2>"+"<br>");
if(no1>no2){
    document.write("no1 is greater");
}
else if(no2>no1){
    document.write("no2 is greater");
}
else {
    document.write("Both are equal");
}
// --------------------------------------------
// Program 4 : Largest of 3 numbers
// --------------------------------------------
let number4 = Number(prompt("Enter a number4"));
let number5 = Number(prompt("Enter a number5"));
let number6 = Number(prompt("Enter a number6"));
document.write ("<h2>Program 4: Largest of 3 numbers</h2>");
if(number4>number5 && number4>number6){
    document.write("number4 is Large number");
}
else if(number5>number4 && number5>number6){
    document.write("number5 is Large number");
}
else if(number6>number4 && number6>number5){
    document.write("Number6 is Large value");
}
else{
    document.write("Some numbers are equal");
}
// --------------------------------------------
// Program 5 : check the student is pass or Fail
// --------------------------------------------
let marks = Number(prompt("Enter the student marks"));
document.write("<h2>Program 5 : Pass/ Fail</h2>");
if(marks>=35){
    document.write("<br>"+"PASS");
}
else{
    document.write("<br>"+"FAIL");
}
// --------------------------------------------
// Program 6 : Grade Calculator 
// --------------------------------------------
let studentMarks = Number(prompt("Enter the student marks"));
document.write("<h2>Program 6: grade of the student</h2>");
if(studentMarks>=90 && studentMarks<=100){
    document.write("<br>"+"A+");
}
else if(studentMarks>=75 && studentMarks<=90 ){
    document.write("<br>"+"A");
}
else if(studentMarks>=50 && studentMarks<=75 ){
    document.write("<br>"+"B");
}
else {
    document.write("<br>"+"C");
}

// --------------------------------------------
// Program 7 : Leap Year Checker
// --------------------------------------------
let year = Number(prompt("Enter a year"));
document.write("<h2>Program 7: Leap Year Checker</h2>");
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    document.write(year + " is a Leap Year");
}
else {
    document.write(year + " is not a Leap Year");
}
// --------------------------------------------
// Program 8 : Student Exam Eligibility
// --------------------------------------------
let studentMarks1 = Number(prompt("Enter your marks"));
let attendance = Number(prompt("Enter your attendance percentage"));
document.write("<h2>Program 8: Student Exam Eligibility</h2>");
if (studentMarks1 >= 35) {
    if (attendance >= 75) {
        document.write("You are Eligible to write the Exam");
    }
    else {
        document.write("You are Not Eligible due to Low Attendance");
    }
}
else {
    document.write("You are Not Eligible because you have Failed");
}
// --------------------------------------------
// Program 9 : Login Validation
// --------------------------------------------
let USERNAME = prompt("Enter your Name");
let Password = prompt("Enter your password");
document.write("<h2>Program 9: Login Validation</h2>");
if (USERNAME ==="Lavanya") {
    if (Password === "kavana") {
        document.write("Successfull login");
    }
    else {
        document.write("Incorrect password");
    }
}
else {
    document.write("wrong username");
}
document.write("<h1>Switch cases</h1>");
// --------------------------------------------
// Program 10 : Simple Calculator using Switch Case
// --------------------------------------------
let number1 = Number(prompt("Enter the First Number"));
let number2 = Number(prompt("Enter the second number"));
let operator = prompt("Enter the operator +/-/%");
document.write("<h2>Program 10: Switch Cases </h2>");
switch(operator){
    case "+":
        document.write("addition:"+(number1+number2));
        break;
    case "-":
        document.write("subtraction:"+(number1-number2));
        break;
    default:
        document.write("Invalid operator");
}
// --------------------------------------------
// Program 11: daynumber of a week
// --------------------------------------------
let dayNumber =Number(prompt("Enter the numebr of the day"));
document.write("<h2>Day number of the day</h2>");
switch(dayNumber){
    case 1 :
        document.write("Monday");
        break;
    case 2 :
        document.write("Tuesday");
        break;
    case 3 :
        document.write("Wednesday");
        break;
    case 4 :
        document.write("Thursday");
        break;
    default:
        document.write("No day Exist");
}
// --------------------------------------------
// Program 12 : Month Name using Switch Case
// --------------------------------------------
let monthNumber = Number(prompt("Enter a number from 1 to 12"));
document.write("<h2>Program 12: Month Name</h2>");
switch (monthNumber) {
    case 1:
        document.write("January");
        break;
    case 2:
        document.write("February");
        break;
    case 3:
        document.write("March");
        break;
    case 4:
        document.write("April");
        break;
    case 5:
        document.write("May");
        break;
    case 6:
        document.write("June");
        break;
    case 7:
        document.write("July");
        break;
    case 8:
        document.write("August");
        break;
    case 9:
        document.write("September");
        break;
    case 10:
        document.write("October");
        break;
    case 11:
        document.write("November");
        break;
    case 12:
        document.write("December");
        break;
    default:
        document.write("Invalid Input! Please enter a number between 1 and 12.");
}
// --------------------------------------------
// Program 13 : Print Numbers from 1 to 10
// --------------------------------------------
document.write("<h2>Program 13: Numbers from 1 to 10</h2>");
for ( let i =0; i<=10; i++){
    document.write(i+"<br>");
}
// --------------------------------------------
// Program 14 : Print Numbers from 10 to 1
// --------------------------------------------
document.write("<h2>Program 14: Numbers from 10 to 1</h2>");
for ( let i =10; i>=1; i--){
    document.write(i+"<br>");
}
// --------------------------------------------
// Program 15 : Print even numbers from 1 to 20
// --------------------------------------------
document.write("<h2>Program 15: Even Numbers from 1 to 20</h2>");
for ( let i =1; i<=20; i++)
    {
        if(i%2===0)
            {
            document.write(i+"<br>");
        }
}
// --------------------------------------------
// Program 16 : Print odd numbers from 1 to 20
// --------------------------------------------
document.write("<h2>Program 15: odd Numbers from 1 to 20</h2>");
for ( let i =1; i<=20; i++)
    {
        if(i%2!=0)
            {
            document.write(i+"<br>");
        }
}
// --------------------------------------------
// Program 17 : Sum of numbers using for loop
// --------------------------------------------
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
document.write("Sum =", sum);
// --------------------------------------------
// Program 18 : While loop simple example print numbers from 1 to 10
// --------------------------------------------
document.write("<h2>while loop</h2>");
document.write("<h3>Program 18: print numbers from 1 to 10</h3>");
let i = 1;
while (i <= 10) {
    document.write(i + "<br>");
    i++;
}
// --------------------------------------------
// Program 19 : Reverse of numbers 
// --------------------------------------------
document.write("<h3>Program 19: Reverse of numbers</h3>");
let number = Number(prompt("Enter the number to be reversed"));
let reverse =0;
while(number>0){
    let digit = number% 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}
document.write("Reverse = " + reverse);
// --------------------------------------------
// Program 20 : Count number of digits  
// --------------------------------------------
document.write("<h3>Program 20: count number of digits</h3>");
let no = Number(prompt("Enter the number"));
let count =0;
while (no > 0) {
    no= Math.floor(no / 10);
    count++;
}
document.write("numbers:"+count);*/
// --------------------------------------------
// Program 21 : Sum of digits   
// --------------------------------------------
let number1 = Number(prompt("Enter a number"));
let sum = 0;
while (number1 > 0) {
    let digit = number1 % 10;
    sum = sum + digit;
    number1 = Math.floor(number1 / 10);
}
document.write("Sum of digits = " + sum);
// --------------------------------------------
// Program 22 : Check whether the number is prime 
// --------------------------------------------
let number = Number(prompt("Enter a number"+"<br>"));
let i = 2;
let isPrime = true;
while (i < number) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
if (isPrime) {
    document.write("<br>"+number + " is a Prime Number");
} else {
    document.write("<br>"+number + " is Not a Prime Number");
}