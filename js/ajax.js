console.log('This is ajax tutorial, tutorial number 34');

//fetch button
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchBtnClickHandler);

function fetchBtnClickHandler() {
    console.log('You have clicked the fetchBtn');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type','application/json');

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }


    //what to do when response is reaady
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log('Some error occoured');
        }

    }

    //send the request
    params = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);

    //printing on state change
    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState);
    }
    
    console.log('We are done');
}


//populate button
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popBtnHandler);

function popBtnHandler() {
    console.log('You have clicked the Populate Button');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //USE THIS FOR GET REQUEST
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }

    //what to do when response is reaady
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj.data){
                str += `<li>${obj.data[key].id}. ${obj.data[key].employee_name}, salary= ${obj.data[key].employee_salary}, age= ${obj.data[key].employee_age}</li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log('Some error occoured');
        }

    }

    //send the request
    xhr.send();
    
    console.log('We are done fetching employees');
}