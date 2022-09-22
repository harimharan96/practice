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