// var keyword

var user = "Mary";
var user = "Joanna";
var user = "Mark";

console.log(user);

// var degiskenine tanimlamadan once erisim saglar
// var degiskenini birden fazla kez error almadan degistirebiliriz

// let keyword

// let degiskenine tanimladan erisemeyiz
/* 
    console.log(user2) //Referance error vericektir
    let user2;
*/


let user3;
console.log(user3) //undefined uyarisi vericektir

user3 = "Anna";
console.log(user3); //undefined almamak icin bu sekilde deger vermemiz gerekir

// const keyword
// const degiskeni kesinlikle tanimlanmali
/*
console.log(user4);
const user4 ; //Syntax error verir
*/

/*
console.log(user4);
const user4 = "Andrew"; //Referance error vericektir
*/

const user4 = "Andrew";
user4 = "Anna";


