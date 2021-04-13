console.log('This is tut41_arrowFunctions.js');

//regular syntax for function
function ayan(){
    console.log(`Don't worry(This is ayan function)`);
}
//regular syntax for function
const xyz = function (){
    console.log(`Don't worry(This is xyz function)`);
}
//another syntax
const random = () => {
    console.log(`Don't worry(This is from random function)`);
}
//function returning something
const greeting = function(){
    return "Good Morning";
}
//writing above function another syntax 
const greet = () => "Good Morning";
//one liners do not require braces/return
//one line will automatically return

//writing one line function with object in it
//you need to use here braces, because its object
const obj = () => ({name: "sabu", role: "coder"});

//regular function containing parameter
function mornGreet(name){
    console.log("Good Morning " + name);
}
//writing the abve function in another format
//single parameter do not need parenthesis
const mornGreet1 = name => "Good Morning " + name;

//multiple parameter need parenthesis
const mornGreet2 = (name,end) => "Good Morning " + name + " " + end;