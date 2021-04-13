console.log('This is tut55_for..of_vs_for..in_loop.js');
//Important note: Only For..in loop work for object, not the For..of and forEach
//How three loops work- For..in, For..of & forEach
//For..in -> pick up the index of the object or array
//For..of -> directly pick up the value not the index
//forEach -> picks up index aand value both   

let people = ["Ayan", "Subham", "Pancha", "Lonka", "Ratish"];

//printing people using traditional for loop
// for(let i = 0; i < people.length; i++){
//     const element = people[i];
//     console.log(element);
// }

//*********For..in..loop************************************

//1. ITERATING AN OBJECT
obj = {
    name: "Ayan",
    language: "JavaScript",
    hobby: "hacking machines",
    hacked_till_date: "0 machine"
}

// 1.1 iterating an object using traditional for loop
// for(let i = 0; i < Object.keys(obj).length; i++){
//     const element = obj[Object.keys(obj)[i]];
//     console.log(Object.keys(obj)[i] + ": " + element);
// }

//1.2 iterating an object using for..in in_loop
// for(let key in obj){
//     console.log(key + ": " + obj[key]);
// }

//2. ITERATING A STRING
//2.1 we can use for in with strings..to loop through all the characters
let myString = "This is my string"   
// for(let char in myString){
//     console.log(myString[char])
// }

///2.2 Using traditional for loop to iterate through the string
// console.log(myString.length)
// for(let i = 0; i < myString.length; i++){
//     console.log(myString[i])
// }

// for(let key in people){
//     console.log(people[key]);
// }


// *****************For..Of..loop***********************

people = ["Ayan", "Subham", "Pancha", "Lonka", "Ratish"];
myString = "This is my string";

// for(let name of people){
//     console.log(name)
// }

for(let name of myString){
    // console.log(name)
}


// *****************forEach..loop***********************

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
//   console.log(index + ":" + item);
}