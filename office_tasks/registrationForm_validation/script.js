function validateForm() {
  // Below code - checks name field - starting
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
      }
    }
  }
  if (check == 0) {
    let nameAlphabet = document.getElementById("nameAlphabet");
    nameAlphabet.innerText = " ";
  }
  // above code - checks name field - ending

  // below code - checks roll field - starting
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
  // above code - checks roll field - ending

  // below code - checks subjects field - starting
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
  // above code - checks subjects field - ending

  //below code - checks email field - starting
  let email = document.forms["myForm"]["email"].value;
  if (email.length == 0) {
    let validateEmail = document.getElementById("validateEmail");
    validateEmail.innerText = "*This is a mandatory field";
  } else {
    let validateEmail = document.getElementById("validateEmail");
    validateEmail.innerText = " ";
  }
  // above code - checks email field - ending

  let username = document.forms["myForm"]["username"].value;
  let password = document.forms["myForm"]["password"].value;

  // below code will decide form can be submitted or not - starting
  if (
    name == "" ||
    rollNo == "" ||
    sub1 == "" ||
    sub2 == "" ||
    sub3 == "" ||
    email == "" ||
    username == "" ||
    password == ""
  ) {
    alert("Form cannot be submitted");
    return false;
  }
  // above code will decide form can be submitted or not - ending
}
