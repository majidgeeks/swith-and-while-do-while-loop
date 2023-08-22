// SWITCH	STATEMENTS
// AND
// WHILE… DO-WHILE	LOOPS

// 1. Write a switch statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// let age = prompt("type your age");

// switch (true){
//     case age > 18 :
//         console.log("too old");
//         break;
//     default :
//        console.log("too young");
//         break;
// };

//=========================================================================

// 2. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

// let num = +prompt("type number to check divisible by 3 or not");

// switch(true){
//     case num % 3 == 0:
//         console.log("it is divisible by 3");
//         break;
//     default :
//         console.log("it is not divisible by 3");
//         break;
// };

//=========================================================================

// 3. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)

// let num1 = +prompt("type first num here");
// let num2 = +prompt("type second num here");
// let operator = prompt("type operater here exmple + - * /");
// let h1 = document.querySelectorAll("h1")[0];

// switch(operator){
//     case "+":
//         h1.innerHTML = num1 + num2;
//     break;

//     case "-":
//         h1.innerHTML = num1 - num2;
//     break;

//     case "*":
//         h1.innerHTML = num1 * num2;
//     break;

//     case "/":
//         h1.innerHTML = num1 / num2;
//     break;

//     default :
//         h1.innerHTML = "plz select only numbers and only operates + - * /";
//     break;
// };

//=========================================================================

// 4. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 …).
// Use the weekday number to calculate weekday name.

// let d = new Date();
// let h1 = document.querySelectorAll("h1")[0];

// switch (d.getDay()){
//     case 0 :
//         h1.innerHTML = "sunday";
//     break;

//     case 1 :
//         h1.innerHTML = "monday";
//     break;

//     case 2 :
//         h1.innerHTML = "tuesday";
//     break;

//     case 3 :
//         h1.innerHTML = "wednesday"
//     break;

//     case 4 :
//         h1.innerHTML = "thursday";
//     break;

//     case 5 :
//         h1.innerHTML = "friday";
//     break;

//     case 6 :
//         h1.innerHTML = "saturday";
//     break;

//     default :
//        h1.innerHTML = "plz type num from 0 to 6";

// };

//=========================================================================

// 6.Given the following script
// function checkCar() {
//  var text;
//  var favCar = prompt("What is your favorite
// car?");
//  switch(favCar) {
//  //Add code here
//  }
//  document.write( text);
// }
// checkCar();
// Finish the switch statement. Add the following
// cases: BMW, Ford and Peugeot.
// Set the value of the variable text to: "German car" for BMW.
// "American car" for Ford. "French car" for Peugeot.
// Also add a default case where the text value is "Unknown car
// name".

//ANS

// let h1 = document.querySelectorAll("h1")[0];

// function checkCar() {

//  var favCar = prompt("");

//  switch(favCar) {
//     case ("bmw"):
//       h1.innerHTML = "German car";
//     break;

//     case ("ford"):
//       h1.innerHTML = "american car";
//     break;

//     case ("peugeot"):
//       h1.innerHTML = "french car";
//     break;

//     default:
//         h1.innerHTML = "please enter valid car name"

//  }

// };

// checkCar()

//++++==========================+++++++++++++++++++++=================+++++++++++++
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 7. Fix the following switch statement:
// function checkFruit() {
//  var text;
//  var fruits = prompt("Enter a fruit name");
//  switch(fruits) {
//  case "Banana"
//  text = "Banana is good!";
//  case "Orange"
//  text = "I am not a fan of orange.";
//  case "Apple"
//  text = "How you like them apples?";
    // default :
//  text = "I have never heard of that
// fruit.";
//  }
//  document.write( text);
// }
// checkFruit();

// let h1 = document.querySelectorAll("h1")[0];

// function checkFruit() {
//  var text;
//  var fruits = prompt("Enter a fruit name").toLowerCase();
//  switch(fruits) {
//  case "banana":
//  text = "Banana is good!";
//  break;
//  case "orange":
//  text = "I am not a fan of orange.";
//  break;
//  case "apple":
//  text = "How you like them apples?";
//  break;
//  default:
//  text = "I have never heard of that fruit.";
//  break;
//  }
//  h1.innerHTML = text;
// };
// checkFruit();

