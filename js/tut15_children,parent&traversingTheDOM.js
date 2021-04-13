//Describe the lines of code that you have written

//console.log(`Welcome to tut15`);

/*
What is children and parent?

-There are various single and multi element selectors, we have seen n tut14. 
-Let a element 'x' be inside another element 'y'. So y is the parent element of x. And x is the children element of y.
-This children and parent concept is useful in  element selection.
*/

let cont= document.querySelector('.no');
cont= document.querySelector('.container');
let nodeName= cont.childNodes;  //childNodes include new line characters and comments also 
nodeName= cont.childNodes[1].nodeName;
nodeName= cont.childNodes[1].nodeType;
//Node types
//1. Element
//2. Attribute
//3. Text Node
//8. Comment
//9. Document
//10. docType

console.log(container.children[1].children[0].children);  //children don't include new line characters and comments 

console.log(container.firstChild);   //firstchild outputs the firstchild that includes new line character and comments 
console.log(container.firstElementChild);  //firstElementChild don't include new line character and comments 

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.children);
console.log(container.childElementCount); //count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);  //here nextsibling outputs the second child of the container 
console.log(container.firstElementChild.nextElementSibling);  //here nextElementSibling outputs the second child element of the container
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);




