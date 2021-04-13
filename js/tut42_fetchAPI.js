console.log('This is tut42_fetchAPI.js');

//button with id myBtn
let myBtn = document.getElementById("myBtn");

//div with id content
let content = document.getElementById("content");

// function getData(){
//     url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// getData();


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = 	`{"name":"test2433sdsad5","salary":"123","age":"23"}`
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data))
}

postData();
//failed to execute this post data function, don't know why.. skipping this problem for now..beacuse I am doing this now just to understand the concept...and I have understood the concept 

