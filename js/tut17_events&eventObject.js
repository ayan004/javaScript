// console.log(`this is tut17`);

//mouse click('click' event), mouse hover('mouseover' event) over any oject, etc,  are called the events. And javaScript gives you the ability to play with those events. For listening to a event, you have to open a listener function. And that listener function creates a listener object. And that listener object can return you many values and can use many methods. That you can use in your code and make your webpage more beautiful.

//mouse click('click' event)
//mouse hover('mouseover' event)

// document.getElementById('heading').addEventListener
// (
//     'click',function(e)
//     {
//         console.log('You have clicked the heading');
//         // location.href= '//google.com'
//         let variable= Array.from(e.target.classList);
//         variable= e.target.id;
//         variable= e.offsetX;
//         variable= e.offsetY;
//         variable= e.clientX;
//         variable= e.clientY;
//         console.log(variable);
//     }
// );

document.getElementById('heading').addEventListener
(
    "mouseover",function(e)
    {
        console.log('You have clicked the heading');
        // location.href= '//google.com'
        let variable= Array.from(e.target.classList);
        variable= e.target.id;
        variable= e.offsetX;
        variable= e.offsetY;
        variable= e.clientX;
        variable= e.clientY;
        console.log(variable);
    }
);