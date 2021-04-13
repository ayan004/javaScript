console.log('This is tut46_regularExpressions&relaateedFunctions.js')

let xyz = "ayan";  //This is a string literal in javaScript
let reg = /ayan/;  //This is a regular expression literal in javaScript
reg = /Ayan/g; //g means global --> we can use multiple exec() with global flag
// reg = /Ayan/i; //i means case sensitive 

console.log(reg);
console.log(reg.source);

let s = "This is Ayan from tarakeswar. Ayan is a sidha sadha bhola bacha. Ayan trust others very easily. So gets hurts very easily.";

//functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// console.log(result);
result = reg.exec(s);
// console.log(result);
// console.log(result.input);  //as exec() returns an array, we can use 'result' as an object
// console.log(result.index);

// 2. test() --> returns true or false
result = reg.test(s);  //-->this will return true if 'reg' is there in string 's'
console.log(result);

// 3. match() - It will return an array of results or null
result = s.match(reg);
console.log(result); 

// 4. search() - Returns index of first match else -1
result = s.search(reg);
console.log(result);

// 5. replace() - Returns new replaced string with all the replacements
result = s.replace('Ayan', 'Kelane'); //-->If no flag is given, first match will be replaced
result = s.replace(reg, 'Kelane'); //'reg' is declared in the top of the page..with 'g' flag i.e. global flag set in it..as global flag is set it will replace all the matches
console.log(result); 




