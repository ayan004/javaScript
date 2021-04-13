// let inputName = document.getElementById("name");
// const inputName = document.querySelector("name");
// inputName.addEventListener("click", function () {
//   console.log("its working");
// });

// below code - validates name field - start
function validateName() {
  let name = document.forms["myForm"]["name"].value;
  nameLength = name.length;
  if (name.length == 0) {
    let validateName = document.getElementById("nameLength");
    validateName.innerText = "*This is a mandatory field";
  } else {
    let validateName = document.getElementById("nameLength");
    validateName.innerText = "";
  }
  if (name.length > 5) {
    let validateName = document.getElementById("nameLength");
    validateName.innerText = "*Your name should not exceed 5 characters";
  }
  let checkName = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let check = 0;
  for (let i = 0; i < name.length; i++) {
    if (checkName.includes(name.charAt(i)) == false) {
      if (name.indexOf(" ") >= 0) {
      } else {
        let nameAlphabet = document.getElementById("nameAlphabet");
        nameAlphabet.innerText =
          "*Name cannot contain anything other than alphabets";
        check++;
      }
    }
  }
  if (check == 0) {
    let nameAlphabet = document.getElementById("nameAlphabet");
    nameAlphabet.innerText = " ";
  }
}
// above code - validates name field - end

// below code - validates roll field - start
function validateRoll() {
  let checkRoll =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let rollNo = document.forms["myForm"]["rollNo"].value;
  if (rollNo.length == 0) {
    let validateRoll = document.getElementById("validateRoll");
    validateRoll.innerText = "*This is a mandatory field";
  } else {
    let validateRoll = document.getElementById("validateRoll");
    validateRoll.innerText = " ";
  }
  for (let i = 0; i < rollNo.length; i++) {
    if (checkRoll.includes(rollNo.charAt(i)) == false) {
      let validateRoll = document.getElementById("validateRoll");
      validateRoll.innerText = "*Entered roll no is invalid";
    }
  }
}
// above code - validates roll field - end

// below code - validates subjects field - start
function validateSub() {
  let sub1 = document.forms["myForm"]["sub1"].value;
  let sub2 = document.forms["myForm"]["sub2"].value;
  let sub3 = document.forms["myForm"]["sub3"].value;
  if (sub1 == "" && sub2 == "" && sub3 == "") {
    let validateSubjects1 = document.getElementById("validateSubjects1");
    validateSubjects1.innerText = "*This is a mandatory field";
  } else {
    let validateSubjects1 = document.getElementById("validateSubjects1");
    validateSubjects1.innerText = " ";
  }
  if (sub1 == "" || sub2 == "" || sub3 == "") {
    let validateSubjects2 = document.getElementById("validateSubjects2");
    validateSubjects2.innerText = "*All 3 fields should be filled";
  } else {
    let validateSubjects2 = document.getElementById("validateSubjects2");
    validateSubjects2.innerText = " ";
  }
}
// above code - validates subjects field - end

// below code - validates email field - start
function validateEmail() {
  let email = document.forms["myForm"]["email"].value;
  if (email.length == 0) {
    let validateEmail = document.getElementById("validateEmail");
    validateEmail.innerText = "*This is a mandatory field";
  } else {
    let validateEmail = document.getElementById("validateEmail");
    validateEmail.innerText = " ";
  }
}
// above code - validates email field - end
