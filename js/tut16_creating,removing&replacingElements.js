console.log(`this is tut16`);

//Three objective of this tutorial
//1. Creating element
//2. Replacing element
//3. Removing element

//1. Creating element

let element= document.createElement(`li`);
let text= document.createTextNode(`I am a text node`);
element.appendChild(text);

//setting attributes to created element
element.className= 'createdClass';
// element.id= 'createdId';
element.setAttribute('title','mytitle');

//let div= document.querySelector('div.container');
// element.innerText= `This is created by ayan`;
// element.innerHTML= `<b>This is created by ayan</b>`;
// div.appendChild(element);

// console.log(element);
// console.log(div);


//2. Replacing element

let element2= document.createElement(`h3`);
element2.id=`element2`;
element2.className=`element2`;
let tnode= document.createTextNode(`this is element2`);
element2.appendChild(tnode);
// console.log(element2);
element.replaceWith(element2);

let container= document.getElementById(`container`);
// console.log(container);
container.replaceChild(element2, document.getElementById(`mysecond`));


//3. Removing element
// container.removeChild(document.getElementById(`element2`));


//some methods on attributes
// element2.removeAttribute('id');  // removeAttribute
// let attri= element2.getAttribute('id');  //getAttribute method
// let attri= element2.hasAttribute('href');  // hasAttribute
// setAttribute
// console.log(attri);

//create a heading element with text as "Go to CodeWithHarry" and create an tag outside it with href= "https://www.codewithharry.com"

let heading= document.createElement('h4');
heading.id=`heading`;
heading.className=`heading`;
heading.innerHTML= `<a href=https://www.codewithharry.com>Go to CodeWithHarry</a>`;

let div= document.querySelector('div#container');
div.appendChild(heading);

console.log(heading);