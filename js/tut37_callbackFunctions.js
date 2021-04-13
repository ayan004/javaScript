console.log('This is tut37');

//pretend that this response is coming from the server
const students = [
    {name: "ayan", subject: "javaScript"},
    {name: "dip", subject: "php"}
]

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        callback();
    }, 3000);
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}

// getStudents();
let newStudent= {name: "chadu", subject: "python"};
enrollStudent(newStudent, getStudents);

console.log('This is end tut37');