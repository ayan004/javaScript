// console.log("This is tut 31-ES6 classes & inheritance");

class employee {
    constructor(givenName, givenExperiance, givenDivision){
        this.name = givenName;
        this.experiance = givenExperiance;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and I am a Web developer`;
    }

    static add(a,b){
        return a+b;
    }
}

// let ayan = new employee("ayan", "0 months", "web developer");

class programmer extends employee{
    constructor(givenName, givenExperiance, givenDivision, language, github){
        super(givenName, givenExperiance, givenDivision);
        this.language = language;
        this.github = github;
    }
}

let ayan = new programmer("ayan", "0 months", "web developer", "javaScript", "ayangit");