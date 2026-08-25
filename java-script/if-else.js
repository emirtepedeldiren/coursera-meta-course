var result = 50 ; 

if (result > 40) {
    console.log("You passed the test.")
} else {
    console.log("You did not pass the test.")
}

// else if
var place = "first";

if (place =="first"){
    console.log("Gold")
} else if (place == "second"){
    console.log("Silver")
} else if (place == "third"){
    console.log("Bronze")
} else {
    console.log("No Medal")
}

// switch statement
var place = "first";

switch(place){
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No Medal")
}

