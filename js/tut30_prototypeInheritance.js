console.log('This is tut30');

// start here- 8:00

const testProto = {
    slogan : function(){
        return `This company is the best`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

// const obj = Object.create(testProto);
// obj.name = "ayan";
// obj.game = "football";
// obj.gameRole = "backy";
// obj.changeName("deep");
// console.log(obj);
// let slogan =  obj.slogan();
// console.log(slogan);

// let obj = Object.create(testProto, {
//     name: {value: "ayan", writeable: true},
//     role: {value: "Coder"}
// });
// obj.changeName("deep");
// console.log(obj);

//Employee constructor
function employee(name,salary,experiance){
    this.name = name;
    this.salary = salary;
    this.experience = experiance;
}

//slogan
employee.prototype.slogan = function(){
    return `This company is the best. Regards, ${this.name}`;
}

let ayan = new employee("ayan","0000","0months");
console.log(ayan);

//Programmer
function programmer(name,salary,experiance,language){
    employee.call(this, name, salary, experiance);
    this.language = language;    
}

let tommy = new programmer("tommy", 30000, "6 months", "javaScript");
console.log(tommy);

//inherit the prototype
programmer.prototype = Object.create(employee.prototype);
//manually set the constructor
programmer.prototype.constructor = programmer;

let tom = new programmer("tom", 30000, "6 months", "javaScript");
console.log(tom);
