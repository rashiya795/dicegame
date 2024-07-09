
function diceGame(){
var number = randomNumber();
var number1 = randomNumber1();
  var randomImage="images/dice" +  number + ".png";
   document.querySelectorAll("img")[0].setAttribute("src", randomImage);

   var randomImage1 ="images/dice" + number1 +".png";
     document.querySelectorAll("img")[1].setAttribute("src",randomImage1);

   setTimeout (function() {
          if (randomImage > randomImage1){

       document.querySelector("h1").innerHTML =" player 1 won..✨ " ;
     }
     else if (randomImage === randomImage1) {
       document.querySelector("h1").innerHTML ="Draw ..🏳️";

     }
     else if (randomImage < randomImage1) {
       document.querySelector("h1").innerHTML =" player 2 won.. ✨";
     }
   },1000);
 }
 function randomNumber(){
    return Math.floor(Math.random() * 6) + 1;

  }
  function randomNumber1(){
    return Math.floor(Math.random() * 6) + 1;
  }

diceGame();



// function diceGame(){
// //   // var numberOne = Math.floor(Math.random()*6)+1;
// //   //return  numberOne;
// var Number = randomNumber();
//   var randomImage="images/dice" +  Number +."png";
//    document.querySelectorAll("img")[0].setAttribute("src", randomImage);
// console.log(randomImage);
// }
// function randomNumber(){
//    return Math.floor(Math.random() * 6) + 1;
//
//  }
// diceGame();





// function diceGame(){
//
//
// var random = Math.random();
// random = Math.floor(random * 6) + 1;
//
// var diceImage="dice"+random + ".png" ;
//
// var randomDiceImage = "images/" + diceImage ;
//  var image1 =document.querySelectorAll("img")[0];
//  image1.setAttribute("src", randomDiceImage);
//
// var randomNumber  = Math.random();
// randomNumber = Math.floor(randomNumber * 6) + 1;
// var randoomDiceImage2 ="images/dice"+ randomNumber + ".png";
// document.querySelectorAll("img")[1].setAttribute("src",randoomDiceImage2);
//
// if (randomDiceImage > randoomDiceImage2){
//
//   document.querySelector("h1").innerHTML =" player 1 won..✨ " ;
// }
// else if (randomDiceImage === randoomDiceImage2) {
//   document.querySelector("h1").innerHTML ="Draw ..🏳️";
//
// }
// else if (randomDiceImage < randoomDiceImage2) {
//   document.querySelector("h1").innerHTML =" player 2 won.. ✨";
// }
//
//
//
//
//
//
//
//
//
//
// // function diceGame(){
// //   // var numberOne = Math.floor(Math.random()*6)+1;
// //   //return  numberOne;
// //   var randomImage="images/dice" + return randomNumber();."png";
// // document.querySelectorAll("img")[0].setAttribute("src",randomImage);
// //
// //   var randomImage1 ="images/dice" + randomNum  ber()+."png";
// //   document.querySelectorAll("img")[1].setAttribute("src",randomImage1));
// //
// //   //function delayedMessage() {
// //   //  setTimeout(function() {
// //     if (randomImage > randomImage1) {
// //       document.querySelectorAll("h1").innerHTML="player 1 won..✨";
// //
// //     }
// //     else if (randomImage === randomImage1) {
// //       document.querySelectorAll("h1").innerHTML="Draw ..🏳️";
// //
// //     }
// //     else if (randomImage < randomImage1) {
// //       document.querySelectorAll("h1").innerHTML="player 2 won.. ✨";
// //
// //     }
// // //  },3000)
// // //
// //   //}
// // }
// // function randomNumber(){
// //   return Math.floor(Math.random() * 6) + 1;
// //
// // }
// // // diceGame();
// // function diceGame() {
// //     var randomImage = "images/dice" + randomNumber() + ".png";
// //     document.querySelectorAll("img")[0].setAttribute("src", randomImage);
// //
// //     var randomImage1 = "images/dice" + randomNumber() + ".png";
// //     document.querySelectorAll("img")[1].setAttribute("src", randomImage1);
// //
// //     function delayedMessage() {
// //         setTimeout(function() {
// //             // Get the image file name from src attribute
// //             var imgSrc1 = document.querySelectorAll("img")[0].getAttribute("src");
// //             var imgSrc2 = document.querySelectorAll("img")[1].getAttribute("src");
// //
// //             // Extract the dice number from image file names
// //             var number1 = parseInt(imgSrc1.match(/\d+/)[0]); // Extract number from "images/dice1.png"
// //             var number2 = parseInt(imgSrc2.match(/\d+/)[0]); // Extract number from "images/dice2.png"
// //
// //             // Compare the dice numbers
// //             if (number1 > number2) {
// //                 document.querySelector("h1").innerHTML = "Player 1 won..✨";
// //             } else if (number1 === number2) {
// //                 document.querySelector("h1").innerHTML = "Draw..🏳️";
// //             } else {
// //                 document.querySelector("h1").innerHTML = "Player 2 won..✨";
// //             }
// //         }, 1000); // Delay of 3000 milliseconds (3 seconds)
// //     }
// //
// //     delayedMessage(); // Call delayedMessage function to start the comparison after setting images
// // }
// //
// // function randomNumber() {
// //     return Math.floor(Math.random() * 6) + 1; // Generates random number between 1 and 6
// // }
// //
// // diceGame(); // Call diceGame to initiate the game and comparison
