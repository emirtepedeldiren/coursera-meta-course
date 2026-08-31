// functional programming

var currentOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2 ;

function convertCurrency(amount,rate){
    return amount * rate ;
}

currencyTwo = convertCurrency(currentOne,exchangeRate);

console.log(currencyTwo)

// function calling and recursion
/* function example(){
    console.log('line one');
    console.log('line two');
    console.log('line three');
}
example()
*/

// recursion
let counter = 3;
function example(){
    console.log(counter);
    counter = counter - 1 ; //Burdan sonrasini koymazsak infinite loop olusur
    if (counter === 0) return;
    example();
}
example()

function randomNumber(){
    return Math.floor(((Math.random()*10))+1)
}
console.log(randomNumber())