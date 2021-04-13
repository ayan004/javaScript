// console.log("This is binary tree");

//below code - create the parent list - starting
//---------------------------------------------------------------------------------
let nodes = localStorage.getItem("nodes");
nodes = JSON.parse(nodes);
if (nodes == null) {
} else {
  var options = "";
  for (var i = 0; i < nodes.length; i++) {
    var count = 0;
    for (var j = i + 1; j < nodes.length; j++) {
      if (Object.keys(nodes[i])[0] == Object.values(nodes[j])[0]) {
        count++;
      }
    }
    if (count == 2) {
      continue;
    }
    options = options + `<option>` + Object.keys(nodes[i]) + `</option>`;
  }
}
let selectParent = document.getElementById("selectParent");
// test = `<option>No parent</option><option>a</option><option>b</option><option>c</option><option>d</option>`;
selectParent.innerHTML =
  `<select name="parent" size="3" id="parent"><option>No parent</option>` +
  options +
  `</select>`;
//---------------------------------------------------------------------------------
//above code - create the parent list - ending

//function to run on click on Add button - start
//-------------------------------------------------------------------------------------
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let child = document.getElementById("child");
  let parent = document.getElementById("parent");
  console.log(parent.value);
  //-----------------------------------------------------------------------------------
  //checking the declared child
  let nodes = localStorage.getItem("nodes");
  nodes = JSON.parse(nodes);
  var childCheck = 0;
  if (nodes != null) {
    for (var i = 0; i < nodes.length; i++) {
      if (child.value == Object.keys(nodes[i])[0]) {
        childCheck++;
      }
    }
  }
  //-----------------------------------------------------------------------------------
  //actual insertion in the local storage
  if (parent.value != "" && childCheck == 0) {
    if (nodes == null) {
      let object = `{"` + child.value + `":"` + parent.value + `"}`;
      nodes = `[` + object + `]`;
      localStorage.setItem("nodes", nodes);
    } else {
      nodes = JSON.stringify(nodes);
      let object = `,{"` + child.value + `":"` + parent.value + `"}`;
      let length = nodes.length;
      nodes = nodes.slice(1, length - 1);
      nodes = `[` + nodes + object + `]`;
      localStorage.setItem("nodes", nodes);
    }
    let warningOnParent = document.getElementById("warningOnParent");
    warningOnParent.innerHTML = "";
    let warningOnChild = document.getElementById("warningOnChild");
    warningOnChild.innerHTML = "";
    child.value = "";
    parent.value = "";
    window.location = "sucess.html";
  } else {
    //------------------------------------------------------------------------------
    //putting the warnings on - 1. duplicate child entry - 2. no parent selection
    if (parent.value == "" && childCheck != 0) {
      //both the warnings
      let warningOnParent = document.getElementById("warningOnParent");
      warningOnParent.innerHTML =
        "<h3>*You cannot add a value without selecting its parent</h3>";
      let warningOnChild = document.getElementById("warningOnChild");
      warningOnChild.innerHTML =
        "<h3>*This child is duplicate..original one is declared earlier</h3>";
    } else if (parent.value == "") {
      //no parent selection
      let warningOnParent = document.getElementById("warningOnParent");
      warningOnParent.innerHTML =
        "<h3>*You cannot add a value without selecting its parent</h3>";
    } else {
      //duplicate child entry
      let warningOnChild = document.getElementById("warningOnChild");
      warningOnChild.innerHTML =
        "<h3>*This child is duplicate..original one is declared earlier</h3>";
    }
    //------------------------------------------------------------------------------
  }
  //   location.reload();
});
//-------------------------------------------------------------------------------------
//function to run on click on Add button - end
