console.log('This is tut60_destructuring.js');

//Destructuring in JavaScript
//What is destructuring - Forgeting the old syntaxes in which we used to write codes. And doing the same work with some simpler syntax.

let a,b;
[a, b] = [34, 564];
// console.log(a);
// console.log(b);

[a,b,c, ...d] = [1,2,3,4,5,6,7,8,9,10];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

({a,b,c,...d} = {a:10, b:20, c:30, d:40, e:50, f:60, g:70, h:80});
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const fruits = ['Apple', 'Bananas', 'Mangoes', 'lichi', 'strawberry', 'cherry', 'orange', 'lemon'];
[a, b, c, d, ...e]= fruits;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


//object destructuring
const laptop = {
    model: "HP pavilion",
    age: "23 days",
    gender: "male",
    net: 1233,
    start: function(){console.log('started')}
}
// console.log(laptop);
const {model, age, gender, net, start} = laptop;
console.log(model);
console.log(age);
console.log(gender);
console.log(net);
console.log(start);