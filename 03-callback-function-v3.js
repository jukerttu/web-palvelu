// use: 03-callback-function-v3.js
// Funktio voidaan tuoda parametrinä toiselle funktiolle !
const myFunctionWithCallback = (param1, param2, callback) => callback(param1, param2)
// Lambda function syntax --> vastaa tavallista anonyymia funktiota
//const myFunc = function(p1, p2) {return 'Pizza with something: ' + p1 + ', ' + p2}
const myFunc = (p1, p2) => 'Pizza with something: ' + p1 + ', ' + p2 

const result = myFunctionWithCallback('ham', 'cheese', myFunc )
const result2 = myFunctionWithCallback('ham', 'sausage', myFunc )

console.log(result)
console.log(result2)