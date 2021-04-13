// console.log(`This is tut18`);

// Some events and there listening names

//click event --> click
//mousedown event --> mousedown
//double click event --> dblclick
//mouse-enter event --> mouseenter
//mouse-leave event --> mouseleave
//mouse-move event --> mousemove

//There are many functions(methods) available to use with a event object

document.getElementById('submit').addEventListener
(
    "click",function(e)
    {
        console.log('Thanks');
        e.preventDefault();
    }
);

document.getElementById('container').addEventListener
(
    "mouseenter",function(e)
    {
        console.log('Thanks');
        document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 129)`;
    }
);