//===========================================================================

// 8. Write a function that displays the marks range against a
// particular grade. For example, if grade is “B”, then print Marks [
// >= 60 and <70 ]

// function percentage() {
//   let grade = prompt("enter your grade here to know percentage");
//   let percent;
//   let h1 = document.querySelectorAll("h1")[0];

//   switch (grade) {
//     case "a":
//       percent = "your marks greater than 70 and less than 80";
//       break;

//     case "b":
//       percent = "your marks greater than 60 and less than 70";
//       break;

//     case "c":
//       percent = "your marks greater than 50 and less than 60";
//       break;

//       case "d":
//         percent = "your marks greater than 40 and less than 50";
//         break;

//      default:
//         percent = "fail";
//   }
// h1.innerHTML = percent;

// };

// percentage();

//++++==========================================================================

// 9. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:

// function monthNum() {
//   let user = +prompt("type the number of month will tell u the name of month");
//   let month;
//   let h1 = document.querySelectorAll("h1")[0];

//   switch (user) {
//     case 1:
//       month = "January";
//       break;

//     case 2:
//       month = "February";
//       break;

//     case 3:
//       month = "March";
//       break;

//     case 4:
//       month = "April";
//       break;

//     case 5:
//       month = "May";
//       break;

//     case 6:
//       month = "June";
//       break;

//     case 7:
//       month = "July";
//       break;

//     case 8:
//       month = "August";
//       break;

//     case 9:
//       month = "september";
//       break;

//     case 10:
//       month = "October";
//       break;

//     case 11:
//       month = "November";
//       break;

//     case 12:
//       month = "December";
//       break;

//     default:
//       month = "plz enter number from 1 to 12";
//       break;
//   }

//   h1.innerHTML = month;
// };

// monthNum();

//+++++++++=============================+++++++++++++++++++++==================

// 10. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

// let age = prompt("type your age");

// document.write(age > 15 && age < 25? 'too young' : "too old");
// document.write(age < 18 ? 'too young' : "too old");

//==============================================================================

// DO	THE	FOLLOWING	EXERCISES	USING
// WHILE	&	DO-WHILE	LOOPS:

// 11. Write a program to display the message “Hello World” 5
// times in your browser.

//with while loop

// let h1 = document.querySelectorAll("h1")[0];
// let text;
// let i = 0;
// while (i < 5){
//   h1.innerHTML = h1.innerHTML + "hello world" + "<br>";
//   i++;

// };

//==========================================================================

// same with do - while loop

// var i = 0;
// do{
//     document.write( i + " Hello world" + "<br>");
//     i++;
// }
// while(i <= 4);


//============================================================================

// 12. Write a program to print numeric counting from 1 to 10.

// let h1 = document.querySelectorAll("h1")[0];

// let i = 1;

// while(i < 11){
//   h1.innerHTML = h1.innerHTML + i;
//   i++;

// };

//==============================================================================

// same with do - while loop

// var i = 1;
// do{
//     document.write(i + "<br>");
//     i++;
// }
// while(i <= 10);

//+=======================================================================

// 13. Write a program to print multiplication table of any number
// using. Table number & length should be taken as an input from
// user.

// let h = document.querySelectorAll("h1")[0];
// let user = +prompt("type number of which table u want");
// let end = +prompt("type the num where u want to stop table");

// let i = 1;

// while(i <= end){
//     h.innerHTML = h.innerHTML + user +"x" + i  + "=" + user * [i] + "<br>";
//     i++;
// }

//===============================================================================
//same with do - while loop.


// let user = +prompt("type number of which table u want");
// let end = +prompt("type the num where u want to stop table");

// var i = 1;
// do{
//     document.write (user + "x" + i + "=" + user * i + "<br");
//     i++;
// }
// while(i <= end);


//==============================================================================

// 14. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line.

// let mobile = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// let h1 = document.querySelectorAll("h1")[0];
// let i = 0;

// while (i < mobile.length){
//   h1.innerHTML = h1.innerHTML + mobile[i] + "<br>";
//   i++;
// };

