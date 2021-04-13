/*
You have to create a div and inject it into the page which contains a heading.
Whenever someone clicks on the div, it should be converted into an editable item.
Whenever user clicks away(blur), save the note into the local storage.
*/

//create a element that can be inserted into DOM
let divElement= document.createElement('div');

//add text to that created elemeent 
let val= localStorage.getItem('stext');
let text;
if(val == null)
{
    text= document.createTextNode('This is my element. Click to edit it.');
}
else
{
    text= document.createTextNode(val);
}
divElement.appendChild(text);

//give element id, style and class 
divElement.setAttribute('id','divElement');
divElement.setAttribute('class','divElement');
divElement.setAttribute('style','border: 2px solid black; width: 154px; margin:34px; padding: 23px;');
console.log('ram');
console.log(divElement);

//grab the container and myfirst id
let container= document.querySelector('#container');
let myfirst= document.querySelector('#myfirst');

//insert the created element before element with myfirst id
container.insertBefore(divElement, myfirst);

console.log('lappy');

//add event listener to the divElement
divElement.addEventListener
(
    'click', function()
    {
        let lengthOfTextArea = document.getElementsByClassName('textarea').length;
        if(lengthOfTextArea == 0)
        {
            let html= divElement.innerHTML;  
            divElement.innerHTML= `<textarea class="textarea form-control" id="textarea" rows="3"> ${html} </textarea>`;
        }
        
        //listen for the blur event on textarea
        // let textarea= document.getElementById('textarea');
        // textarea.addEventListener('blur', function(){
        //     divElement.innerHTML = textarea.value;
        //     localStorage.setItem('stext', textarea.value);
        // }) 
        let textarea= document.getElementById('textarea');
        textarea.addEventListener('blur', function(){
            divElement.innerHTML=textarea.value;
            localStorage.setItem('stext', textarea.value);
        }) 
    }
)



//14:09