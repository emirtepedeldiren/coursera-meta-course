var shoes = 100 ;
var stateTax = 1.2 ;

function totalPrice(shoes,tax){
    return shoes * tax
}

var toPay = totalPrice(shoes,stateTax);

console.log(toPay)

// OOP ile
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total price:",calculation);
    }
}
purchase1.totalPrice();

// OOP 2
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log("Total price:",calculation);
    }
}
purchase2.totalPrice();

// OOP 3
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice : function(){
        var calculation = this.shoes * this.stateTax ;
        console.log("Total price:",calculation);
    }
}
purchase1.totalPrice()

var purchase2 = {
    shoes: 50 ,
    stateTax: 1.2 ,
    totalPrice : function() {
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:",calculation)
    }
}
purchase2.totalPrice()

// Inheritance
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log("Eagle:",eagle1)

console.log("Eagle1 has wings:",eagle1.hasWings)
console.log("Eagle1 can fly:",eagle1.canFly)
console.log("Eagle1 has feathers:",eagle1.hasFeathers)

var eagle2 = Object.create(bird);
console.log("Eagle2 has wings:",eagle2.hasWings)

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("Penguin1:",penguin1)

console.log("Penguin1 can fly:",penguin1.canFly)
console.log("Penguin1 has feathers:",penguin1.hasFeathers)

