function addTwoNumber() {
    var a = 10 ;
    var b = 20 ;
    var c = a + b ;
    console.log(c)

}
addTwoNumber()

function addTwoNumber2(a,b) {
    console.log(a + b)
}
addTwoNumber2(5,6)

// Asal sayi kontrolu
function isPrime(a) {
    var counter = 0 ; 
    for (var i=1 ; i<=a ; i++){
        if (a % i == 0 ) {
            counter = counter + 1
        }
    }
    if (counter == 2){
        console.log("It's a prime number.")
    } else {
        console.log("It's not a prime number.")
    }
}
isPrime()