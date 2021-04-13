console.log('This is tut39b_copyOfTut37');

//pretend that this response is coming from the server
const students = [
    {name: "ayan", subject: "javaScript"},
    {name: "dip", subject: "php"}
]

function enrollStudent(student){
    return new Promise((resolve, reject) => {
        students.push(student);
        const error = false;
        if(!error){
            resolve();
        }
        else{
            reject();
        }
    });
}

// enrollStudent().then(() => {
//     getStudents();
// }).catch(() => {
//     console.log('Some error occoured');
// })

function getStudents(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
}

let newStudent= {name: "chadu", subject: "python"}; 
enrollStudent(newStudent).then(() => {
    getStudents();
}).catch(() => {
    console.log('Some error occoured');
})

console.log('This is end tut37');