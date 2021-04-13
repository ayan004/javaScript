console.log('This is for test on local Storage');

// const myArray = [10, 20, 30, 40, 50];
// console.log(typeof (myArray));
// console.log(typeof (JSON.stringify(myArray)));
// localStorage.setItem("No"+"1", JSON.stringify(myArray));

// const myArray = [
//     {
//         name: "donkey"
//     },
//     {
//         designation: "coder"
//     },
//     {
//         salary: 2000
//     }
// ];

// console.log(myArray);

// localStorage.setItem("testArray", JSON.stringify(myArray));

// const notes = [
//     {
//         head1: "note1"
//     },
//     {
//         head2: "note2"
//     },
//     {
//         head3: "note3"
//     }
// ];

let head = "pacha";
let note = "pocha";
let object = `,{"`+ head + `":"` + note + `"}`;
// let object = `,{"head4":"note4"}`;
// localStorage.setItem("notes", JSON.stringify(notes));
let myNotes = localStorage.getItem("notes");
console.log(myNotes);
// let length = myNotes.length;
// console.log(length);
// myNotes = myNotes.slice(1,length-1);
myNotes = `[` + myNotes + object + `]`;
// myNotes = myNotes + `,{"head4":"note4"}`;
// console.log(myNotes);
localStorage.setItem("notes", myNotes);
myNotes = localStorage.getItem("notes");
console.log(myNotes);
myNotes = JSON.parse(myNotes);
console.log(myNotes);       

