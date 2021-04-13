/*What is a JavaScript element selector?

It grabs an HTML element from the DOM. So that you can make some change in that HTML element with JavaScript.




There are two types of JavaScript selectors for HTML elements

1. Single Element Selector
2. Multi Element Selector
*/

//Practical:

console.log(`We are in tut14................`);

//Single element selector
let element= document.getElementById(`myfirst`);
//element= element.className;
// element= element.childNodes;
//element= element.parentNode; 
// element.style.color= `red`;
//element.innerText= `Harry is a good boy`;
// element.innerHTML= `<b>This text is bold</b>`;
// console.log(element);

let sel= document.querySelector(`#mysecond`);
sel= document.querySelector(`.child`);
sel= document.querySelector(`div`);
console.log(sel);



//start from multi element selector
