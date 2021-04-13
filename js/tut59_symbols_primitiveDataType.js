console.log('This is tut59_symbols_primitiveDataType.js')

//symbols
const sym1 = Symbol('My identfier');
const sym2 = Symbol('My identfier');
// console.log(sym1);
// console.log('Type of symbol is ', typeof sym1);
// console.log(sym1 === sym2);
let a = 1;
let b = 1;
let c = 'ayan';
let d = 'ayan';
// console.log(a === b);
// console.log(c === d);
// console.log(null === null)
// console.log(undefined === undefined)

let k1 = Symbol();
let k2 = Symbol();
let i = 6;
let bhim = 'bhim.value';
// console.log(k1 === k2);
// console.log(typeof k1);
// console.log(k1);

myObj = {};
myObj[k1]= "ayan";
myObj[k2]= "thimpu";
myObj["name"] = "Good Boy" ;
myObj[i]= "Its I";
myObj[bhim]= "bhim";
// myObj[i]= "Simpu";
// myObj[bhim]= "dinku";
// console.log(myObj)
// console.log(myObj.name);



//symbols are ignored inside for..in loop
for(key in myObj){
    // console.log(key, myObj[key]);
}

// for(let name of myObj){
//     console.log(myObj[name])
// }

// myObj.forEach((value, index) => {
//     console.log(value);
// })

myObj1 = {
    name: "ayan",
    roll: "coder",
    mindset: "duffer",
    hobby: "solving puzzles"
}
for(key in myObj1){
    // console.log(key, myObj1[key]);
}

//converting the object into string
console.log(JSON.stringify(myObj1))


