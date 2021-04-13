// console.log("This is sucess.js");

//---------------------------------------------------------------------------------------
var test = {
  one: ["Saab", "Volvo", "BMW"],
  two: ["chop", "beguni", "muri"],
  three: ["ambala"],
  four: ["halala", "mala"],
};
test = Object.entries(test);
// console.log(typeof "parentChild");
//---------------------------------------------------------------------------------------
//Parent array - array will contain only parents
let nodes = localStorage.getItem("nodes");
nodes = JSON.parse(nodes);
let parentArray = new Array();
if (nodes != null) {
  for (var i = 0; i < nodes.length; i++) {
    parentArray[i] = Object.values(nodes[i])[0];
  }
  parentArray = [...new Set(parentArray)];
}
//---------------------------------------------------------------------------------------
//child array - array will contain set of childs
let childArray = new Array();
for (var i = 0; i < parentArray.length; i++) {
  childArray[i] = new Array();
  for (var j = 0; j < nodes.length; j++) {
    if (parentArray[i] == Object.values(nodes[j])[0]) {
      childArray[i].push(Object.keys(nodes[j])[0]);
    }
  }
}
//---------------------------------------------------------------------------------------
//create parentChild array of objects
let parentChildArray = new Array();
for (var i = 0; i < parentArray.length; i++) {
  parentChildArray[i] = { [parentArray[i]]: childArray[i] };
}
//---------------------------------------------------------------------------------------
//create binary tree
for (var i = parentArray.length - 1; i > 0; i--) {
  let parent = parentArray[i];
  let j = i - 1;
  let matched = 0;
  do {
    var k = 0;
    do {
      if (childArray[j][k] == parent) {
        matched++;
      }
      k++;
    } while (childArray[j][k] != undefined && matched == 0);
    j--;
  } while (j >= 0 && matched == 0);
  Object.values(parentChildArray[++j])[0][--k] = undefined;
  Object.values(parentChildArray[j])[0][k] = parentChildArray[i];
}
let binaryTree = parentChildArray[0];
console.log(binaryTree);
//---------------------------------------------------------------------------------------
let displayData = document.getElementById("displayData");
let data = JSON.stringify(binaryTree);
console.log(data.length);
// data = data.substr(1, data.length);
displayData.innerHTML = "<p>" + data + "</p>";
// var table = document.getElementById("table");
// table.innerHTML = `<tr>
//         <th>PARENT</th>
//         <th>CHILD</th>
//         <th>CHILD</th>
//       </tr>
//       <tr>
//         <td>a</td>
//         <td>b</td>
//         <td>c</td>
//       </tr>
//       <tr>
//         <td>e</td>
//         <td>f</td>
//         <td>g</td>
//       </tr>`;
