// Chp 31-34

// Q1

// var date = new Date();
// document.write(date)

// Q2

// var arr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var date = new Date();
// var month = date.getMonth()
// document.write(arr[month])

// Q3

// var arr = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
// var date = new Date();
// var day = date.getDay();
// document.write(arr[day]);

// Q4

// var arr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
// var date = new Date();
// var day = date.getDay();

// if ("Sat" === arr[day] || "Sun" === arr[day]) {
//     document.write("It's Fun day");
// }
// else {
//     document.write("It's a normal day");
// }

// Q5

// var date = new Date();
// var date = date.getDate();

// if(date < 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last 2days of the month");
// }

// Q6

// var date = new Date();
// var milli = date.getTime();
// var minutes = milli / 1000 * 60;

// document.write("Current Date: " + date)
// document.write("<br>");
// document.write("Elapsed milliseconds since January 1,1970: " + milli)
// document.write("<br>");
// document.write("Elapsed minutes since January 1,1970: " + minutes)

// Q7

// var date = new Date();
// console.log(date)

// var time = date.getHours()

// console.log(time)

// if (time < 12 && time >= 0) {
//     document.write("It's AM")
// }
// else if (time >= 12 && time <= 23) {
//     document.write("It's PM")
// }

// Q8

// var date = new Date("December 31, 2022");
// document.write("Later date: " + date);

// Q9

// var date = new Date("June 18, 2015");
// var day = date.getTime()/( 1000 * 60 * 60 * 24 );
// document.write(Math.floor(day) + " days have passed since 1st Ramadan, 2015")

// Q10

// var date1 = new Date();
// var date2 = new Date("January 1, 2015");
// var milli = date1.getTime() - date2.getTime();
// var sec = milli / 1000;
// document.write("On reference date " + date1 + " " + Math.floor(sec) + " seconds had passed since beginning of 2015")

// Q11

// var date = new Date();
// var date1 = new Date();
// var hourAhead = date.getHours() - 1;
// date1.setHours(hourAhead);
// console.log(hourAhead)
// document.write("current date: " + date);
// document.write("<br>");
// document.write("1 hour ago, it was " + date1)

// Q12

// var date = new Date();
// var date1 = new Date();
// var yearAhead = date.getFullYear() - 100;
// date1.setFullYear(yearAhead);
// console.log(yearAhead)
// document.write("current date: " + date);
// document.write("<br>");
// document.write("100 year back, it was " + date1)

// Q13

// var user = +prompt("Enter your age");
// var date = new Date();
// var year = date.getFullYear() - user;
// document.write("Your age is " + user)
// document.write("<br>");
// document.write("Your birth year is " + year)

// Q14

// var name = "Ebad";
// var month = "July";
// var numberOfUnits = 410;
// var chargesPerUnits = 16;
// var netAmountPayable = numberOfUnits * chargesPerUnits;
// var late = 350;
// var grossAmountPayable = netAmountPayable + late;
// document.write("<h1>K-Electric  Bill</h1>")
// document.write("<br>");
// document.write("Customer Name: " + name);
// document.write("<br>");
// document.write("Month: " + month);
// document.write("<br>");
// document.write("Number of units: " + numberOfUnits);
// document.write("<br>");
// document.write("Charges per unit: " + chargesPerUnits);
// document.write("<br>");
// document.write("<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable);
// document.write("<br>");
// document.write("Late payment surcharge: " + late);
// document.write("<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);



















































