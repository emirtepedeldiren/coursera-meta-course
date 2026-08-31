function noDefaultParameters(number){
    console.log("Result:",number * number);
}

noDefaultParameters() // NaN

function withDefaultParameters(number = 10){
    console.log("Result:",number * number);
}

withDefaultParameters()

class NoDefaultParameters {
    constructor(num1,num2,num3,str1,bool1){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.str1 = str1;
        this.bool1 = bool1;
    }
    calculate(){
        if (this.bool1){
            console.log(this.str1, this.num1 + this.num2 + this.num3);
            return;
        }
        console.log("The value of bool1 is incorrect.");
    }
}

var fail = new NoDefaultParameters(1,2,3,false);
fail.calculate();

class WithDefaultParameters {
    constructor(num1 = 1 , num2 = 2 , num3 = 3 , str1 = "Result:" , bool1 = true){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.str1 = str1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.str1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect."
    }
}

var better = new WithDefaultParameters();
better.calculate();

