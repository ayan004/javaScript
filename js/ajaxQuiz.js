console.log('This is ajax quiz');

let fetchFruits = document.getElementById('fetchFruits');
fetchFruits.addEventListener('click', fetchFruitsFn);

function fetchFruitsFn() {
    console.log('You have clicked the fetch fruits button');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object and give required commands
    xhr.open('GET', 'fruits.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let heading = document.getElementById('heading');
            heading.innerText = 'Fruits';
            let data = JSON.parse(this.responseText);
            console.log(data);
            let list = document.getElementById('list');
            str = "";
            for(x in data.data){
                str += `<li>${data.data[x].fruit_name}, Price of 1 kg: ${data.data[x].price_per_kg}</li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log('Some error occoured');
        }
    }

    //send the request
    xhr.send();
}