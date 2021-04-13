// console.log('This is tut 28');

//object literal : object.prototype 
let obj = {
    name: "harry",
    channel: "Code with harry",
    address: "Mars"
}

function test(givenName, givenGame){
    this.name = givenName;
    this.game = givenGame;
}

Object.prototype.getName = function(){
    return this.name;
}
test.prototype.getGame = function(){
    return this.game;
}

let obj2 = new test("xyz", "Trekking");
let obj3 = new test("abc", "Climbing");
console.log(obj);
console.log(obj2);
console.log(obj3);