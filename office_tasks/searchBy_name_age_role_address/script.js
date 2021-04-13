console.log("This is script.js");

let empList = [
  {
    name: "Rebanta Ganguly",
    age: "38",
    role: "CEO",
    address: "Birbhum",
  },
  {
    name: "Joy Chatterjee",
    age: "32",
    role: "CFO",
    address: "Haripal",
  },
  {
    name: "Chiranjit Bej",
    age: "25",
    role: "Python Developer",
    address: "Midnapur",
  },
  {
    name: "Dipayan Tah",
    age: "25",
    role: "Trainee",
    address: "Tarakeswar",
  },
  {
    name: "Abir Bhowmick",
    age: "25",
    role: "JS Developer",
    address: "Midnapur",
  },
  {
    name: "Sanju Pramanick",
    age: "25",
    role: "Digital Marketer",
    address: "Singhla",
  },
  {
    name: "Arnab Basu",
    age: "28",
    role: "Designer",
    address: "Kolkata",
  },
  {
    name: "Alok Dhara",
    age: "30",
    role: "Designer",
    address: "Gazipur",
  },
  {
    name: "Fazlur Rahaman",
    age: "30",
    role: "Developer",
    address: "Kolkata",
  },
  {
    name: "S Jana",
    age: "35",
    role: "Tester",
    address: "Kolkata",
  },
  {
    name: "H Hati",
    age: "27",
    role: "Tester",
    address: "Cherapunji",
  },
  {
    name: "H Hati",
    age: "29",
    role: "Designer",
    address: "Singur",
  },
];

let tableRows = document.getElementById("tableRows");
let tableData = "";
for (var i = 0; i < empList.length; i++) {
  tableData =
    tableData +
    `<tr>     
        <td>` +
    empList[i].name +
    `</td>
        <td>` +
    empList[i].age +
    `</td>
        <td>` +
    empList[i].role +
    `</td>
        <td>` +
    empList[i].address +
    `</td>
    </tr>`;
}
tableRows.innerHTML = tableData;

let search = document.getElementById("searchedCharacters");
let btn = document.getElementById("searchBtn");

btn.addEventListener("click", () => {
  let output = document.getElementById("searchedOutput");
  output.innerHTML = "";
  let searchedWord = search.value.toLowerCase();
  let firstCharacter = searchedWord.substr(0, 1);
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let count = 0;
  //----------------------------------------------------------------------------------------
  if (alphabets.includes(firstCharacter)) {
    //--------------------------------------------------------------------------------------
    //below code searches in the name
    for (var i = 0; i < empList.length; i++) {
      var name = empList[i].name;
      name = name.toLowerCase();
      if (name.includes(searchedWord)) {
        let outputDiv = document.createElement("div");
        outputDiv.innerHTML =
          `
        <h3>Name : </h3> <span class="displayOutput">` +
          empList[i].name +
          `</span>
        <h3>Age : </h3> <span class="displayOutput">` +
          empList[i].age +
          `</span>
        <h3>Role : </h3> <span class="displayOutput">` +
          empList[i].role +
          `</span>
        <h3>Address : </h3> <span class="displayOutput">` +
          empList[i].address +
          `</span>
      <br>
    `;
        output.appendChild(outputDiv);
        count++;
      }
    }
    //--------------------------------------------------------------------------------------
    //below code searches in the role
    for (var i = 0; i < empList.length; i++) {
      var role = empList[i].role;
      role = role.toLowerCase();
      if (role.includes(searchedWord)) {
        let outputDiv = document.createElement("div");
        outputDiv.innerHTML =
          `
        <h3>Name : </h3> <span class="displayOutput">` +
          empList[i].name +
          `</span>
        <h3>Age : </h3> <span class="displayOutput">` +
          empList[i].age +
          `</span>
        <h3>Role : </h3> <span class="displayOutput">` +
          empList[i].role +
          `</span>
        <h3>Address : </h3> <span class="displayOutput">` +
          empList[i].address +
          `</span>
      <br>
    `;
        output.appendChild(outputDiv);
        count++;
      }
    }
    //--------------------------------------------------------------------------------------
    //below code searches in the address
    for (var i = 0; i < empList.length; i++) {
      var address = empList[i].address;
      address = address.toLowerCase();
      if (address.includes(searchedWord)) {
        let outputDiv = document.createElement("div");
        outputDiv.innerHTML =
          `
        <h3>Name : </h3> <span class="displayOutput">` +
          empList[i].name +
          `</span>
        <h3>Age : </h3> <span class="displayOutput">` +
          empList[i].age +
          `</span>
        <h3>Role : </h3> <span class="displayOutput">` +
          empList[i].role +
          `</span>
        <h3>Address : </h3> <span class="displayOutput">` +
          empList[i].address +
          `</span>
      <br>
    `;
        output.appendChild(outputDiv);
        count++;
      }
    }
    //--------------------------------------------------------------------------------------
  }
  //----------------------------------------------------------------------------------------
  else if (numbers.includes(firstCharacter)) {
    // console.log("its a number");
    for (var i = 0; i < empList.length; i++) {
      var age = empList[i].age;
      if (age.includes(searchedWord)) {
        let outputDiv = document.createElement("div");
        outputDiv.innerHTML =
          `
        <h3>Name : </h3> <span class="displayOutput">` +
          empList[i].name +
          `</span>
        <h3>Age : </h3> <span class="displayOutput">` +
          empList[i].age +
          `</span>
        <h3>Role : </h3> <span class="displayOutput">` +
          empList[i].role +
          `</span>
        <h3>Address : </h3> <span class="displayOutput">` +
          empList[i].address +
          `</span>
      <br>
    `;
        output.appendChild(outputDiv);
        count++;
      }
    }
  }
  //----------------------------------------------------------------------------------------
  if (count == 0) {
    output.innerHTML = `<h3 style="color:red"> * No match found <h3>`;
  }
});
//------------------------------------------------------------------------------------------