///======================================================================///////
//same with do - while loop.


// let mobile = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// let h = document.querySelectorAll("h1")[0];

// let i = 0;
// do{
//     h.innerHTML += mobile[i] + "<br>";
//     i++;

// }
// while(i < mobile.length);


//=================================================================================

// 15. Write a program to print items of the following array:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// let h1 = document.querySelectorAll("h1")[0];
// let i = 0;

// while (i < fruits.length){
//    h1.innerHTML = h1.innerHTML + fruits[i] + "<br>";
//    i++;

// };

//============================================================================
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//same with do-while loop.


// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// let h = document.querySelectorAll("h1")[0];

// let i = 0;
// do{
//     h.innerHTML += fruits[i] + "<br>";
//     i++;
// }
// while(i < fruits.length);


//===========================================================================

// 16. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// let itemNumber = prompt("type number of items");
// let arrItems = [];

// let h1 = document.querySelectorAll("h1")[0];

// let i = 0;

// while(i <= itemNumber){
//     let itemName = prompt("type items name to add"+ (i+1) +":" );
//         arrItems.push(itemName);
//         i++;

// }

// var joinArr = arrItems.join(" ");
// h1.innerHTML = joinArr;

//==============================================================================

// same in do- while loop.


// let itemNumber = prompt("type number of items");
// let arrItems = [];

// let h = document.querySelectorAll("h1")[0];

// let i = 0;
// do{
//     var itemName = prompt("type item names to add" + (i + 1) + ":");
//     arrItems.push(itemName);
//     i++;

// }
// while(i < itemNumber);


// var joinArr = arrItems.join(" ");
// h.innerHTML += "number of items : " + itemNumber + "<br>" + joinArr ; 



//========================================================================

// 17. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//A
// let h1 = document.querySelectorAll("h1")[0];
// let i = 1;

// while (i <= 15){
//     h1.innerHTML = h1.innerHTML + i + ",";
//     i++;
// };

//B

// let i = 10;

// while (i >= 1){
//     h1.innerHTML = h1.innerHTML + i + ",";
//     i--;
// };

//C even numbers

// let i = 0;

// while (i <= 20){
//     h1.innerHTML = h1.innerHTML + i + ",";
//     i = i + 2;
// };

//D odd numbers

// let i = 1;

// while (i <= 19){
//     h1.innerHTML = h1.innerHTML + i + ",";
//     i = i + 2;
// };

//E

// let i = 2;

// while (i <= 20){
//     h1.innerHTML = h1.innerHTML + i + "k" + " , ";
//     i = i + 2;
// };

//===========================================================================


// 17. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//same with do-while loop.
//A:

// let i = 1;
// do{
//     document.write(i + "<br>")
//     i++;
// }
// while(i < 16);

//B:

// let i = 10;
// do{
//     document.write(i + "<br>");
//     i--;
// }
// while(i > 0);

//C:

// let i = 0;
// do{
//     document.write(i + " ,");
//     i += 2;
// }
// while(i < 21);

//D:

// let i = 1;
// do{
//     document.write(i + " ,");
//     i += 2;
// }
// while(i < 20);

//E:

// let i = 2;
// do{
//     document.write(i + "k" + " , ");
//     i += 2;
// }
// while(i < 21);

//============================================================================

// 18. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];

// let user = prompt("type item names to check");

// for(var i = 0; i < bakeryItem.length; i++){
//    if(user === bakeryItem[i]){
//      alert("yes");
//      break;

//    }
//    else{
//     alert("no");
//     break;
//    }
// };

//     let i = 0;

//     while (i < bakeryItem.length) {
//           i++;
//     };

//   switch (user) {
//     case  bakeryItem[i]:
//       alert("yes it is available");
//       break;

//     default:
//       alert(" it is not available");
//       break;
//   }

//=============================================================================


// 19. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your
// browser using JS.

// solution with switch case

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// //getting table element
// var table = document.querySelectorAll("#table")[0];

// // create table header
// var headerRow = document.createElement("tr");
// // headerRow.setAttribute("class", "header-Row");

// var th1 = document.createElement("th");
// th1.textContent = "Students";
// // th1.setAttribute("class", "header-Row");

