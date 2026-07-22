// ============================================
// JavaScript Fundamentals
// ============================================
// --------------------------------------------
// 1. Output Methods
// --------------------------------------------
console.log("Lavanyamd"); //browser sonsole
alert("branch"); //popup
document.write("computer science <br>"); //on the web page 
// --------------------------------------------
// 2. Variable and DataTypes
// --------------------------------------------
let name = "Lavanya md "; //variale declaration
let branch = "CSE";
let semester = 5;
let city = "Davanagere";
console.log(name); 
alert(branch);
document.write(city+"<br>");
console.log(typeof(name)); //datatype identification
alert(typeof(semester));
document.write(typeof(city)+"<br>");
let isStudent = true;  
console.log(typeof isStudent);
var data ="Lavanya";  //before 2015 js only has var declaration 
data ="Chandu";   //we can change it
console.log(data);
let age = 24; // used most and can be changed 
alert(age);
const state = "karnataka"; //cann't be changed 
console.log(state);
// --------------------------------------------
// 3. Arithmetic operataros
// --------------------------------------------
let a = 5;
let b = 4;
let sum = a+b; 
document.write("Addition = " + sum + "<br>");
document.write("Subtraction = " + (a - b) + "<br>");
document.write("Multiplication = " + (a * b) + "<br>");
document.write("Division = " + (a / b) + "<br>");
document.write("Remainder = " + (a % b) + "<br>");
document.write("Power = " + (a ** b) + "<br>");
// --------------------------------------------
// 4. Comparison Operators
// --------------------------------------------
let c = 4;
let d = 4;
document.write( "EqualTo = " +(c==d) +"<br>" );
document.write( "NotEqualto="+(c!=d)+"<br>");
document.write( "strictlyequalto="+(c===d) +"<br>");
document.write( "greatertan="+(c>d )+"<br>");
document.write("smallerthan="+(c<d)+"<br>");
document.write((c>=d)+"<br>");
document.write((c<=d) +"<br>");
// --------------------------------------------
// 5. Assignment operators
// --------------------------------------------
let marks = 50;
document.write("Initial Marks = " +marks + "<br>");
marks += 10;
document.write("After+= 10:"+marks +"<br>");
marks -= 5;
document.write("After-= 5:"+marks+"<br>");
marks*= 2;
document.write("After*= 2:"+marks+"<br>");
marks/= 5;
document.write("After/= 5:"+marks+"<br>");
marks%=3;
document.write("After%= 3:"+ marks +"<br>");
// --------------------------------------------
// 6. Logical operators
// --------------------------------------------
let mark =80; 
let attendance = 90;
document.write("AND = "+ (mark >= 35 && attendance >= 75) + "<br>");
document.write("OR = " + (mark >= 35 || attendance >= 75) + "<br>");
let isHoliday = false;
document.write("NOT = "+ (!isHoliday) +"<br>");
// --------------------------------------------
// 7. Input
// --------------------------------------------
let course = prompt("Enter your course");
document.write(course);
let m = Number(prompt("Enter first number"));
let n = Number(prompt("Enter second number"));
let added = m + n;
document.write("added = " + added+"<br>");
// ============================================
// Example Programs 
// ============================================
// --------------------------------------------
// Program 1 Student Details
// --------------------------------------------
let Name = prompt("Enter your Name ");
let usn = prompt("Enter your valid USN");
let Semester = Number(prompt("Enter your present semester"));
let College= prompt("Enter your college");
document.write("<h2>1.Student Details</h2>"+"<br>")
document.write("Name :"+ Name +"<br>");
document.write("USN:"+usn+"<br>");
document.write("SEM:"+Semester+"<br>");
document.write("College:"+College+"<br>");
// --------------------------------------------
// Program 2 : Add Two Numbers
// --------------------------------------------
let firstNumber = Number(prompt("Enter First Number"));
let secondNumber = Number(prompt("Enter second Number"));
let Total = firstNumber + secondNumber;
document.write("<h2>2.Addition of two numbers</h2>"+"<br>");
document.write("value 1:"+firstNumber+"<br>");
document.write("value 2:"+secondNumber+"<br>");
document.write("Total of both Values:"+Total+"<br>");
// --------------------------------------------
// Program 3 : Subtraction of Two Numbers
// --------------------------------------------
let firstNumber1 = Number(prompt("Enter First Number"));
let secondNumber1 = Number(prompt("Enter second Number"));
let Result = firstNumber1 - secondNumber1;
document.write("<h2>3.Substraction of two numbers</h2>"+"<br>");
document.write("value 1:"+firstNumber1+"<br>");
document.write("value 2:"+secondNumber1+"<br>");
document.write(" result:"+Result+"<br>");
// --------------------------------------------
// Program 4 : Multiplication of Two Numbers
// --------------------------------------------
let firstValue = Number(prompt("Enter First Number"));
let secondValue = Number(prompt("Enter second Number"));
let result = firstValue * secondValue;
document.write("<h2>4.Multiplication of two values</h2>"+"<br>");
document.write("value 1:"+firstValue+"<br>");
document.write("value 2:"+secondValue+"<br>");
document.write(" result:"+result+"<br>");
// --------------------------------------------
// Program 5 : Division of Two Numbers
// --------------------------------------------
let firstvalue = Number(prompt("Enter First Number"));
let secondvalue = Number(prompt("Enter Second Number"));
let quotient = firstvalue / secondvalue;
document.write("<h2>Program 5 : Division of Two Numbers</h2>");
document.write("First Number : " + firstvalue + "<br>");
document.write("Second Number : " + secondvalue + "<br>");
document.write("Quotient : " + quotient + "<br>");
// --------------------------------------------
// Program 6 : Find Remainder
// --------------------------------------------
let firstValue1 = Number(prompt("Enter First Number"));
let secondValue1 = Number(prompt("Enter Second Number"));
let remainder = firstValue1 % secondValue1;
document.write("<h2>Program 6 : Find Remainder</h2>");
document.write("First Number : " + firstValue1 + "<br>");
document.write("Second Number : " + secondValue1 + "<br>");
document.write("Remainder : " + remainder + "<br>");
// --------------------------------------------
// Program 7 : Square of a Number
// --------------------------------------------
let number = Number(prompt("Enter a Number"));
let square = number * number;
document.write("<h2>Program 7 : Square of a Number</h2>");
document.write("Number : " + number + "<br>");
document.write("Square : " + square + "<br>");
// --------------------------------------------
// Program 8 : Cube of a Number
// --------------------------------------------
let numberA = Number(prompt("Enter a number"));
let cube = numberA*numberA*numberA;
document.write("<h2>Program 8: Cube of a Number</h2>");
document.write("Number:"+numberA+"<br>");
document.write("Cube:"+cube+"<br>");
// --------------------------------------------
// Program 9: Swap Two Nubers
// --------------------------------------------
let firstNo= Number(prompt("Enter the value"));
let secondNo = Number(prompt("Enter Second value"));
document.write("<h2>Program 9: swapping of Two Numbers");
document.write("<h3>Before Swapping</h3>");
document.write("FirstNumber:"+firstNo+"<br>");
document.write("SecondNumber:"+secondNo+"<br>");
let temp = firstNo;
firstNo = secondNo;
secondNo = temp;
document.write("<h3>after Swapping</h3>");
document.write("FirstNumber:"+firstNo+"<br>");
document.write("secondNumber:"+secondNo+"<br>");
// --------------------------------------------
// Program 10 : Area of Rectangle
// --------------------------------------------
let length = Number (prompt("Enter length of the rectangle"));
let breadth = Number(prompt("Enter the Breadth of the rectangle"));
let area = length*breadth;
document.write("<h2>Program 10: Area of the rectangle</h2>");
document.write("Length:"+length+"<br>");
document.write("breadth:"+breadth+"<br>");
document.write("Area:"+area+"<br>");
// --------------------------------------------
// Program 11 : Perimeter of Rectangle
// --------------------------------------------
let length1 = Number(prompt("Enter Length of Rectangle"));
let breadth1 = Number(prompt("Enter Breadth of Rectangle"));
let perimeter = 2 * (length1 + breadth1);
document.write("<h2>Program 11 : Perimeter of Rectangle</h2>");
document.write("Length : " + length1 + "<br>");
document.write("Breadth : " + breadth1 + "<br>");
document.write("Perimeter : " + perimeter + "<br>");
// --------------------------------------------
// Program 12 : Area of Circle
// --------------------------------------------
let radius = Number(prompt("Enter Radius of the Circle"));
let areaOfCircle = 3.14 * radius * radius;
document.write("<h2>Program 12 : Area of Circle</h2>");
document.write("Radius : " + radius + "<br>");
document.write("Area of Circle : " + areaOfCircle + "<br>");
// --------------------------------------------
// Program 13 : Simple Interest Calculator
// --------------------------------------------
let principal = Number(prompt("Enter Principal Amount"));
let rate = Number(prompt("Enter Rate of Interest"));
let time = Number(prompt("Enter Time (in Years)"));
let simpleInterest = (principal * rate * time) / 100;
document.write("<h2>Program 13 : Simple Interest Calculator</h2>");
document.write("Principal Amount : " + principal + "<br>");
document.write("Rate of Interest : " + rate + "%<br>");
document.write("Time : " + time + " Years<br>");
document.write("Simple Interest : " + simpleInterest + "<br>");
// --------------------------------------------
// Program 14 : Average of Three Numbers
// --------------------------------------------
let no1 = Number(prompt("Enter the First no"));
let no2 = Number(prompt("Enter the second no"));
let no3 =Number (prompt("Enter the third no"));
let avg = (no1+no2+no3)/3;
document.write("<h2>Program 14: Average of 3 numbers</h2>");
document.write("Number1:"+no1+"<br>");
document.write("Number2:"+no2+"<br>");
document.write("Number3:"+no3+"<br>");
document.write("Avg:"+avg+"<br>");
// --------------------------------------------
// Program 15 : Celsius to Fahrenheit
// --------------------------------------------
let celsius = Number(prompt("Enter Temperature in Celsius"));
let fahrenheit = (celsius * 9 / 5) + 32;
document.write("<h2>Program 15 : Celsius to Fahrenheit</h2>");
document.write("Celsius : " + celsius + "°C<br>");
document.write("Fahrenheit : " + fahrenheit + "°F<br>");
// --------------------------------------------
// Program 16 : Fahrenheit to Celsius
// --------------------------------------------
let fahrenheit1 = Number(prompt("Enter Temperature in Fahrenheit"));
let celsius1 = (fahrenheit1 - 32) * 5 / 9;
document.write("<h2>Program 16 : Fahrenheit to Celsius</h2>");
document.write("Fahrenheit : " + fahrenheit1 + "°F<br>");
document.write("Celsius : " + celsius1 + "°C<br>");
// --------------------------------------------
// Program 17 : Age Calculator
// --------------------------------------------
let birthYear = Number(prompt("Enter the birth year"));
let currentYear = Number(prompt("Enter the Currentyear"));
let age = currentYear - birthYear;
document.write("<h2>Program 17 : Age calculator</h2>");
document.write("birthyear :"+birthYear + "<br>");
document.write("currentyear: " + currentYear + "<br>");
document.write("Age :"+ age + "<br>");
// --------------------------------------------
// Program 18 : BMI Calculator
// --------------------------------------------
let weight = Number(prompt("Enter your Weight in kg"));
let height = Number(prompt("Enter your Height in meters"));
let bmi = weight / (height * height);
document.write("<h2>Program 18 : BMI Calculator</h2>");
document.write("Weight : " + weight + " kg<br>");
document.write("Height : " + height + " m<br>");
document.write("BMI : " + bmi + "<br>");
// --------------------------------------------
// Program 19 : Electricity Bill Calculator
// --------------------------------------------
let units = Number(prompt("Enter the units "));
let bill;
if(units<=100){
    bill = units*5;
}
else if(units<=200){
    bill = units*7;
}
else{
    bill=units*10;
}
document.write("<h2>Program 19 : Electricity Bill Calculator</h2>");
document.write("unit : " + units + " <br>");
document.write("bill : " + bill + " <br>");
// --------------------------------------------
// Program 20 : Student Grade Calculator
// --------------------------------------------
let subject1 = Number(prompt("Enter marks for Subject 1"));
let subject2 = Number(prompt("Enter marks for Subject 2"));
let subject3 = Number(prompt("Enter marks for Subject 3"));
let subject4 = Number(prompt("Enter marks for Subject 4"));
let subject5 = Number(prompt("Enter marks for Subject 5"));
let total = subject1 + subject2 + subject3 + subject4 + subject5;
let average = total / 5;
let grade;
if (average >= 90) {
    grade = "A+";
}
else if (average >= 80) {
    grade = "A";
}
else if (average >= 70) {
    grade = "B";
}
else if (average >= 60) {
    grade = "C";
}
else if (average >= 50) {
    grade = "D";
}
else {
    grade = "F";
}
document.write("<h2>Program 20 : Student Grade Calculator</h2>");
document.write("Subject 1 : " + subject1 + "<br>");
document.write("Subject 2 : " + subject2 + "<br>");
document.write("Subject 3 : " + subject3 + "<br>");
document.write("Subject 4 : " + subject4 + "<br>");
document.write("Subject 5 : " + subject5 + "<br>");
document.write("Total Marks : " + total + "<br>");
document.write("Average : " + average.toFixed(2) + "<br>");
document.write("Grade : " + grade + "<br>");
