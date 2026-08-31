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

// Ortalama Hesaplama
const ogrenciler = [
  { ad: 'Ali', not: 85 },
  { ad: 'Ayşe', not: 92 },
  { ad: 'Can', not: 78 }
];

function ortalamaHesapla(ogrenciler){
    let toplam = 0 ; 
    for (let i=0 ; i<ogrenciler.length ; i++){
        toplam += ogrenciler[i].not;
    }
    return ortalama = toplam / ogrenciler.length
}
const sonuc = ortalamaHesapla(ogrenciler);
console.log(sonuc)


// Faktoriyel hesaplama
function calFact(a){
    
    if (a < 0){
        console.log("Can't calculate")
    }
    let sonuc = 1
    for (let i = 2 ; i <= a ; i++){
        sonuc *= i;
    }
    return sonuc
}
console.log(calFact(6))

// Random sayi uretme
function randomNumber(){
    return Math.floor(((Math.random()*10))+1)
}
console.log(randomNumber())