// var th2 = document.createElement("th");
// th2.textContent = "Scores";

// headerRow.appendChild(th1);
// headerRow.appendChild(th2);

// table.appendChild(headerRow);

// create table rows using switch statement

// for(var i = 0; i < students.length; i++){
//   var row = document.createElement("tr");
// //   row.setAttribute("class", "header-Row");
//   var cell1 = document.createElement("td");
// //  cell1.setAttribute("class", "header-Row");
//   var cell2 = document.createElement("td");
// //  cell2.setAttribute("class", "header-Row");

// switch (i) {
//     case 0 :
//         cell1.textContent = students[i];
//         cell2.textContent = scores[i];
//         row.appendChild(cell1);
//         row.appendChild(cell2);
//         break;

//         case 1 :
//         cell1.textContent = students[i];
//         cell2.textContent = scores[i];
//         row.appendChild(cell1);
//         row.appendChild(cell2);
//         break;

//         case 2 :
//         cell1.textContent = students[i];
//         cell2.textContent = scores[i];
//         row.appendChild(cell1);
//         row.appendChild(cell2);
//         break;

//         case 3 :
//         cell1.textContent = students[i];
//         cell2.textContent = scores[i];
//         row.appendChild(cell1);
//         row.appendChild(cell2);
//         break;

//         default :
//         break;
// }

// table.appendChild(row);

// };

// with while loop

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// // getting table element
// var table = document.querySelectorAll("#table")[0];

// //creating header rows
// var headerRow = document.createElement("tr");

// var th1 = document.createElement("th");
// th1.textContent = "Students";

// var th2 = document.createElement("th");
// th2.textContent = "Scores";

// headerRow.appendChild(th1);
// headerRow.appendChild(th2);
// table.appendChild(headerRow)

// // create table rows using while loop

// var i = 0;
// while(i < students.length){
//    var row = document.createElement("tr");
//    var cell1 = document.createElement("td");
//    cell1.textContent = students[i];

//    var cell2 = document.createElement("td");
//    cell2.textContent = scores[i];

//    row.appendChild(cell1);
//    row.appendChild(cell2);
//    table.appendChild(row);
//    i++;

// };

// solution by do-while loop

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

//get table element

// var table = document.querySelectorAll("#table")[0];

// creating header elements

// var headerRow = document.createElement("tr");

// var th1 = document.createElement("th");
// th1.textContent = "Students";

// var th2 = document.createElement("th");
// th2.textContent = "Scores";

// headerRow.appendChild(th1);
// headerRow.appendChild(th2);

// table.appendChild(headerRow);

// var i = 0;
// do {
//     var row = document.createElement("tr");
//     var cell1 = document.createElement("td");
//     cell1.textContent = students[i];

//     var cell2 = document.createElement("td");
//     cell2.textContent = scores[i];

//     row.appendChild(cell1);
//     row.appendChild(cell2);

//     table.appendChild(row);
//     i++;
// }
// while(i < students.length);

//==============================================================================

// 20. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34

// equation with for loop

// let scores = [12, 45, 3, 22, 34, 50];

// let stopArr = +prompt("type number where u want to stop");

// for(var i = 0; i < scores.length; i++){
//     if(scores[i] === stopArr){
//         break;
//     }
//     console.log(scores[i]);
// }


// equation with while loop

// let i = 0;

// while (i < scores.length){
//    if(scores[i] === stopArr){
//     break;

//    }
//   i++;

//   document.write(scores[i])
// };


// eqaution by do-while loop

// var scores = [12, 45, 3, 22, 34, 50];
// var stopArr = +prompt("plz write num where u want to stop");

// var i = 0;
// do{
//     if(scores[i] == stopArr){
//         break;
//     }
//     document.write(scores[i]);
//     i++;

// }
// while(i < scores.length);


//===============================================================================

// 21. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested loops.

// let arr = [ [1,2,3] , [4,5,6] , [7,8,9] ];

// for(let i = 0; i <= arr.length; i++){

//     for(let j = 0; j < arr[i].length; j++ ){
//         document.write(arr[i][j]);
//     }

