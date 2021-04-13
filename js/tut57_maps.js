console.log('This is tut57_maps.js')

//What are Map in javaScript: Maps are a type of object, but different from normal object, as you can have any type of key value pair inside map. You can have function as a key or value, object as a key or value, etc.

const myMap = new Map();
// console.log(myMap);

const key1 = 'myStr', key2 = {}, key3 = function(){};

//setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank object');
myMap.set(key3, 'This is an empty function');

//Getting the values from a map
let value1 = myMap.get(key1)
// console.log(value1)

//Get the size of the map
// console.log(myMap.size)

//you can loop using for..of to get keys and values
for(let [key, value] of myMap){
    // console.log(key, value)
}

//get only keys
for(let key of myMap.keys()){
    // console.log(key)
}

//get only values
for(let value of myMap.values()){
    // console.log(value)
}

//you can loop through the map using for each loop
myMap.forEach((value, key) => {
    // console.log('key is ', key)
    // console.log('Value is ', value)
})

//converting map into an array
let myArray = Array.from(myMap)
// console.log(myArray)

//converting map keys to an array
let myKeys = Array.from(myMap.keys())
// console.log(myKeys)

//converting map values to an array
let myValues = Array.from(myMap.values())
// console.log(myValues)



var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(index + ":" + item);
}