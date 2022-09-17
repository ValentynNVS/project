"use strict";
//alert("Hello")
//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Are you over 18?", "Yes");
//console.log(answer + 5);

const answers = [];

answers[0] = prompt("What is your name", "");
answers[1] = prompt("How old are you", "");
answers[2] = prompt("What is your surname", "");

//document.write(answers);
console.log(typeof(answers));
//УРОК 1 СВЕРХУ
//УРОК 2 СНИЗУ
const category = "toys";

console.log(`https://someurl.com/${category}/5`);

const user = "Valik";
alert(`Привет, ${user}` );
//УРОК 2 СВЕРХУ
//УРОК 3 СНИЗУ
console.log("arr" + "- object");
console.log(4 + "5");


let incr = 10,
    decro = 10;

//incr++;
//decro--;

console.log(++incr);
console.log(--decro);

console.log(5%2);

console.log(2+2*2 !== '8');

const isChacked = false,
    isClose = false;

console.log(isChacked || !isClose);
//УРОК 3 СВЕРХУ