// }

//=============================================================================

// 22. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.

// var h = document.querySelectorAll("h1")[0];
// var userNum = +prompt("write number here");

// solve equation by switch
// switch (true) {
//   case userNum <= 0:
//     h.innerHTML += "please write positive number";
//     break;

//   default:
//     while (userNum > 0) {
//       h.innerHTML += userNum + "<br>";
//       userNum -= 0.5;
//     }
// };

// solve equation by while loop
// var i = userNum;
// while (i > 0) {

//     h.innerHTML += [i] + "<br>";

//     i -= 0.5;
// }

// solve equation by for loop

// for(var i = userNum; i > 0;  i -= 0.5){
//     h.innerHTML += [i] + "<br>";
// };

// solve equation by do-while loop

// var i = userNum;
// do {

//     h.innerHTML += [i] + "<br>";
//     i -= 0.5;
// }
// while (i > 0);

//===============================================================================

// 23. The even/odd reporter
// Write a loop that will iterate from 0 to 20. For each iteration, it
// will check if the current number is even or odd, and report that
// to the screen (e.g. "2 is even").

// equation by for loop
// for(var i = 0; i <= 20; i++){
//    if(i % 2 === 0){
//     document.write(i + " is even " + "<br>");
//    }
//    else{
//     document.write(i + " is odd " + "<br>");
//    }
// };

// equation by while loop
// var h = document.querySelectorAll("h1")[0];

// var i = 0;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     h.innerHTML += i + " is even number " + "<br>";
//   } else {
//     h.innerHTML += i + " is odd number " + "<br>";
//   }
//   i++;
// };

// equation by do-while loop
// var h = document.querySelectorAll("h1")[0];

// var i = 0;
// do{
//     if(i % 2 === 0){
//         h.innerHTML += i + " is even number " + "<br>";
//     }
//     else{
//         h.innerHTML += i + " is odd number " + "<br>";
//     }
//     i++;
// }
// while (i <= 20) ;

// equation by switch case
// var h = document.querySelectorAll("h1")[0];

// for(var i = 0; i <= 20; i++){
//     switch (true) {
//         case i % 2 === 0 :
//             h.innerHTML += i + " is even number " + "<br>";
//             break;
//             default :
//             h.innerHTML += i + " is odd number " + "<br>";
//     }

// };

//===============================================================================

// 24. Write a program to calculate the product of the odd integers
// from 1 to 7.

// // equation solved by for loop
// var product = 1;

// for(var i = 1; i <= 7; i += 2){

//    document.write( product *= i);
// };

//equation by while loop
// var product = 1;

// var i = 1;
// while (i <= 7) {
//     document.write( product *= i);
//     i += 2;
// };

// equation solve by do-while loop
// var product = 1;
// var i = 1;
// do{
//    document.write(product *= i);
//     i += 2;
// }
// while (i <= 7) ;

// equation solved by switch case

// var product = 1;

// for (i = 1; i <= 7; i++) {
//   switch (i) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//         product *= i;
//         break;
//         default :
//         break;
//   };
// };

// document.write(product);


//===============================================================================



// 25. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7
// *******
// ******
// *****
// ****
// ***
// **
// *


// equation solved by for loop

// for(var i = 1; i <= 7; i++){

//     for(var j = 7; j >= i; j--){

//         document.write("*");
//     }
//     document.write("<br>");
// };





// 26. Write a program to create the following patterns in your
// browser. Take number of lines as an input.
// a. *****
// *****
// *****
// *****
// b. *
// **
// ***
// ****
// *****
// c. *****
// ****
// ***
// **


// solve equatioin by for loop

//a
// for (var i = 1; i <= 4; i++){

//     for (var j = 0; j <= 4; j++){
//     document.write("*");
//     }
//     document.write("<br>")
// };


//b
// for(var i = 1; i <= 5; i++){

//     for(var j = 1; j <= i; j++){

//         document.write("*");
//     }
//     document.write("<br>");
// };


//c

// for(var i = 1; i <= 4; i++ ){

//     for(var j = 5; j >= i; j--){
//         document.write("*");
//     }
//     document.write("<br>");
// };
