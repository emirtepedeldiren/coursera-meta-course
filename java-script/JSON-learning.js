const jsonStr = '{"greeting":"hello"}'
JSON.parse(jsonStr)

const aPlainObj = JSON.parse(jsonStr);
aPlainObj.greeting = 'hi'

console.log(aPlainObj);

// Datayla calisma

const data = {
    firstName : "Emir",
    lastName : "Tepedeldiren",
    greeting : "Hello"
}

const JsonData = JSON.stringify(data);
console.log(JsonData); //Json datasinda keyler cift tirnak icinde tutulur
console.log(data);





