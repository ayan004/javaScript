console.log('This is tut58_sets.js')

//what is Set - Set is like an array
//difference between set and array - set only stores unique values

const mySet = new Set(); //initialize an empty set
// console.log('The set looks like : ', mySet)

//adding values to 'mySet'
mySet.add('this')
mySet.add('we')
mySet.add('there')
mySet.add('that')
mySet.add('this')
mySet.add('this')

// console.log('The set now looks like : ', mySet)

let myArray = [1,5,3,7,6,5];
// console.log(myArray);
//converting myArray into mySet1
let mySet1 = new Set(myArray);
// console.log(mySet1);
let myArray1 = Array.from(mySet1);
// console.log(myArray1);

//checking the size of a set
// console.log(mySet.size);

//checking a value is there in the set or not -- .has() functions return true or false
// console.log(mySet.has('this'));

//deleting a value from the set
mySet.delete('there');
// console.log(mySet)

///using a constructor to initialize the set
let mySet2 = new Set([1,35,'xyz',{name: "ayan", role: "coder"},[2,5,4,'gayab']])
// console.log(mySet2)

let i = 1;
//iterating a set using for..of loop
for(let item of mySet){
    // console.log('Item ' + i++ + ": " + item);
}

i = 1;
//iterating the set using forEach loop
mySet.forEach((item) => {
    console.log('Item ' + i++ + ": " + item);
})

