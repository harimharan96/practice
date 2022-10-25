// let a, b;

// function add(a, b) {
//   console.log(a + b);
// }
// function sub(a, b) {
//   console.log(a - b);
// }
// function mul(a, b) {
//   console.log(a * b);
// }
// function div(a, b) {
//   console.log(b / a);
// }

// add(10, 20);
// sub(10, 20);
// mul(10, 20);
// div(10, 20);

// function square(x) {
//     return x*x;
//   }

//   console.log(square(2))

// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();

//    let text = "Hari";
//    document.getElementById("first").innerHTML = text.length;

// let str = "The rain in spain stays mainly in the plain";
//    document.getElementById("first").innerHTML = str.match(/ain/g);

//    let text = `Hari
//    haran
//    is
//    a
//    intern`;
//    document.getElementById("first").innerHTML = text;

// let firstName = "Hari";
// let lastName = "haran";

// let text = `Welcome ${firstName}, ${lastName}!`;
//        document.getElementById("first").innerHTML = text;

// const fruits = [
//     "Apple",
//     "Grapes",
//     "Banana"
// ];
//            document.getElementById("first").innerHTML = fruits;
// const cars = [];
// cars[0] = "BMW";
// cars[1] = "volvo";
// cars[2] = "tata";
//                document.getElementById("first").innerHTML = cars;

// const fruit = ["apple", "orange", "banana"];
//                document.getElementById("first").innerHTML = ;

// const girls = ["Pavi", "Neha"];
// const boys = ["Akshay", "Mayur"];

// const team = girls.concat(boys);
//                document.getElementById("first").innerHTML = team;

// const fruit = ["apple", "orange", "banana"];
//                document.getElementById("first").innerHTML = fruit;

//                fruit.sort();
//                document.getElementById("first").innerHTML = fruit;

//                fruit.reverse();
//                document.getElementById("first").innerHTML = fruit;
//

// const ranks = [20, 30, 10, 5 , 55,25, 80, 2];
//                document.getElementById("first").innerHTML = ranks;

//                ranks.sort(function(a, b)
//                {return a - b});

//                document.getElementById("first").innerHTML = ranks;

// let number = [1,2,3,4,5,6,7,8];
// number.splice(-1,2);
// // console.log(number);
//                document.getElementById("first").innerHTML = number;
// const d  = new Date();

// const d = new Date(2018, 13, 24, 10, 33, 30, 0);

// const d = new Date (99, 11, 24)
// const d = new Date("2021");

//    document.getElementById("first").innerHTML = Math.round(4.4);

// if (new Date().getHours() < 20) {
//                    document.getElementById("first").innerHTML = "its is a good day!";

// }

// const hour = new Date().getHours();

// let greetings;

// if (hour < 15) {
//     greetings = "Good evening";
// }
// else if (hour < 16 ){
//     greetings = "Good Night"
// }
// else{
//     greetings = "Good Morning";

// }
//  document.getElementById("first").innerHTML = greetings;

// let day;
// switch (new Date().getDay()) {

//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Fridayy";
//         break;
//     case 6:
//         day = "Saturday";
//         break;

// }
//  document.getElementById("first").innerHTML = "Today is " + day;

// let gender;
// function verifyGender(gender) {
//     switch (gender) {
//         case "male":
//             console.log("its a boy");
//             break;
//         case "female":
//             console.log("its a girl");
//             break;
//     }
// }
// verifyGender("male");

// let text = "";
// for (let i = 1; i < 5; i++) {

//     text += "The Number is " + i + "<br>";
// }

// document.getElementById("first").innerHTML = text;

// let a=[1,2,3,4,5,6];
// let index=3;

// for(let i=index; i<a.length; i++){
//     b.push(a[i]);

// }
// for(let i=0; i<index; i++){
//     b.push(a[i])
// }
// console.log(b);

// let a=[1,2,3,4,5,6];
// let index=3;
// let b = a.splice(0, index);
// a = a.concat(b)
// console.log(a);

// let a={
//     name: "hari",
//     age: 26
// };
// let b={
//     name1: "raju",
//     age1: 28
// };
// let c={
//     ...a,
//     ...b
// }
// // let c= Object.assign(a,b)
// a.name="ravi"
// console.log(c);
// console.log(a);
// console.log(b);

//regEx

// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character

// console.log(/[0123456789]/.test("in 1992"));
// console.log(/[0-9]/.test("in 1992"));

// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime.test("22-9-2022 8:45"));

// let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour"));
// console.log(neighbor.test("neighbor"));

// let reg = /hari/; // This is a regular expression literal in js
// reg = /hari/g; // g means global
// reg = /hari/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source);

// let s = "This is great code with hari and also hari bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
// let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
// let result2 = reg.test(s);
// console.log(result2);

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
// let result3 = s.match(reg) // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
// let result4 = s.search(reg) // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

// let result5 = s.replace(reg, 'SHUBHAM');
// console.log(result5);

// let regex = /harsdfgy/;
// // Lets look into some metacharacter symbols
// regex = /^hardc/; // ^ means expression will match if string starts with
// regex = /hari$/; // $ at the end of the string means "string ends with"
// regex = /h.ri/; //matches any one character
// regex = /h*ri/; //matches any 0 or more characters
// regex = /ha?ri?t/; //? after character means that character is optional
// regex = /h\*ri/; //escape character

// let str = "h*ri means codewith"; //

// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }

// // Character Sets - We use []
// let regex = /h[a-z]rry/; // can be any character from a to z
// regex = /h[aty]rry/; // can be an a, t or y
// regex = /h[^aty]rry/; // cannot be any of a, t or y
// regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
// regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// // Quantifiers - We use {}
// regex = /har{2}y/; // r can occur exactly 2 times
// regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// // Groupings  - We use paranthesis for groupings ()
// regex = /(har){2}([0-9]r){3}/

// // const str = "hirry9 bhai";
// str = "harrry bhai"
// str = "harhar1r4r5r bhai";

// let result = regex.test(str);
// console.log(result);

// let a = function b() {
//   console.log("Hi bro!");
// };
// console.log(a());

//

// a();
// b();
// function a() {
//   console.log("a called");
// }
// var b = function () {
//   console.log("b called");
// };

// let count = 0;
// document.getElementById("btn").addEventListener("click", function () {
//   console.log("button clicked", ++count);
// });

// console.log("start");
// setTimeout(function () {
//   console.log("timeout");
// }, 2000);
// console.log("end");

// let startDate = new Date().getTime();
// let endDate = 0;

// while (endDate < startDate + 5000) {
//   endDate = new Date().getTime();
// }

// console.log("while ended");
