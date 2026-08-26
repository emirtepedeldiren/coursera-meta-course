// for loop
for (var i=1 ; i<=3 ; i++){
    console.log(i)
}
console.log("RUN!")

console.log("-".repeat(40));

for(var i=10 ; i>0 ; i--){
    console.log(i)
}
console.log("Happy New Year")

console.log("-".repeat(40));

// while loop
var counter = 3;

while (counter > 0){
    console.log(counter)
    counter = counter - 1
}
console.log("Happy New Year")

// Nested loops

for (var year=2023 ; year<2025 ; year++){
    console.log(year)
    for(var month=6 ; month<9 ; month++){
        console.log("----------",month)
    }
}

//Ornek 1
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

//Ornek 2
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}