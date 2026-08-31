// console.log(a+b);
// console.log("This line is never reached")
// ReferanceError()

// throw new ReferenceError();

try {
    console.log(err)
} catch(err){
    console.log("There was an error")
    console.log("The error was saved in the error log")
}
console.log("My program does not stop")

try {
    throw new ReferenceError();
} catch(error){
    console.log(err)
    console.log("There was a Referance Error")
}
console.log("My program does not stop")
